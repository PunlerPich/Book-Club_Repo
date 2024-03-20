<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

class UserController extends Controller
{
  function register(Request $request) 
  {
    $validator = Validator::make($request->all(), [
      'name' => 'required|string|max:255',
      'email' => 'required|email|max:255|unique:users',
      'password' => ['required', Password::min(3)],
    ]);

    if ($validator->fails()) {
      return response()->json($validator->errors());
    }

    $user = User::create([
      'name' => $request->name,
      'email' => $request->email,
      'password' => Hash::make($request->password),
    ]);

    $token = $user->createToken('auth_token')->plainTextToken;
    return response()->json([
      'data' => $user,
      'access_token' => $token,
      'token_type' => 'Bearer',
    ]);
  }

  function logout(Request $request)
  {
    $request->user()->tokens()->delete();
    $response = [
      'message' => 'Logout',
    ];
    return response($response, 201);
  }

  function index(Request $request)
  {
    $user = User::where('email', $request->email)->first();
    // print_r($data);
    if (!$user || !Hash::check($request->password, $user->password)) {
      return response([
        'message' => ['These credentials do not match our records.']
      ], 404);
    }

    $token = $user->createToken('my-app-token')->plainTextToken;

    $response = [
      'user' => $user,
      'token' => $token
    ];

    return response($response, 201);
  }

  function dashboard(Request $request)
  {
    $response = [
      'data' => 'Hello world!'
    ];

    return response($response, 201);
  }
}
