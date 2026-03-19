<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Deal extends Model
{
    protected $fillable = ['title', 'contact_id', 'vehicle_id', 'deal_stage_id', 'assigned_to', 'value', 'status'];

    protected function casts(): array
    {
        return [
            'value' => 'decimal:2',
        ];
    }

    public function contact()
    {
        return $this->belongsTo(Contact::class);
    }

    public function vehicle()
    {
        return $this->belongsTo(Vehicle::class);
    }

    public function dealStage()
    {
        return $this->belongsTo(DealStage::class, 'deal_stage_id');
    }

    public function assignee()
    {
        return $this->belongsTo(User::class, 'assigned_to');
    }

    public function tasks()
    {
        return $this->hasMany(Task::class);
    }
}
