<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Deal;
use App\Models\DealStage;
use App\Models\Contact;
use App\Models\Conversation;
use App\Models\Message;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Barryvdh\DomPDF\Facade\Pdf;

class ReportController extends Controller
{
    public function index()
    {
        // 1. KPI Cards — Negócios
        $activeDealsCount = Deal::where('status', 'open')->count();
        $totalDealsValue  = Deal::where('status', 'open')->sum('value');
        $wonCount         = Deal::where('status', 'won')->count();
        $totalEnded       = Deal::whereIn('status', ['won', 'lost'])->count();
        $conversionRate   = $totalEnded > 0 ? round(($wonCount / $totalEnded) * 100, 1) : 0;
        $newLeadsThisWeek = Contact::where('created_at', '>=', Carbon::now()->startOfWeek())->count();

        // 2. KPI Cards — Atendimento
        $openConversations     = Conversation::where('status', 'open')->count();
        $resolvedToday         = Conversation::where('status', 'resolved')
                                    ->whereDate('updated_at', today())->count();
        $totalConversationsWeek = Conversation::where('created_at', '>=', Carbon::now()->startOfWeek())->count();

        $kpiCards = [
            ['title' => 'Negociações Ativas',    'value' => $activeDealsCount, 'trend' => '+5%',  'trendUp' => true,  'icon' => 'briefcase'],
            ['title' => 'Volume em Pipeline',     'value' => 'R$ ' . number_format($totalDealsValue, 0, ',', '.'), 'trend' => '+12%', 'trendUp' => true, 'icon' => 'trending-up'],
            ['title' => 'Taxa de Conversão',      'value' => $conversionRate . '%', 'trend' => $conversionRate > 0 ? '+' . $conversionRate . '%' : '0%', 'trendUp' => $conversionRate > 0, 'icon' => 'percent'],
            ['title' => 'Novos Leads (Semana)',   'value' => $newLeadsThisWeek,  'trend' => '+18%', 'trendUp' => true, 'icon' => 'users'],
            ['title' => 'Conversas Abertas',      'value' => $openConversations,  'trend' => '',     'trendUp' => null, 'icon' => 'message-circle'],
            ['title' => 'Resolvidas Hoje',        'value' => $resolvedToday,      'trend' => '',     'trendUp' => null, 'icon' => 'check-circle'],
            ['title' => 'Atendimentos (Semana)',  'value' => $totalConversationsWeek, 'trend' => '', 'trendUp' => null, 'icon' => 'inbox'],
            ['title' => 'Negócios Ganhos',        'value' => $wonCount,           'trend' => '',     'trendUp' => null, 'icon' => 'trophy'],
        ];

        // 3. Timeline Data — Last 14 days: deals + conversations per day
        $timelineData = [];
        for ($i = 13; $i >= 0; $i--) {
            $date    = Carbon::now()->subDays($i);
            $dayName = $date->format('d/m');

            $dealsCount         = Deal::whereDate('created_at', $date->toDateString())->count();
            $conversationsCount = Conversation::whereDate('created_at', $date->toDateString())->count();
            $resolvedCount      = Conversation::where('status', 'resolved')
                                      ->whereDate('updated_at', $date->toDateString())->count();

            $timelineData[] = [
                'time'          => $dayName,
                'deals'         => $dealsCount,
                'conversas'     => $conversationsCount,
                'resolvidas'    => $resolvedCount,
            ];
        }

        // 4. Pie/Donut — Deals by Stage
        $stages  = DealStage::withCount('deals')->orderBy('order')->get();
        $colors  = ['#6366F1', '#A855F7', '#F59E0B', '#10B981', '#3B82F6', '#EC4899', '#14B8A6', '#F97316'];
        $pieData = $stages->values()->map(function ($stage, $idx) use ($colors) {
            return [
                'name'  => $stage->name,
                'value' => $stage->deals_count,
                'color' => $colors[$idx % count($colors)],
            ];
        })->toArray();

        // 5. Funnel Data — Value by Stage
        $funnelData = $stages->map(function ($stage) {
            return [
                'stage' => $stage->name,
                'value' => (float) Deal::where('deal_stage_id', $stage->id)->sum('value'),
                'count' => Deal::where('deal_stage_id', $stage->id)->count(),
            ];
        })->toArray();

        // 6. Operator Productivity — messages and resolutions
        $operatorProductivity = User::select('users.id', 'users.name')
            ->leftJoin('messages', function($join) {
                $join->on('messages.sender_id', '=', 'users.id')
                     ->where('messages.sender_type', '=', 'user');
            })
            ->selectRaw('users.id, users.name, COUNT(DISTINCT messages.id) as messages_count')
            ->groupBy('users.id', 'users.name')
            ->get()
            ->map(function($user) {
                $resolved = Conversation::where('assigned_to', $user->id)
                    ->where('status', 'resolved')
                    ->count();
                return [
                    'id' => $user->id,
                    'name' => $user->name,
                    'messages_count' => $user->messages_count,
                    'resolved_count' => $resolved,
                ];
            })->toArray();

        // 7. Attribution — Conversations by Channel
        $channelStats = DB::table('conversations')
            ->join('channels', 'channels.id', '=', 'conversations.channel_id')
            ->select('channels.name', 'channels.type', DB::raw('count(*) as count'))
            ->groupBy('channels.name', 'channels.type')
            ->get()
            ->toArray();

        // 8. TMR (Time-to-First-Response) calculation — Optimized with joinSub
        $firstUserMessagesQuery = DB::table('messages')
            ->select('conversation_id', DB::raw('MIN(created_at) as first_reply_at'))
            ->where('sender_type', 'user')
            ->groupBy('conversation_id');

        $avgResponseData = DB::table('conversations')
            ->joinSub($firstUserMessagesQuery, 'first_replies', function($join) {
                $join->on('conversations.id', '=', 'first_replies.conversation_id');
            })
            ->where('conversations.created_at', '>=', now()->subDays(15))
            ->select(DB::raw('AVG(TIMESTAMPDIFF(MINUTE, conversations.created_at, first_replies.first_reply_at)) as avg_time'))
            ->first();

        $avgResponseMinutes = $avgResponseData ? ($avgResponseData->avg_time ?? null) : null;
        $avgResponseTime = $avgResponseMinutes ? round($avgResponseMinutes) . "m" : "0m";

        // 9. Operator leaderboard (Required by frontend)
        $operatorStats = User::select('users.id', 'users.name')
            ->join('conversations', 'conversations.assigned_to', '=', 'users.id')
            ->where('conversations.status', 'resolved')
            ->selectRaw('users.id, users.name, COUNT(conversations.id) as resolved_count')
            ->groupBy('users.id', 'users.name')
            ->orderByDesc('resolved_count')
            ->limit(10)
            ->get();

        return Inertia::render('Reports/Index', [
            'stats' => [
                'kpiCards'          => $kpiCards,
                'timelineData'      => $timelineData,
                'pieData'           => $pieData,
                'funnelData'        => $funnelData,
                'operatorStats'     => $operatorStats,
                'productivity'      => $operatorProductivity,
                'attribution'       => $channelStats,
                'avgResponseTime'   => $avgResponseTime
            ]
        ]);
    }

