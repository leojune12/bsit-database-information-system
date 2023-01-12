<?php

namespace Database\Seeders;

use App\Models\IdNumber;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class IdNumberSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        IdNumber::factory(100)->create();
    }
}
