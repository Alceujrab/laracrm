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

        // 6. Operator leaderboard — resolved conversations last 30 days
        $operatorStats = User::select('users.id', 'users.name')
            ->join('conversations', 'conversations.assigned_to', '=', 'users.id')
            ->where('conversations.status', 'resolved')
            ->where('conversations.updated_at', '>=', Carbon::now()->subDays(30))
            ->selectRaw('users.id, users.name, COUNT(conversations.id) as resolved_count')
            ->groupBy('users.id', 'users.name')
            ->orderByDesc('resolved_count')
            ->limit(10)
            ->get()
            ->toArray();

        return Inertia::render('Reports/Index', [
            'stats' => [
                'kpiCards'      => $kpiCards,
                'timelineData'  => $timelineData,
                'pieData'       => $pieData,
                'funnelData'    => $funnelData,
                'operatorStats' => $operatorStats,
            ]
        ]);
    }
}
