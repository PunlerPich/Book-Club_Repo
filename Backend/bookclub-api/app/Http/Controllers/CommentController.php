<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Http\Requests\StoreCommentRequest;
use App\Http\Requests\UpdateCommentRequest;
use App\Models\CommentVote;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'content' => 'required|string|max:65,535',
            'discussion_id' => 'required|integer|exists:discussions,id',
            'reply_to_comment_id' => 'sometimes|integer|exists:comments,id',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $new_comment = Comment::create([
            'content' => $request->content,
            'discussion_id' => $request->discussion_id,
            'user_id' => $request->user()->id,
            'reply_to_comment_id' => $request->reply_to_comment_id ?? null,
        ]);

        return response()->json($new_comment);
    }

    /**
     * Display the specified resource.
     */
    public function show(Comment $comment)
    {
        // return response()->json($comment);
    }

    public function get_replies(Comment $comment)
    {
        $replies = $comment->replies()
            ->orderBy('likes', 'desc')
            ->orderBy('created_at', 'asc')
            ->get();

        return response()->json($replies);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Comment $comment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Comment $comment)
    {
        $validator = Validator::make($request->all(), [
            'content' => 'required|string|max:65,535',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        if ($request->user()->id != $comment->user_id) {
            return response()->json(['message' => 'Cannot update comment that isn\'t yours.'], 401);
        }

        $updated_comment = $comment->update([
            'content' => $request->content,
        ]);

        return response()->json($comment);
    }

    /**
     * Upvote. 
     * If exists, change to like or remove like. 
     * Else create like. 
     */
    public function upvote(Request $request, Comment $comment)
    {
        $current_user_id = $request->user()->id;

        $vote = $comment->votes()->where('user_id', $current_user_id)->first();

        if ($vote == null) {
            $comment->votes()->create([
                'user_id' => $current_user_id,
                'score' => 1,
            ]);
            $comment->likes += 1;
            $msg = 'Liked!';
        } else {
            if ($vote->score > 0) {
                $vote->delete();
                $comment->likes -= 1;
                $msg = 'Remove like!';
            } else {
                $vote->score = 1;
                $comment->likes += 2;
                $vote->save();
                $msg = 'Changed to like!';
            }
        }
        $comment->save();

        return response()->json(['message' => $msg]);
    }

    /**
     * Downvote
     * If exists, change to dislike or remove dislike. 
     * Else create dislike. 
     */
    public function downvote(Request $request, Comment $comment)
    {
        $current_user_id = $request->user()->id;

        $vote = $comment->votes()->where('user_id', $current_user_id)->first();

        if ($vote == null) {
            $comment->votes()->create([
                'user_id' => $current_user_id,
                'score' => -1,
            ]);
            $comment->likes -= 1;
            $msg = 'Disliked!';
        } else {
            if ($vote->score < 0) {
                $vote->delete();
                $comment->likes += 1;
                $msg = 'Remove dislike!';
            } else {
                $vote->score = -1;
                $vote->save();
                $comment->likes -= 2;
                $msg = 'Changed to dislike!';
            }
        }
        $comment->save();

        return response()->json(['message' => $msg]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Comment $comment)
    {
        //
    }
}
