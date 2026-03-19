<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\InboxController;
use App\Http\Controllers\CrmController;
use App\Http\Controllers\VehicleController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\TaskController;
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
    return redirect()->route('inbox.all');
})->middleware(['auth'])->name('dashboard');

Route::middleware(['auth'])->group(function () {
    Route::get('/inbox/all', [InboxController::class, 'index'])->name('inbox.all');

    Route::get('/crm', [CrmController::class, 'index'])->name('crm.index');
    Route::put('/crm/deals/{deal}/move', [CrmController::class, 'moveDeal'])->name('crm.deals.move');
    Route::get('/api/crm/deals/{deal}', [CrmController::class, 'show'])->name('api.crm.deals.show');
    Route::post('/api/crm/deals/{deal}/tasks', [TaskController::class, 'store'])->name('api.tasks.store');
    Route::put('/api/tasks/{task}/toggle', [TaskController::class, 'toggle'])->name('api.tasks.toggle');
    Route::delete('/api/tasks/{task}', [TaskController::class, 'destroy'])->name('api.tasks.destroy');
    
    Route::get('/catalog', [VehicleController::class, 'index'])->name('catalog.index');

    Route::get('/reports', [ReportController::class, 'index'])->name('reports.index');

    Route::get('/settings', function () {
        return Inertia::render('Settings/Index');
    })->name('settings.index');
});
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
