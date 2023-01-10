<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Models\Address\City;
use App\Models\Address\Region;
use App\Models\Address\Barangay;
use App\Models\Address\Province;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles, SoftDeletes;

    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    // public function region()
    // {
    //     return $this->belongsTo(Region::class, 'region_id', 'regCode');
    // }

    public function province()
    {
        return $this->belongsTo(Province::class, 'province_id', 'provCode');
    }

    public function city()
    {
        return $this->belongsTo(City::class, 'city_id', 'citymunCode');
    }

    public function barangay()
    {
        return $this->belongsTo(Barangay::class, 'barangay_id', 'brgyCode');
    }
}
