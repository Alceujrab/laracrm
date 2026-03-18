<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $fillable = ['title', 'description', 'due_date', 'is_completed', 'deal_id', 'contact_id', 'assigned_to'];

    protected function casts(): array
    {
        return [
            'is_completed' => 'boolean',
            'due_date' => 'datetime',
        ];
    }

    public function deal()
    {
        return $this->belongsTo(Deal::class);
    }

    public function contact()
    {
        return $this->belongsTo(Contact::class);
    }

    public function assignee()
    {
        return $this->belongsTo(User::class, 'assigned_to');
    }
}
