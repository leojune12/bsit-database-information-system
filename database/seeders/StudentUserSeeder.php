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
        if (!User::find(2)) {
            $student = User::firstOrCreate([
                "first_name" => "Student",
                "last_name" => "Student",
                "email" => "student@test.com",
                "email_verified_at" => now(),
                "password" => Hash::make("pw@12345"),
                "remember_token" => Str::random(10),
            ]);

            $student->assignRole('Student');

            $faculty = User::firstOrCreate([
                "first_name" => "Faculty",
                "last_name" => "Faculty",
                "email" => "faculty@test.com",
                "email_verified_at" => now(),
                "password" => Hash::make("pw@12345"),
                "remember_token" => Str::random(10),
            ]);

            $faculty->assignRole('Faculty');

            $alumnus = User::firstOrCreate([
                "first_name" => "Alumnus",
                "last_name" => "Alumnus",
                "email" => "alumnus@test.com",
                "email_verified_at" => now(),
                "password" => Hash::make("pw@12345"),
                "remember_token" => Str::random(10),
            ]);

            $alumnus->assignRole('Alumnus');
        }
    }
}
