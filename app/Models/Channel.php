<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Channel extends Model
{
    protected $fillable = ['name', 'type', 'identifier', 'status', 'credentials'];

    protected function casts(): array
    {
        return [
            'credentials' => 'array',
        ];
    }

    public function conversations()
    {
        return $this->hasMany(Conversation::class);
    }
}
