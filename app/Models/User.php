<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Models\Section;
use App\Models\Address\City;
use App\Models\Address\Region;
use App\Models\Address\Barangay;
use App\Models\Address\Province;
use Laravel\Sanctum\HasApiTokens;
use Spatie\MediaLibrary\HasMedia;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Notifications\Notifiable;
use Spatie\MediaLibrary\InteractsWithMedia;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable implements HasMedia
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles, SoftDeletes, InteractsWithMedia;

    protected $fillable = [
        'id_number',
        'first_name',
        'middle_name',
        'last_name',
        'suffix_name',
        'gender',
        'citizenship',
        'religion',
        'civil_status',
        'date_of_birth',
        'place_of_birth',

        'email',
        'contact_number',

        'father_name',
        'father_highest_educational_attainment',
        'father_occupation',
        'father_contact_number',
        'mother_name',
        'mother_highest_educational_attainment',
        'mother_occupation',
        'mother_contact_number',
        'guardian_name',
        'guardian_highest_educational_attainment',
        'guardian_occupation',
        'guardian_relationship',
        'guardian_contact_number',
        'monthly_family_income',

        'province_id',
        'city_id',
        'barangay_id',

        'elementary_school',
        'elementary_address',
        'elementary_award',
        'elementary_school_type',
        'junior_high_school',
        'junior_high_school_address',
        'junior_high_school_award',
        'junior_high_school_type',
        'senior_high_school',
        'senior_high_school_address',
        'senior_high_school_award',
        'senior_high_school_type',
        'tertiary_school',
        'tertiary_address',
        'tertiary_award',
        'tertiary_school_type',
        'special_courses_school',
        'special_courses_address',
        'special_courses_award',
        'special_courses_school_type',

        'password',
        'is_active',
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

    public function registerMediaCollections(): void
    {
        $this
            ->addMediaCollection('profile_photos')
            ->singleFile();
    }

    public function section()
    {
        return $this->belongsToMany(Section::class)
                        ->orderByPivot('id', 'desc');
    }

    public function first_year_first_semester_subjects()
    {
        return $this->belongsToMany(Subject::class)
                        ->where('year', 1)
                        ->where('semester', 1)
                        ->withPivot('grade')
                        ->orderBy('course_code', 'asc');
    }

    public function first_year_second_semester_subjects()
    {
        return $this->belongsToMany(Subject::class)
                        ->where('year', 1)
                        ->where('semester', 2)
                        ->withPivot('grade')
                        ->orderBy('course_code', 'asc');
    }

    public function second_year_first_semester_subjects()
    {
        return $this->belongsToMany(Subject::class)
                        ->where('year', 2)
                        ->where('semester', 1)
                        ->withPivot('grade')
                        ->orderBy('course_code', 'asc');
    }

    public function second_year_second_semester_subjects()
    {
        return $this->belongsToMany(Subject::class)
                        ->where('year', 2)
                        ->where('semester', 2)
                        ->withPivot('grade')
                        ->orderBy('course_code', 'asc');
    }

    public function third_year_first_semester_subjects()
    {
        return $this->belongsToMany(Subject::class)
                        ->where('year', 3)
                        ->where('semester', 1)
                        ->withPivot('grade')
                        ->orderBy('course_code', 'asc');
    }

    public function third_year_second_semester_subjects()
    {
        return $this->belongsToMany(Subject::class)
                        ->where('year', 3)
                        ->where('semester', 2)
                        ->withPivot('grade')
                        ->orderBy('course_code', 'asc');
    }

    public function fourth_year_first_semester_subjects()
    {
        return $this->belongsToMany(Subject::class)
                        ->where('year', 4)
                        ->where('semester', 1)
                        ->withPivot('grade')
                        ->orderBy('course_code', 'asc');
    }

    public function fourth_year_second_semester_subjects()
    {
        return $this->belongsToMany(Subject::class)
                        ->where('year', 4)
                        ->where('semester', 2)
                        ->withPivot('grade')
                        ->orderBy('course_code', 'asc');
    }

    public function certificate_and_awards()
    {
        return $this->hasMany(CertificateAndAward::class);
    }
}
