<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\ContactUsController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

if (App::environment('production')) {
    URL::forceScheme('https');
}

Route::resource('/', HomeController::class);

Route::post('contact-us', [ContactUsController::class, 'index']);

Route::post('comments/{id}/reply', [CommentController::class, 'reply']);

Route::resource('comments', CommentController::class);

Route::group(['middleware' => ['auth', 'verified', 'role:Admin']], function () {

    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::resource('users', UserController::class);
});

require __DIR__.'/auth.php';
require __DIR__.'/profile.php';
