<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\Pivot;

class ReviewVote extends Pivot
{
    use HasFactory;

    protected $fillable = [
        "score"
    ];

    public function review()
    {
        return $this->belongsTo(Review::class);
    } 

    public function user()
    {
        return $this->belongsTo(User::class);
    } 
}
