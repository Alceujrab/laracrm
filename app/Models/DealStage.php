<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DealStage extends Model
{
    protected $fillable = ['name', 'order', 'color', 'rules'];

    protected function casts(): array
    {
        return [
            'rules' => 'array',
        ];
    }

    public function deals()
    {
        return $this->hasMany(Deal::class);
    }
}
