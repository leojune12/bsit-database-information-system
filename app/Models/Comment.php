<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Comment extends Model
{
    use HasFactory;

    protected $appends = [
        'date_added',
        'date_added_diff',
    ];

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

    public function getDateAddedAttribute()
    {
        return $this->created_at ? date_format($this->created_at, 'm-d-Y H:i:s') : '';
    }

    public function getDateAddedDiffAttribute()
    {
        return $this->created_at->diffForHumans();
    }
}
