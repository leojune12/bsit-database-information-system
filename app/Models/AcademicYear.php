<?php

namespace App\Models;

use App\Models\Section;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class AcademicYear extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
    ];

    public function first_year_sections()
    {
        return $this->hasMany(Section::class)->where('year', 1);
    }

    public function second_year_sections()
    {
        return $this->hasMany(Section::class)->where('year', 2);
    }

    public function third_year_sections()
    {
        return $this->hasMany(Section::class)->where('year', 3);
    }

    public function fourth_year_sections()
    {
        return $this->hasMany(Section::class)->where('year', 4);
    }
}
