<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Automation extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'trigger_type',
        'trigger_conditions',
        'action_type',
        'action_payload',
        'is_active',
        'priority',
    ];

    protected $casts = [
        'trigger_conditions' => 'array',
        'action_payload' => 'array',
        'is_active' => 'boolean',
        'priority' => 'integer',
    ];
}
