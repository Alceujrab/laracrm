<?php

namespace App\Http\Controllers;

use App\Models\Vehicle;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class VehicleController extends Controller
{
    public function index()
    {
        $vehicles = Vehicle::orderBy('created_at', 'desc')->get();
        return Inertia::render('Catalog/Index', [
            'vehicles' => $vehicles
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'make' => 'required|string',
            'model' => 'required|string',
            'year' => 'required|integer',
            'price' => 'nullable|numeric',
            'km' => 'nullable|integer',
            'plate' => 'nullable|string',
            'status' => 'required|in:available,sold,reserved'
        ]);

        $vehicle = Vehicle::create($validated);
        
        if ($request->hasFile('images')) {
            $paths = [];
            foreach ($request->file('images') as $image) {
                $paths[] = $image->store('vehicles', 'public');
            }
            $vehicle->update(['images' => $paths]);
        }

        return redirect()->back()->with('success', 'Veículo criado.');
    }

    public function update(Request $request, Vehicle $vehicle)
    {
        $validated = $request->validate([
            'make' => 'required|string',
            'model' => 'required|string',
            'year' => 'required|integer',
            'price' => 'nullable|numeric',
            'km' => 'nullable|integer',
            'plate' => 'nullable|string',
            'status' => 'required|in:available,sold,reserved'
        ]);

        $vehicle->update($validated);

        if ($request->hasFile('images')) {
            $paths = $vehicle->images ?? [];
            foreach ($request->file('images') as $image) {
                $paths[] = $image->store('vehicles', 'public');
            }
            $vehicle->update(['images' => $paths]);
        }

        return redirect()->back()->with('success', 'Veículo atualizado.');
    }

    public function destroy(Vehicle $vehicle)
    {
        if ($vehicle->images && is_array($vehicle->images)) {
            foreach ($vehicle->images as $img) {
                if (Storage::disk('public')->exists($img)) {
                    Storage::disk('public')->delete($img);
                }
            }
        }
        $vehicle->delete();
        return redirect()->back()->with('success', 'Veículo deletado.');
    }

    public function import(Request $request)
    {
        $request->validate([
            'file' => 'required|file|mimes:json,xml'
        ]);

        $file = $request->file('file');
        $content = file_get_contents($file->getRealPath());
        $mime = strtolower($file->getClientOriginalExtension());

        $vehicles = [];

        if ($mime === 'json') {
            $data = json_decode($content, true);
            if(is_array($data)) {
                $items = $data['vehicles'] ?? $data;
                foreach($items as $item) {
                    if(isset($item['make'])) {
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
            }
        } elseif ($mime === 'xml') {
            $xml = simplexml_load_string($content);
            if ($xml) {
                // assume structure <vehicles><vehicle><make>...
                $nodes = isset($xml->vehicle) ? $xml->vehicle : $xml; 
                
                foreach ($nodes as $node) {
                    $images = [];
                    if (isset($node->images->image)) {
                        foreach ($node->images->image as $img) {
                            $images[] = (string)$img;
                        }
                    }

                    $vehicles[] = [
                        'make' => (string)$node->make ?: 'Unknown Make',
                        'model' => (string)$node->model ?: 'Unknown Model',
                        'year' => (int)$node->year ?: date('Y'),
                        'price' => (float)$node->price ?: null,
                        'km' => (int)$node->km ?: null,
                        'plate' => (string)$node->plate ?: null,
                        'status' => (string)$node->status ?: 'available',
                        'images' => !empty($images) ? json_encode($images) : null,
                        'created_at' => now(),
                        'updated_at' => now()
                    ];
                }
            }
        }

        if (count($vehicles) > 0) {
            Vehicle::insert($vehicles);
            return redirect()->back()->with('success', count($vehicles) . ' veículos importados com sucesso.');
        }

        return redirect()->back()->with('error', 'Nenhum veículo válido encontrado no formato esperado.');
    }
}
