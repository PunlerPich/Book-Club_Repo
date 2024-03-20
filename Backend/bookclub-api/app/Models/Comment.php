<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    public function discussion()
    {
        return $this->belongsTo(Discussion::class);
    } 

    public function user()
    {
        return $this->belongsTo(User::class);
    } 

    public function reply_to_comment()
    {
        return $this->belongsTo(self::class, "reply_to_comment_id");
    } 

    public function replies()
    {
        return $this->hasMany(self::class, "reply_to_comment_id");
    }

    public function votes()
    {
        return $this->hasMany(CommentVote::class);
    }
}
