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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_number')->unique()->nullable();

            // Basic Information
            $table->string('first_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('middle_name')->nullable();
            $table->string('suffix_name')->nullable();
            $table->string('gender')->nullable();
            $table->string('citizenship')->nullable();
            $table->string('religion')->nullable();
            $table->string('civil_status')->nullable();
            $table->date('date_of_birth')->nullable();
            $table->string('place_of_birth')->nullable();

            // Contact Information
            $table->string('email')->unique();
            $table->string('contact_number')->nullable();

            // Family Information
            $table->string('father_name')->nullable();
            $table->string('father_highest_educational_attainment')->nullable();
            $table->string('father_occupation')->nullable();
            $table->string('father_contact_number')->nullable();
            $table->string('mother_name')->nullable();
            $table->string('mother_highest_educational_attainment')->nullable();
            $table->string('mother_occupation')->nullable();
            $table->string('mother_contact_number')->nullable();
            $table->string('guardian_name')->nullable();
            $table->string('guardian_highest_educational_attainment')->nullable();
            $table->string('guardian_occupation')->nullable();
            $table->string('guardian_relationship')->nullable();
            $table->string('guardian_contact_number')->nullable();
            $table->string('monthly_family_income')->nullable();

            // Address Information
            $table->unsignedBigInteger('province_id')->nullable();
            $table->unsignedBigInteger('city_id')->nullable();
            $table->unsignedBigInteger('barangay_id')->nullable();

            // Educational Background Information
            $table->string('elementary_school')->nullable();
            $table->string('elementary_address')->nullable();
            $table->string('elementary_award')->nullable();
            $table->string('elementary_school_type')->nullable();
            $table->string('junior_high_school')->nullable();
            $table->string('junior_high_school_address')->nullable();
            $table->string('junior_high_school_award')->nullable();
            $table->string('junior_high_school_type')->nullable();
            $table->string('senior_high_school')->nullable();
            $table->string('senior_high_school_address')->nullable();
            $table->string('senior_high_school_award')->nullable();
            $table->string('senior_high_school_type')->nullable();
            $table->string('tertiary_school')->nullable();
            $table->string('tertiary_address')->nullable();
            $table->string('tertiary_award')->nullable();
            $table->string('tertiary_school_type')->nullable();
            $table->string('special_courses_school')->nullable();
            $table->string('special_courses_address')->nullable();
            $table->string('special_courses_award')->nullable();
            $table->string('special_courses_school_type')->nullable();

            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->boolean('is_active')->default(1);
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
        Schema::dropIfExists('users');
    }
};
