<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Comment extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_name',
        'comment',
        'parentable_id',
        'parentable_type'
    ];

    public function parentable()
    {
        return $this->morphTo();
    }

    public function replies()
    {
        return $this->morphMany(Comment::class, 'parentable');
    }
}