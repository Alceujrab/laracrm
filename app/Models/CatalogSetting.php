<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CatalogSetting extends Model
{
    protected $fillable = [
        'xml_feed_url',
        'auto_sync',
        'last_sync_at'
    ];

    protected function casts(): array
    {
        return [
            'auto_sync' => 'boolean',
            'last_sync_at' => 'datetime',
        ];
    }
}
