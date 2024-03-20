<?php

namespace App\Http\Controllers;

use App\Models\Discussion;
use App\Http\Requests\StoreDiscussionRequest;
use App\Http\Requests\UpdateDiscussionRequest;
use App\Models\CommentVote;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class DiscussionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(Discussion::all());
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
            'title' => 'required|string|max:500',
            'book_id' => 'required|integer|exists:books,id',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $new_discussion = Discussion::create([
            'title' => $request->title,
            'book_id' => $request->book_id,
            'user_id' => $request->user()->id
        ]);

        return response()->json($new_discussion->load('user'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Discussion $discussion)
    {
        //
    }

    public function get_comments(Discussion $discussion)
    {
        $comments = $discussion->comments()
            ->whereNull('reply_to_comment_id')
            ->withCount('replies')
            ->with('user:id,name', 'replies')
            // ->withSum('votes', 'score')
            ->orderBy('likes', 'desc')
            ->orderBy('created_at', 'asc')
            ->get();

        $user = auth('sanctum')->user();
        if ($user) {
            $liked_comment_ids = CommentVote::where('comment_id', 1)
                ->where('user_id', $user->id)
                ->get('comment_id')
                ->pluck('comment_id');
        }

        return response()->json([
            'comments' => $comments,
            'liked_comment_ids' => $liked_comment_ids ?? [],
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Discussion $discussion)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Discussion $discussion)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:500',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        if ($request->user()->id != $discussion->user->id) {
            return response()->json([
                'message' => 'Cannot update discussion that isn\'t yours.',
            ], 401);
        }

        $discussion->update([
            'title' => $request->title,
        ]);

        return response()->json($discussion);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Discussion $discussion)
    {
        //
    }
}
