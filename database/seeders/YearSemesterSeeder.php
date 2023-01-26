<?php

namespace Database\Seeders;

use App\Models\YearSemester;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class YearSemesterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        YearSemester::insert(
            [
                'name' => 'First Year First Semester',
                'year' => 1,
                'semester' => 1,
                'created_at' => now()->toDateTimeString(),
                'updated_at' => now()->toDateTimeString(),
            ]
        );
        YearSemester::insert(
            [
                'name' => 'First Year Second Semester',
                'year' => 1,
                'semester' => 2,
                'created_at' => now()->toDateTimeString(),
                'updated_at' => now()->toDateTimeString(),
            ]
        );
        YearSemester::insert(
            [
                'name' => 'Second Year First Semester',
                'year' => 2,
                'semester' => 1,
                'created_at' => now()->toDateTimeString(),
                'updated_at' => now()->toDateTimeString(),
            ]
        );
        YearSemester::insert(
            [
                'name' => 'Second Year Second Semester',
                'year' => 2,
                'semester' => 2,
                'created_at' => now()->toDateTimeString(),
                'updated_at' => now()->toDateTimeString(),
            ]
        );
        YearSemester::insert(
            [
                'name' => 'Third Year First Semester',
                'year' => 3,
                'semester' => 1,
                'created_at' => now()->toDateTimeString(),
                'updated_at' => now()->toDateTimeString(),
            ]
        );
        YearSemester::insert(
            [
                'name' => 'Third Year Second Semester',
                'year' => 3,
                'semester' => 2,
                'created_at' => now()->toDateTimeString(),
                'updated_at' => now()->toDateTimeString(),
            ]
        );
        YearSemester::insert(
            [
                'name' => 'Fourth Year First Semester',
                'year' => 4,
                'semester' => 1,
                'created_at' => now()->toDateTimeString(),
                'updated_at' => now()->toDateTimeString(),
            ]
        );
        YearSemester::insert(
            [
                'name' => 'Fourth Year Second Semester',
                'year' => 4,
                'semester' => 2,
                'created_at' => now()->toDateTimeString(),
                'updated_at' => now()->toDateTimeString(),
            ]
        );
    }
}
