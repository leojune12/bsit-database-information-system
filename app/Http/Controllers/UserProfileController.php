<?php

namespace App\Http\Controllers;

use Throwable;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Services\DateService;
use Illuminate\Support\Carbon;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\File;
use Illuminate\Validation\Rules\Password;

class UserProfileController extends Controller
{
    public function show()
    {
        $model = User::findOrFail(Auth::id());

        $model->load('province', 'city', 'barangay', 'certificate_and_awards');

        $model['date_added'] = DateService::viewDate($model->created_at);

        $model['age'] = Carbon::parse($model->date_of_birth)->age;

        $photo_url = $model->getFirstMediaUrl('profile_photos');

        return Inertia::render('UserProfile/Show', [
            'model' => $model,
            'photo_url' => $photo_url,
        ]);
    }

    public function edit()
    {
        $model = User::findOrFail(Auth::id());

        $model->load('roles');

        $photo_url = $model->getFirstMediaUrl('profile_photos');

        return Inertia::render('UserProfile/Edit', [
            'model' => $model,
            'photo_url' => $photo_url,
        ]);
    }

    public function update(Request $request)
    {
        $model = User::findOrFail(Auth::id());

        $request->validate([
            'photo' => [
                'nullable',
                File::image()
                ->max(5 * 1024),
            ],
            'first_name' => 'required|max:255',
            'middle_name' => 'nullable|max:255',
            'last_name' => 'required|max:255',
            'suffix_name' => 'nullable|max:255',
            'gender' => 'required|max:255',
            'citizenship' => 'required|max:255',
            'religion' => 'nullable|max:255',
            'civil_status' => 'required|max:255',
            'date_of_birth' => 'required|max:10|date',
            'place_of_birth' => 'nullable|max:255',

            'email' => [
                'required',
                'email',
                Rule::unique('users')->ignore($model),
            ],
            'contact_number' => 'nullable|max:255',

            'province_id' => 'required',
            'city_id' => 'required',
            'barangay_id' => 'required',

            'password' => ['nullable', 'confirmed', Password::defaults()],
        ]);

        DB::beginTransaction();

        try {

            if ($request->filled('password')) {
                $request['password'] = Hash::make($request->password);

                $model->update($request->except('role'));
            } else {

                $model->update($request->except('password', 'role'));
            }

            // Remove photo
            if ($request->remove_photo) {

                $media = $model->getFirstMedia('profile_photos');

                if ($media) {

                    $media->delete();
                }
            }

            // Add photo
            if ($request->photo) {
                $model
                    ->addMedia($request->photo)
                    ->toMediaCollection('profile_photos');
            }

            DB::commit();

            return back();
        } catch (Throwable $e) {

            DB::rollBack();

            return $e;
            // return back();
        }
    }
}
