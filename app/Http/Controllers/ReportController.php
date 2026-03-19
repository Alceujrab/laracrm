<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Deal;
use App\Models\DealStage;
use App\Models\Contact;
use App\Models\Conversation;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class ReportController extends Controller
{
    public function index()
    {
        // 1. KPI Cards
        $activeDealsCount = Deal::where('status', 'open')->count();
        $totalDealsValue = Deal::where('status', 'open')->sum('value');
        $conversionRate = 0;
        $wonCount = Deal::where('status', 'won')->count();
        $totalEnded = Deal::whereIn('status', ['won', 'lost'])->count();
        if ($totalEnded > 0) {
            $conversionRate = round(($wonCount / $totalEnded) * 100, 1);
        }
        
        $newLeadsThisWeek = Contact::where('created_at', '>=', Carbon::now()->startOfWeek())->count();

        $kpiCards = [
            ['title' => 'Negociações Ativas', 'value' => $activeDealsCount, 'trend' => '+5%', 'trendUp' => true],
            ['title' => 'Volume em Pipeline', 'value' => 'R$ ' . number_format($totalDealsValue, 0, ',', '.'), 'trend' => '+12%', 'trendUp' => true],
            ['title' => 'Taxa de Conversão', 'value' => $conversionRate . '%', 'trend' => '+2%', 'trendUp' => true],
            ['title' => 'Novos Leads (Semana)', 'value' => $newLeadsThisWeek, 'trend' => '+18%', 'trendUp' => true],
        ];

        // 2. Timeline Data (Last 7 days of deals)
        $timelineData = [];
        for ($i = 6; $i >= 0; $i--) {
            $date = Carbon::now()->subDays($i);
            $dayName = $date->format('d/m');
            
            $count = Deal::whereDate('created_at', $date->toDateString())->count();
            
            $timelineData[] = [
                'time' => $dayName,
                'deals' => $count,
                // Mocking social breakdown for the chart complexity
                'whatsapp' => round($count * 0.6),
                'instagram' => round($count * 0.3),
                'facebook' => round($count * 0.1),
            ];
        }

        // 3. Pie Data (Deals by Stage)
        $stages = DealStage::withCount('deals')->get();
        $pieData = $stages->map(function($stage) {
            $colors = [
                'Prospecção' => '#6366F1',
                'Qualificação' => '#A855F7',
                'Proposta' => '#F59E0B',
                'Negociação' => '#10B981',
                'Fechamento' => '#3B82F6'
            ];
            return [
                'name' => $stage->name,
                'value' => $stage->deals_count,
                'color' => $colors[$stage->name] ?? '#94A3B8'
            ];
        })->toArray();

        // 4. Funnel Data (Value by Stage)
        $funnelData = $stages->map(function($stage) {
            return [
                'stage' => $stage->name,
                'value' => Deal::where('deal_stage_id', $stage->id)->sum('value')
            ];
        });

        return Inertia::render('Reports/Index', [
            'stats' => [
                'kpiCards' => $kpiCards,
                'timelineData' => $timelineData,
                'pieData' => $pieData,
                'funnelData' => $funnelData
            ]
        ]);
    }
}
