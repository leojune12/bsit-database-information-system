<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('subjects', function (Blueprint $table) {
            $table->id();
            $table->string('course_code');
            $table->string('descriptive_title');
            $table->tinyInteger('unit')->nullable();
            $table->tinyInteger('lecture')->nullable();
            $table->tinyInteger('laboratory')->nullable();
            $table->string('prerequisite_subject_ids')->nullable();
            $table->tinyInteger('year');
            $table->tinyInteger('semester');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('subjects');
    }
};
