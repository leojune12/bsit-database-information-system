<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\IdNumber;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use App\Models\Address\City;
use Illuminate\Database\Seeder;
use App\Models\Address\Barangay;
use App\Models\Address\Province;
use Spatie\Permission\Models\Role;
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

        $roles = Role::all()->pluck('name');

        User::factory(100)->create()->each(function($user) use ($roles) {

            $role_id = rand(0, 2);
            $user->assignRole($roles[$role_id]);

            $provinces = Province::where('regCode', 6)->get();
            $province = $provinces->random();
            $user->province_id = $province->provCode;

            $cities = City::where('provCode', $province->provCode)->get();
            $city = $cities->random();
            $user->city_id = $city->citymunCode;

            $barangays = Barangay::where('citymunCode', $city->citymunCode)->get();
            $barangay = $barangays->random();
            $user->barangay_id = $barangay->brgyCode;

            $user->save();
        });
    }
}
