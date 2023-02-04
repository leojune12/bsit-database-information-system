<?php

use Inertia\Inertia;
use App\Services\AddressService;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AlumniController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\SectionController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\SubjectController;
use App\Http\Controllers\IdNumberController;
use App\Http\Controllers\ContactUsController;
use App\Http\Controllers\CurriculumController;
use App\Http\Controllers\PrintGradeController;
use App\Http\Controllers\UserProfileController;
use App\Http\Controllers\AcademicYearController;
use App\Http\Controllers\CertificateAndAwardController;

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
    return redirect('home');
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

Route::group(['middleware' => ['auth', 'verified','role:Admin|Faculty|Student|Alumnus']], function () {

    Route::get('user-profile', [UserProfileController::class, 'show']);

    Route::get('/home', [HomeController::class, 'index'])->name('dashboard');

    Route::get('grades', [StudentController::class, 'showGrades']);

    Route::get('print-grades/{id_number}', [PrintGradeController::class, 'show']);
});

Route::group(['middleware' => ['auth', 'verified','role:Admin|Faculty|Student']], function () {

    Route::get('user-profile/edit', [UserProfileController::class, 'edit']);
    Route::put('user-profile/update', [UserProfileController::class, 'update'])->name('user-profile.update');

    Route::get('students/{id}/grades', [StudentController::class, 'showGrades']);
    Route::resource('students', StudentController::class);
});

Route::group(['middleware' => ['auth', 'verified', 'role:Admin|Faculty']], function () {

    Route::post('students/{id}/grades', [StudentController::class, 'updateGrade']);
    Route::post('students/certificate-and-awards', [CertificateAndAwardController::class, 'store']);
    Route::post('students/delete-certificate-and-awards', [CertificateAndAwardController::class, 'destroy']);

    Route::post('students/{id}/update-role-to-alumnus', [StudentController::class, 'updateRoleToAlumnus']);
    Route::post('students/{id}/update-role-to-student', [StudentController::class, 'updateRoleToStudent']);

    Route::resource('alumni', AlumniController::class);

    Route::resource('subjects', SubjectController::class);

    Route::resource('academic-years', AcademicYearController::class);

    Route::resource('curriculums', CurriculumController::class);

    Route::resource('sections', SectionController::class);
    Route::delete('sections/remove-student/{id}', [SectionController::class, 'removeStudent']);
    Route::post('sections/add-student', [SectionController::class, 'addStudent']);
});

Route::group(['middleware' => ['auth', 'verified', 'role:Admin']], function () {

    Route::resource('users', UserController::class);

    Route::post('curriculums/{id}/update-subjects', [CurriculumController::class, 'updateSubjects']);
});

require __DIR__.'/auth.php';
require __DIR__.'/profile.php';
