<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Proposal extends Model
{
    protected $fillable = [
        'user_id', 'contact_id', 'vehicle_id', 'deal_id', 
        'title', 'total_value', 'items', 'valid_until', 'status', 'notes'
    ];

    protected function casts(): array
    {
        return [
            'items' => 'array',
            'valid_until' => 'date',
            'total_value' => 'decimal:2',
        ];
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function contact()
    {
        return $this->belongsTo(Contact::class);
    }

    public function vehicle()
    {
        return $this->belongsTo(Vehicle::class);
    }

    public function deal()
    {
        return $this->belongsTo(Deal::class);
    }
}
