<?php

namespace App\Jobs;

use App\Models\CatalogSetting;
use App\Models\Vehicle;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class SyncCatalogJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public function handle(): void
    {
        $setting = CatalogSetting::first();
        if (!$setting || empty($setting->xml_feed_url)) {
            Log::info("SyncCatalogJob: No URL configured. Aborting.");
            return;
        }

        try {
            $response = Http::timeout(120)->get($setting->xml_feed_url);
            if (!$response->successful()) {
                Log::error("SyncCatalogJob: Failed to download feed. Status: " . $response->status());
                return;
            }

            $content = $response->body();
            
            // Identificar o formato (JSON ou XML)
            $ext = strtolower(pathinfo(parse_url($setting->xml_feed_url, PHP_URL_PATH), PATHINFO_EXTENSION));
            if (empty($ext) || !in_array($ext, ['json', 'xml'])) {
                if (str_contains($content, '<?xml') || str_contains(substr($content, 0, 100), '<')) {
                    $ext = 'xml';
                } elseif (str_starts_with(trim($content), '{') || str_starts_with(trim($content), '[')) {
                    $ext = 'json';
                }
            }

            $feedExternalIds = [];

            if ($ext === 'json') {
                $data = json_decode($content, true);
                if (is_array($data)) {
                    $items = $data['vehicles'] ?? $data;
                    foreach ($items as $item) {
                        $externalId = (string)($item['id'] ?? $item['ID'] ?? '');
                        if (empty($externalId)) {
                            // Impossível parear sem ID num cenário de sync contínuo
                            continue; 
                        }

                        $feedExternalIds[] = $externalId;
                        $make = $item['make'] ?? $item['MAKE'] ?? '';
                        $model = $item['model'] ?? $item['MODEL'] ?? '';
                        $images = isset($item['images']) && is_array($item['images']) ? $item['images'] : [];

                        if (empty($make) && empty($model)) continue;

                        Vehicle::updateOrCreate(
                            ['external_id' => $externalId],
                            [
                                'make' => $make ?: 'Unknown Make',
                                'model' => $model ?: 'Unknown Model',
                                'year' => (int)($item['year'] ?? $item['YEAR'] ?? date('Y')),
                                'price' => isset($item['price']) || isset($item['PRICE']) ? (float)($item['price'] ?? $item['PRICE']) : null,
                                'km' => isset($item['km']) || isset($item['MILEAGE']) ? (int)($item['km'] ?? $item['MILEAGE']) : null,
                                'plate' => $item['plate'] ?? $item['PLATE'] ?? null,
                                'status' => $item['status'] ?? 'available',
                                'images' => $images
                            ]
                        );
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
                        $nodes = $xml;
                    }

                    foreach ($nodes as $node) {
                        $externalId = (string)($node->id ?? $node->ID ?? '');
                        if (empty($externalId)) continue;
                        
                        $feedExternalIds[] = $externalId;

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

                        if (empty($make) && empty($model)) continue;

                        $plateObj = $node->plate ?? $node->PLATE ?? null;
                        if ($plateObj && is_object($plateObj) && $plateObj->count() == 0) {
                            $plateStr = null;
                        } else {
                            $plateStr = (string)$plateObj ?: null;
                        }

                        Vehicle::updateOrCreate(
                            ['external_id' => $externalId],
                            [
                                'make' => $make ?: 'Unknown Make',
                                'model' => $model ?: 'Unknown Model',
                                'year' => (int)($node->year ?? $node->YEAR ?? date('Y')),
                                'price' => (float)($node->price ?? $node->PRICE ?? null),
                                'km' => (int)($node->km ?? $node->MILEAGE ?? null),
                                'plate' => $plateStr,
                                'status' => (string)($node->status ?? 'available'),
                                'images' => $images
                            ]
                        );
                    }
                }
            }

            // Ocultar/Deletar veículos que saíram do catálogo e eram vinculados ao External ID
            if (count($feedExternalIds) > 0) {
                Vehicle::whereNotNull('external_id')
                    ->whereNotIn('external_id', $feedExternalIds)
                    ->where('status', '!=', 'sold')
                    ->update(['status' => 'sold']);
            }

            $setting->update(['last_sync_at' => now()]);
            Log::info("SyncCatalogJob: Success! Processed ".count($feedExternalIds)." items.");

        } catch (\Exception $e) {
            Log::error("SyncCatalogJob Exception: " . $e->getMessage() . "\n" . $e->getTraceAsString());
        }
    }
}
