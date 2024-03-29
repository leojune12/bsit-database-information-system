<?php

namespace App\Models\Address;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Barangay extends Model
{
    use HasFactory;

    protected $fillable = [];

    protected $guarded = [];

    // protected $guarded = [];

    // protected static function newFactory()
    // {
    //     return \Modules\Address\Database\factories\BarangayFactory::new();
    // }

    protected $table = 'address_barangays';

    public function businesses()
    {
        return $this->hasMany(Business::class, 'barangay_id', 'regCode');
    }
}
