<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Pivot;

class CommentVote extends Model
{
    use HasFactory;
    
    public $timestamps = false;
    public $incrementing = false;

    public function comment()
    {
        return $this->belongsTo(Comment::class);
    } 

    public function user()
    {
        return $this->belongsTo(User::class);
    } 

    /**
     * Make sure Laravel uses the 2 keys. 
     */
    protected function setKeysForSaveQuery($query)
    {
        $query
            ->where('user_id', '=', $this->getAttribute('user_id'))
            ->where('comment_id', '=', $this->getAttribute('comment_id'));

        return $query;
    }
}
