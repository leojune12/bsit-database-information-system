<?php

namespace App\Services;

use App\Models\Address\City;
use App\Models\Address\Barangay;
use App\Models\Address\Province;

class AddressService
{
    public function __construct()
    {
    }

    // Cities and Municipalities
    public static function getProvinces()
    {
        $provinces = Province::where('regCode', 6)
            ->select('provCode', 'provDesc')
            ->orderBy('provDesc')
            ->get();

        return $provinces;
    }

    // Cities and Municipalities
    public static function getBarangaysPerCity($city_code)
    {
        $barangays = Barangay::where('citymunCode', $city_code)
            ->select('brgyCode', 'brgyDesc')
            ->orderBy('brgyDesc')
            ->get();

        return $barangays;
    }

    public static function getCityPerProvince($province_code)
    {
        $cities = City::where('provCode', $province_code)
            ->select('citymunCode', 'citymunDesc')
            ->orderBy('citymunDesc')
            ->get();

        return $cities;
    }
}
