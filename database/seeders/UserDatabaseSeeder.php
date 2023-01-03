<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class UserDatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        app()['cache']->forget('spatie.permission.cache');

        User::factory(100)->create()->each(function($user) {

            $user->assignRole('Admin');
        });
    }
}
