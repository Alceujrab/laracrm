<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Channel extends Model
{
    protected $fillable = ['name', 'type', 'identifier', 'status', 'credentials', 'ai_enabled', 'ai_prompt'];

    protected function casts(): array
    {
        return [
            'credentials' => 'array',
            'ai_enabled' => 'boolean',
        ];
    }

    public function conversations()
    {
        return $this->hasMany(Conversation::class);
    }
}
