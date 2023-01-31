<?php

namespace App\Models;

use Spatie\MediaLibrary\HasMedia;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\InteractsWithMedia;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CertificateAndAward extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

    protected $appends = [
        'file',
    ];

    protected $fillable = [
        'user_id',
        'name',
    ];

    public function registerMediaCollections(): void
    {
        $this
            ->addMediaCollection('certificate-and-awards')
            ->singleFile();
    }

    public function getFileAttribute()
    {
        return $this->getFirstMedia('certificate-and-awards');
    }
}
