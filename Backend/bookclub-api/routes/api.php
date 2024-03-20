<?php

use App\Http\Controllers\BookController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\DiscussionController;
use App\Http\Controllers\UserController;
use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::post('dashboard', [UserController::class, 'dashboard']);
    Route::post('logout', [UserController::class, 'logout']);

    Route::post('discussions', [DiscussionController::class, 'store']);
    Route::patch('discussions/{discussion}', [DiscussionController::class, 'update']);
    Route::post('comments', [CommentController::class, 'store']);
    Route::patch('comments/{comment}', [CommentController::class, 'update']);
    
    Route::post('comments/{comment}/upvote', [CommentController::class, 'upvote']);
    Route::post('comments/{comment}/downvote', [CommentController::class, 'downvote']);
});

Route::post('login', [UserController::class, 'index']);
Route::post('register', [UserController::class, 'register']);

Route::get('books', [BookController::class, 'index']);
Route::get('books/{book}', [BookController::class, 'show']);
Route::post('books', [BookController::class, 'store']);

// Get comments of in a discussion
Route::get('discussions/{discussion}/comments', [DiscussionController::class, 'get_comments']);

// Get replies to a comment
Route::get('comments/{comment}/replies', [CommentController::class, 'get_replies']);
