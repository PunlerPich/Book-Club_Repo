<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;
use App\Http\Requests\StoreBookRequest;
use App\Http\Requests\UpdateBookRequest;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $all_books = Book::with('genres')->get();

        return response()->json($all_books);
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
    // public function store(StoreBookRequest $request)
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|unique:books',
            'published_date' => 'required|date',
            'author_name' => 'required|string',
            'description' => 'required|string',
            // 'genres' => 'required|array|min:1',
            // 'genres.*' => 'required|number|distinct',
            'front_cover' => 'required|image',
            'back_cover' => 'image',
            'rating' => 'required|integer|between:1,5',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }
        
        $file = $request->file('front_cover');
        $file->store('public');
        $front_cover_name = $file->hashName();

        if ($request->hasFile('back_cover')) {
            $file = $request->file('back_cover');
            $file->store('public');
            $back_cover_name = $file->hashName();
        }

        $new_book = Book::create([
            'name' => $request->name,
            'published_date' => $request->published_date,
            'author_name' => $request->author_name,
            'description' => $request->description,
            'front_cover' => $front_cover_name,
            'back_cover' => $back_cover_name ?? null,
            'rating' => $request->rating,
        ]);

        return response()->json($new_book);
    }

    /**
     * Display the specified resource.
     */
    public function show(Book $book)
    {
        return response()->json($book->load(['genres', 'discussions.user']));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Book $book)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBookRequest $request, Book $book)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Book $book)
    {
        //
    }
}