    public function exportPdf()
    {
        // Reutiliza a lógica de KPIs
        $activeDealsCount = Deal::where('status', 'open')->count();
        $totalDealsValue  = Deal::where('status', 'open')->sum('value');
        $wonCount         = Deal::where('status', 'won')->count();
        $totalEnded       = Deal::whereIn('status', ['won', 'lost'])->count();
        $conversionRate   = $totalEnded > 0 ? round(($wonCount / $totalEnded) * 100, 1) : 0;

        $html = "
        <style>
            body { font-family: sans-serif; color: #333; }
            .header { text-align: center; margin-bottom: 30px; }
            .kpi-grid { display: block; width: 100%; }
            .kpi-card { width: 45%; display: inline-block; margin: 10px; padding: 15px; border: 1px solid #ddd; border-radius: 8px; }
            .kpi-title { font-size: 12px; color: #666; text-transform: uppercase; }
            .kpi-value { font-size: 20px; font-weight: bold; margin-top: 5px; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th, td { border: 1px solid #eee; padding: 10px; text-align: left; font-size: 12px; }
            th { background: #f9f9f9; }
        </style>
        <div class='header'>
            <h1>Relatório de Performance - LaraCRM</h1>
            <p>Gerado em: " . date('d/m/Y H:i') . "</p>
        </div>
        <div class='kpi-grid'>
            <div class='kpi-card'>
                <div class='kpi-title'>Negociações Ativas</div>
                <div class='kpi-value'>$activeDealsCount</div>
            </div>
            <div class='kpi-card'>
                <div class='kpi-title'>Volume em Pipeline</div>
                <div class='kpi-value'>R$ " . number_format($totalDealsValue, 2, ',', '.') . "</div>
            </div>
            <div class='kpi-card'>
                <div class='kpi-title'>Taxa de Conversão</div>
                <div class='kpi-value'>$conversionRate %</div>
            </div>
            <div class='kpi-card'>
                <div class='kpi-title'>Negócios Ganhos</div>
                <div class='kpi-value'>$wonCount</div>
            </div>
        </div>
        <h3>Ranking de Operadores</h3>
        <table>
            <thead>
                <tr>
                    <th>Operador</th>
                    <th>Resolvidas</th>
                </tr>
            </thead>
            <tbody>";
        
        $operatorStats = User::select('users.name')
            ->join('conversations', 'conversations.assigned_to', '=', 'users.id')
            ->where('conversations.status', 'resolved')
            ->selectRaw('COUNT(conversations.id) as resolved_count')
            ->groupBy('users.name')
            ->orderByDesc('resolved_count')
            ->get();

        foreach($operatorStats as $op) {
            $html .= "<tr><td>{$op->name}</td><td>{$op->resolved_count}</td></tr>";
        }

        $html .= "</tbody></table>";

        $pdf = Pdf::loadHTML($html);
        return $pdf->download('relatorio-performance-' . date('Y-m-d') . '.pdf');
    }
}
