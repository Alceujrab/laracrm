<?php
require __DIR__.'/vendor/autoload.php';
$app = require_once __DIR__.'/bootstrap/app.php';
$app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();

use App\Models\Vehicle;

try {
    $content = file_get_contents('sample_vehicles.json');
    $mime = 'json';
    $vehicles = [];

    $data = json_decode($content, true);
    if(is_array($data)) {
        $items = $data['vehicles'] ?? $data;
        foreach($items as $item) {
            $vehicles[] = [
                'make' => $item['make'] ?? 'Unknown Make',
                'model' => $item['model'] ?? 'Unknown Model',
                'year' => isset($item['year']) ? (int)$item['year'] : date('Y'),
                'price' => isset($item['price']) ? (float)$item['price'] : null,
                'km' => isset($item['km']) ? (int)$item['km'] : null,
                'plate' => $item['plate'] ?? null,
                'status' => $item['status'] ?? 'available',
                'images' => isset($item['images']) && is_array($item['images']) ? json_encode($item['images']) : null,
                'created_at' => now(),
                'updated_at' => now()
            ];
        }
    }

    echo "Vehicles count: " . count($vehicles) . "\n";
    print_r($vehicles);
    
    // Testing insert
    Vehicle::insert($vehicles);
    echo "Inserted successfully!\n";
    
    // Testing eloquent retrieval (to see if casts work)
    $last_inserted = Vehicle::orderBy('id', 'desc')->first();
    echo "Last inserted extracted images type: " . gettype($last_inserted->images) . "\n";
    
} catch (\Exception $e) {
    echo "Fatal Error: " . $e->getMessage() . "\n" . $e->getTraceAsString();
}
