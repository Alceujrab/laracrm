<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model
{
    protected $fillable = ['external_id', 'make', 'model', 'year', 'price', 'km', 'plate', 'status', 'images'];

    protected function casts(): array
    {
        return [
            'images' => 'array',
            'price' => 'decimal:2',
        ];
    }

    public function deals()
    {
        return $this->hasMany(Deal::class);
    }
}
