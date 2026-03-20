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
        $setting = \App\Models\CatalogSetting::first();
        return Inertia::render('Catalog/Index', [
            'vehicles' => $vehicles,
            'setting' => $setting
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
        try {
            $request->validate([
                'file' => 'required|file'
            ]);

            $file = $request->file('file');
            $ext = strtolower($file->getClientOriginalExtension());
            
            if (!in_array($ext, ['json', 'xml'])) {
                return redirect()->back()->with('error', 'Por favor, envie um arquivo com extensão .json ou .xml valída.');
            }

            $content = file_get_contents($file->getRealPath());
            $vehicles = [];

            if ($ext === 'json') {
                $data = json_decode($content, true);
                if (!is_array($data)) {
                    return redirect()->back()->with('error', 'O conteúdo do JSON não é válido ou está mal formatado.');
                }
                
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
                            'created_at' => now()->toDateTimeString(),
                            'updated_at' => now()->toDateTimeString()
                        ];
                    }
                }
            } elseif ($ext === 'xml') {
                libxml_use_internal_errors(true);
                $xml = simplexml_load_string($content);
                if ($xml !== false) {
                    $nodes = [];
                    if (isset($xml->vehicle)) {
                        $nodes = $xml->vehicle;
                    } elseif (isset($xml->AD)) {
                        $nodes = $xml->AD;
                    } else {
                        // fallback
                        $nodes = $xml;
                    }
                    
                    foreach ($nodes as $node) {
                        $images = [];
                        if (isset($node->images->image)) {
                            foreach ($node->images->image as $img) {
                                $images[] = (string)$img;
                            }
                        } elseif (isset($node->IMAGES->IMAGE_URL)) {
                            foreach ($node->IMAGES->IMAGE_URL as $img) {
                                $images[] = (string)$img;
                            }
                        }

                        $make = (string)($node->make ?? $node->MAKE ?? '');
                        $model = (string)($node->model ?? $node->MODEL ?? '');
                        
                        if (empty($make) && empty($model)) {
                            continue;
                        }

                        $vehicles[] = [
                            'make' => $make ?: 'Unknown Make',
                            'model' => $model ?: 'Unknown Model',
                            'year' => (int)($node->year ?? $node->YEAR ?? date('Y')),
                            'price' => (float)($node->price ?? $node->PRICE ?? null),
                            'km' => (int)($node->km ?? $node->MILEAGE ?? null),
                            'plate' => (string)($node->plate ?? $node->PLATE ?? null),
                            'status' => (string)($node->status ?? 'available'),
                            'images' => !empty($images) ? json_encode($images) : null,
                            'created_at' => now()->toDateTimeString(),
                            'updated_at' => now()->toDateTimeString()
                        ];
                    }
                } else {
                    return redirect()->back()->with('error', 'O arquivo XML fornecido é inválido.');
                }
            }

            if (count($vehicles) > 0) {
                Vehicle::insert($vehicles);
                return redirect()->back()->with('success', count($vehicles) . ' veículos importados com sucesso.');
            }

            return redirect()->back()->with('error', 'Nenhum veículo válido encontrado no formato esperado.');

        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Erro interno no servidor ao processar arquivo: ' . $e->getMessage());
        }
    }

    public function updateSettings(Request $request) {
        $data = $request->validate([
            'xml_feed_url' => 'nullable|url',
            'auto_sync' => 'boolean'
        ]);
        
        $setting = \App\Models\CatalogSetting::first() ?? new \App\Models\CatalogSetting();
        $setting->fill($data);
        $setting->save();
        
        return redirect()->back()->with('success', 'Configurações de Sincronização Automática salvas com sucesso.');
    }

    public function forceSync() {
        try {
            \App\Jobs\SyncCatalogJob::dispatchSync();
            return redirect()->back()->with('success', 'Varredura e Sincronização do XML concluída.');
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Erro ao forçar sincronização: ' . $e->getMessage());
        }
    }
}
