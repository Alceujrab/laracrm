<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    protected $fillable = ['name', 'phone', 'email', 'avatar', 'notes', 'is_private', 'tags', 'assigned_to'];

    protected function casts(): array
    {
        return [
            'is_private' => 'boolean',
            'tags' => 'array',
        ];
    }

    public function conversations()
    {
        return $this->hasMany(Conversation::class);
    }

    public function assignee()
    {
        return $this->belongsTo(User::class, 'assigned_to');
    }
}
