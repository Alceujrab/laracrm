<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\InboxController;
use App\Http\Controllers\CrmController;
use App\Http\Controllers\VehicleController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\DealStageController;
use App\Http\Controllers\EvolutionWebhookController;
use App\Http\Controllers\ChannelController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return redirect()->route('inbox.index');
})->middleware(['auth'])->name('dashboard');

// Rota de Webhook da Evolution API (livre de CSRF via bootstrap/app.php)
Route::post('/api/webhooks/evolution', [EvolutionWebhookController::class, 'handle'])->name('api.webhooks.evolution');

// Leitor Remoto de Logs (Debug cPanel)
Route::get('/api/system/logs', function () {
    $path = storage_path('logs/laravel.log');
    if (!file_exists($path)) {
        return "Nenhum arquivo de log encontrado em $path";
    }
    
    // Ler as ultimas 500 linhas de forma otimizada
    $lines = file($path);
    if ($lines === false) {
        return "Erro ao ler as linhas do arquivo de log.";
    }
    
    $lastLines = array_slice($lines, -500);
    return response("<pre>" . implode("", $lastLines) . "</pre>")->header('Content-Type', 'text/html');
});

Route::middleware(['auth'])->group(function () {
    // Inbox
    Route::get('/inbox', [InboxController::class, 'index'])->name('inbox.index');
    Route::get('/api/inbox/refresh', [InboxController::class, 'refresh'])->name('inbox.refresh');
    Route::post('/api/inbox/conversations', [InboxController::class, 'storeConversation'])->name('inbox.conversations.store');
    Route::post('/api/inbox/{conversation}/message', [InboxController::class, 'sendMessage'])->name('inbox.send');
    Route::put('/api/inbox/{conversation}/assign', [InboxController::class, 'assign'])->name('inbox.assign');
    Route::put('/api/inbox/{conversation}/status', [InboxController::class, 'updateStatus'])->name('inbox.status');
    Route::put('/api/inbox/contact/{contact}/tags', [InboxController::class, 'updateTags'])->name('inbox.contact.tags');

    Route::get('/crm', [CrmController::class, 'index'])->name('crm.index');
    Route::post('/crm/deals', [CrmController::class, 'store'])->name('crm.deals.store');
    Route::put('/crm/deals/{deal}/move', [CrmController::class, 'moveDeal'])->name('crm.deals.move');
    Route::get('/api/crm/deals/{deal}', [CrmController::class, 'show'])->name('api.crm.deals.show');
    Route::post('/api/crm/deals/{deal}/tasks', [TaskController::class, 'store'])->name('api.tasks.store');
    
    // Tasks Module
    Route::get('/tasks', [TaskController::class, 'index'])->name('tasks.index');
    Route::post('/tasks', [TaskController::class, 'storeGlobal'])->name('tasks.store_global');
    
    Route::put('/api/tasks/{task}/toggle', [TaskController::class, 'toggle'])->name('api.tasks.toggle');
    Route::delete('/api/tasks/{task}', [TaskController::class, 'destroy'])->name('api.tasks.destroy');
    
    Route::get('/catalog', [VehicleController::class, 'index'])->name('catalog.index');

    Route::get('/reports', [ReportController::class, 'index'])->name('reports.index');

    Route::get('/settings', function () {
        return Inertia::render('Settings/Index');
    })->name('settings.index');

    // CRM Stages Management
    Route::post('/api/crm/stages', [DealStageController::class, 'store'])->name('crm.stages.store');
    Route::put('/api/crm/stages/{stage}', [DealStageController::class, 'update'])->name('crm.stages.update');
    Route::delete('/api/crm/stages/{stage}', [DealStageController::class, 'destroy'])->name('crm.stages.destroy');
    Route::put('/api/crm/stages/reorder', [DealStageController::class, 'reorder'])->name('crm.stages.reorder');

    // Channels Management
    Route::apiResource('/api/channels', ChannelController::class)->only(['index', 'store', 'destroy']);
    Route::get('/api/channels/{channel}/qrcode', [ChannelController::class, 'qrCode'])->name('channels.qrcode');
    Route::put('/api/channels/{channel}/ai', [ChannelController::class, 'updateAiSettings'])->name('channels.ai.update');
});
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
