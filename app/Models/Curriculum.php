<?php

namespace App\Models;

use App\Models\Subject;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Curriculum extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
    ];

    public function subjects()
    {
        return $this->hasMany(Subject::class);
    }

    public function first_year_first_semester_subjects()
    {
        return $this->hasMany(Subject::class)
                        ->where('year', 1)
                        ->where('semester', 1);
    }

    public function first_year_second_semester_subjects()
    {
        return $this->hasMany(Subject::class)
                        ->where('year', 1)
                        ->where('semester', 2);
    }

    public function second_year_first_semester_subjects()
    {
        return $this->hasMany(Subject::class)
                        ->where('year', 2)
                        ->where('semester', 1);
    }

    public function second_year_second_semester_subjects()
    {
        return $this->hasMany(Subject::class)
                        ->where('year', 2)
                        ->where('semester', 2);
    }

    public function third_year_first_semester_subjects()
    {
        return $this->hasMany(Subject::class)
                        ->where('year', 3)
                        ->where('semester', 1);
    }

    public function third_year_second_semester_subjects()
    {
        return $this->hasMany(Subject::class)
                        ->where('year', 3)
                        ->where('semester', 2);
    }

    public function fourth_year_first_semester_subjects()
    {
        return $this->hasMany(Subject::class)
                        ->where('year', 4)
                        ->where('semester', 1);
    }

    public function fourth_year_second_semester_subjects()
    {
        return $this->hasMany(Subject::class)
                        ->where('year', 4)
                        ->where('semester', 2);
    }
}
