<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('quick_replies', function (Blueprint $table) {
            $table->id();
            $table->string('title');                           // Short name / shortcut
            $table->text('content');                            // Full message text
            $table->string('category')->nullable();             // Optional grouping
            $table->foreignId('user_id')->nullable()->constrained()->nullOnDelete(); // null = global/shared
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('quick_replies');
    }
};
