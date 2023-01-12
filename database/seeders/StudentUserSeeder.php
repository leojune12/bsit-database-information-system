<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class StudentUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $student = User::firstOrCreate([
            "first_name" => "Student",
            "last_name" => "Student",
            "email" => "student@test.com",
            "email_verified_at" => now(),
            "password" => Hash::make("pw@12345"),
            "remember_token" => Str::random(10),
        ]);

        $student->assignRole('Student');
    }
}
