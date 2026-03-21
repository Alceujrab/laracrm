<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('custom_fields', function (Blueprint $table) {
            $table->id();
            $table->string('entity_type')->default('contact'); // contact | deal
            $table->string('label');                           // Display label
            $table->string('field_key')->unique();             // snake_case key used in storage
            $table->string('field_type')->default('text');     // text | number | select | date
            $table->json('options')->nullable();               // For 'select' type: array of option strings
            $table->unsignedSmallInteger('order')->default(0);
            $table->boolean('is_required')->default(false);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('custom_fields');
    }
};
