<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CustomField extends Model
{
    use HasFactory;

    protected $fillable = [
        'entity_type',
        'label',
        'field_key',
        'field_type',
        'options',
        'order',
        'is_required',
    ];

    protected $casts = [
        'options'     => 'array',
        'is_required' => 'boolean',
        'order'       => 'integer',
    ];

    public function values()
    {
        return $this->hasMany(CustomFieldValue::class);
    }
}
