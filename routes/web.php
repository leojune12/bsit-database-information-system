<?php

use Inertia\Inertia;
use App\Services\AddressService;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AlumniController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\SubjectController;
use App\Http\Controllers\IdNumberController;
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

Route::get('/', function () {
    return redirect('login');
});

Route::get('address/get-provinces', function() {

    return AddressService::getProvinces();
});

Route::get('address/get-barangays-per-city-muniicpality/{city_code}', function($city_code) {

    return AddressService::getBarangaysPerCity($city_code);
});

Route::get('address/get-cities-municipalities-per-province/{province_code}', function($province_code) {

    return AddressService::getCityPerProvince($province_code);
});

Route::post('/students/store', [StudentController::class, 'store']);

Route::group(['middleware' => ['auth', 'verified', 'role:Admin|Student']], function () {

    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::resource('users', UserController::class);

    Route::resource('students', StudentController::class);

    Route::resource('alumni', AlumniController::class);

    Route::resource('id-numbers', IdNumberController::class);

    Route::resource('subjects', SubjectController::class);
});

require __DIR__.'/auth.php';
require __DIR__.'/profile.php';
