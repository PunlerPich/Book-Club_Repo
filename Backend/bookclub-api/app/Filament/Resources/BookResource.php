<?php

namespace App\Filament\Resources;

use App\Filament\Resources\BookResource\Pages;
use App\Filament\Resources\BookResource\RelationManagers;
use App\Models\Book;
use Filament\Forms;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Radio;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class BookResource extends Resource
{
    protected static ?string $model = Book::class;

    protected static ?string $navigationIcon = 'heroicon-o-book-open';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('name')
                    ->required()
                    ->maxLength(200)
                    ->unique(ignoreRecord: true),
                DatePicker::make('published_date')
                    ->required()
                    ->maxDate(now()),
                TextInput::make('author_name')
                    ->required()
                    ->maxLength(200),
                Select::make('genres')
                    ->relationship('genres', 'name')
                    ->multiple()
                    ->searchable()->preload()
                    ->required()
                    ->createOptionForm([
                        TextInput::make('name')
                            ->required()
                            ->maxLength(100)
                            ->unique(),
                        FileUpload::make('image')
                            ->moveFiles()
                            ->required(),
                    ]),
                RichEditor::make('description')
                    ->required()
                    ->columnSpanFull(),
                FileUpload::make('front_cover')
                    ->image()
                    ->moveFiles()
                    ->required(),
                // FileUpload::make('back_cover')
                //     ->image()
                //     ->moveFiles(),
                Radio::make('rating')
                    ->required()
                    ->options([
                        1 => '⭐', 
                        2 => '⭐⭐', 
                        3 => '⭐⭐⭐', 
                        4 => '⭐⭐⭐⭐', 
                        5 => '⭐⭐⭐⭐⭐'
                    ])
                    ->descriptions([
                        1 => 'Terrible!', 
                        2 => 'Meh', 
                        3 => 'So-so', 
                        4 => 'Insightful', 
                        5 => 'Life-changing!'
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')
                    ->searchable()
                    ->wrap(),
                TextColumn::make('published_date'),
                TextColumn::make('author_name')
                    ->searchable(),
                ImageColumn::make('front_cover'),
                TextColumn::make('genres.name'),
                TextColumn::make('rating'),
                    // ->formatStateUsing(function (string $state): string {
                    //     return str_repeat('⭐', $state);
                    // }),
            ])
            ->filters([
                SelectFilter::make('genres')
                    ->relationship('genres', 'name')
                    ->multiple()
                    ->preload(),
                SelectFilter::make('rating')
                    ->options([
                        1 => '⭐', 
                        2 => '⭐⭐', 
                        3 => '⭐⭐⭐', 
                        4 => '⭐⭐⭐⭐', 
                        5 => '⭐⭐⭐⭐⭐'
                    ])
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }
    
    public static function getRelations(): array
    {
        return [
            //
        ];
    }
    
    public static function getPages(): array
    {
        return [
            'index' => Pages\ListBooks::route('/'),
            'create' => Pages\CreateBook::route('/create'),
            'edit' => Pages\EditBook::route('/{record}/edit'),
        ];
    }    
}
