<?php
require __DIR__.'/vendor/autoload.php';
$app = require_once __DIR__.'/bootstrap/app.php';
$app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();

use App\Models\Vehicle;

try {
    $vehicles = Vehicle::orderBy('created_at', 'desc')->get();
    foreach($vehicles as $v) {
        echo "ID: {$v->id} | {$v->make} {$v->model}\n";
        echo "Images field type: " . gettype($v->images) . "\n";
        echo "Images field raw:\n";
        print_r($v->images);
        echo "\n-------------------\n";
    }
} catch (\Exception $e) {
    echo "Exception: " . $e->getMessage();
}
