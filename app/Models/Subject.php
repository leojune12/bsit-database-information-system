<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Subject extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'curriculum_id',
        'course_code',
        'descriptive_title',
        'unit',
        'laboratory',
        'lecture',
        'prerequisite_subject_id',
        'year',
        'semester',
    ];

    public function curriculum()
    {
        return $this->belongsTo(Curriculum::class);
    }
}
