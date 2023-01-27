<?php

namespace App\Models;

use App\Models\Curriculum;
use App\Models\AcademicYear;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Section extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'academic_year_id',
        'curriculum_id',
        'name',
        'year',
    ];

    public function academic_year()
    {
        return $this->belongsTo(AcademicYear::class);
    }

    public function curriculum()
    {
        return $this->belongsTo(Curriculum::class);
    }
}
