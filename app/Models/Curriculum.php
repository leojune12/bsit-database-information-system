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
}
