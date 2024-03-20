<?php

use App\Models\Book;
use App\Models\Comment;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('comment_votes', function (Blueprint $table) {
            $table->dropColumn('book_id');
            $table->foreignIdFor(Comment::class);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('comment_votes', function (Blueprint $table) {
            $table->dropColumn('comment_id');
            $table->foreignIdFor(Book::class);
        });
    }
};
