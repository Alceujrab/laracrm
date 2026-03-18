<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Conversation extends Model
{
    protected $fillable = ['channel_id', 'contact_id', 'assigned_to', 'status', 'last_message_at'];

    protected function casts(): array
    {
        return [
            'last_message_at' => 'datetime',
        ];
    }

    public function channel()
    {
        return $this->belongsTo(Channel::class);
    }

    public function contact()
    {
        return $this->belongsTo(Contact::class);
    }

    public function assignee()
    {
        return $this->belongsTo(User::class, 'assigned_to');
    }

    public function messages()
    {
        return $this->hasMany(Message::class);
    }
}
