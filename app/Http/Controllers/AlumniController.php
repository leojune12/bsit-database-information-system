<?php

namespace App\Http\Controllers;

use Throwable;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Services\DateService;
use App\Services\RoleService;
use Illuminate\Support\Carbon;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\File;
use Illuminate\Validation\Rules\Password;

class AlumniController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('Alumni/Index', [
            'response' => $this->getData($request),
        ]);
    }

    private function getData($request)
    {
        $query = User::orderBy($request->orderBy ?? 'users.id', $request->orderType ?? 'DESC')
        ->when($request->search != 'null', function ($query) use ($request) {
            return $query->where('id_number', 'like', '%' . $request->search . '%');
        })
        ->when($request->search != 'null', function ($query) use ($request) {
                return $query->orWhere('users.first_name', 'like', '%' . $request->search . '%');
        })
        ->when($request->search != 'null', function ($query) use ($request) {
            return $query->orWhere('users.last_name', 'like', '%' . $request->search . '%');
        })
        ->when($request->search != 'null', function ($query) use ($request) {
                return $query->orWhere('users.email', 'like', '%' . $request->search . '%');
        })
        ->role('Alumnus')
        ->paginate($request->perPage ?? 10);

        return $query;
    }

    public function create()
    {
        RoleService::checkAuthority(['Admin']);

        // return Inertia::render('Alumni/Create', [
            //
        // ]);
    }

    public function store(Request $request)
    {
        RoleService::checkAuthority(['Admin']);

        $request->validate([
            // Basic Information
            'photo' => [
                'nullable',
                File::image()
                ->max(5 * 1024),
            ],
            'id_number' => [
                'required',
                'numeric',
                'max_digits:10',
                'min_digits:10',
                Rule::unique('users'),
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

            // Contact Information
            'email' => [
                'required',
                'email',
                Rule::unique('users'),
            ],
            'contact_number' => 'nullable|max:255',

            // Family Information
            'father_name' => 'nullable|max:255',
            'father_highest_educational_attainment' => 'nullable|max:255',
            'father_occupation' => 'nullable|max:255',
            'father_contact_number' => 'nullable|max:255',
            'mother_name' => 'nullable|max:255',
            'mother_highest_educational_attainment' => 'nullable|max:255',
            'mother_occupation' => 'nullable|max:255',
            'mother_contact_number' => 'nullable|max:255',
            'guardian_name' => 'nullable|max:255',
            'guardian_highest_educational_attainment' => 'nullable|max:255',
            'guardian_occupation' => 'nullable|max:255',
            'guardian_relationship' => 'nullable|max:255',
            'guardian_contact_number' => 'nullable|max:255',
            'monthly_family_income' => 'nullable|max:255',

            // Address Information
            'province_id' => 'required',
            'city_id' => 'required',
            'barangay_id' => 'required',

            // Educational Background Information
            'elementary_school' => 'nullable|max:255',
            'elementary_address' => 'nullable|max:255',
            'elementary_award' => 'nullable|max:255',
            'elementary_school_type' => 'nullable|max:255',
            'junior_high_school' => 'nullable|max:255',
            'junior_high_school_address' => 'nullable|max:255',
            'junior_high_school_award' => 'nullable|max:255',
            'junior_high_school_type' => 'nullable|max:255',
            'senior_high_school' => 'nullable|max:255',
            'senior_high_school_address' => 'nullable|max:255',
            'senior_high_school_award' => 'nullable|max:255',
            'senior_high_school_type' => 'nullable|max:255',
            'tertiary_school' => 'nullable|max:255',
            'tertiary_address' => 'nullable|max:255',
            'tertiary_award' => 'nullable|max:255',
            'tertiary_school_type' => 'nullable|max:255',
            'special_courses_school' => 'nullable|max:255',
            'special_courses_address' => 'nullable|max:255',
            'special_courses_award' => 'nullable|max:255',
            'special_courses_school_type' => 'nullable|max:255',

            'password' => ['required', 'confirmed', Password::defaults()],
        ]);

        DB::beginTransaction();

        try {

            $request['password'] = Hash::make($request->password);

            $user = User::create($request->all());

            $user->save();

            $user->syncRoles(['Student']);

            if ($request->photo) {

                $user
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

    public function show($id)
    {
        $model = User::findOrFail($id);

        $model->load('province', 'city', 'barangay', 'certificate_and_awards');

        $model['date_added'] = DateService::viewDate($model->created_at);

        $model['age'] = Carbon::parse($model->date_of_birth)->age;

        $photo_url = $model->getFirstMediaUrl('profile_photos');

        return Inertia::render('Alumni/Show', [
            'model' => $model,
            'photo_url' => $photo_url,
        ]);
    }

    public function edit($id)
    {
        RoleService::checkAuthority(['Admin']);

        $model = User::findOrFail($id);

        $photo_url = $model->getFirstMediaUrl('profile_photos');

        return Inertia::render('Alumni/Edit', [
            'model' => $model,
            'photo_url' => $photo_url,
        ]);
    }

    public function update(Request $request, $id)
    {
        RoleService::checkAuthority(['Admin']);

        $model = User::findOrFail($id);

        $request->validate([
            'photo' => [
                'nullable',
                File::image()
                ->max(5 * 1024),
            ],
            // Basic Information
            'id_number' => [
                'required',
                'numeric',
                'max_digits:10',
                'min_digits:10',
                Rule::unique('users')->ignore($model),
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

            // Contact Information
            'email' => [
                'required',
                'email',
                Rule::unique('users')->ignore($model),
            ],
            'contact_number' => 'nullable|max:255',

            // Family Information
            'father_name' => 'nullable|max:255',
            'father_highest_educational_attainment' => 'nullable|max:255',
            'father_occupation' => 'nullable|max:255',
            'father_contact_number' => 'nullable|max:255',
            'mother_name' => 'nullable|max:255',
            'mother_highest_educational_attainment' => 'nullable|max:255',
            'mother_occupation' => 'nullable|max:255',
            'mother_contact_number' => 'nullable|max:255',
            'guardian_name' => 'nullable|max:255',
            'guardian_highest_educational_attainment' => 'nullable|max:255',
            'guardian_occupation' => 'nullable|max:255',
            'guardian_relationship' => 'nullable|max:255',
            'guardian_contact_number' => 'nullable|max:255',
            'monthly_family_income' => 'nullable|max:255',

            // Address Information
            'province_id' => 'required',
            'city_id' => 'required',
            'barangay_id' => 'required',

            // Educational Background Information
            'elementary_school' => 'nullable|max:255',
            'elementary_address' => 'nullable|max:255',
            'elementary_award' => 'nullable|max:255',
            'elementary_school_type' => 'nullable|max:255',
            'junior_high_school' => 'nullable|max:255',
            'junior_high_school_address' => 'nullable|max:255',
            'junior_high_school_award' => 'nullable|max:255',
            'junior_high_school_type' => 'nullable|max:255',
            'senior_high_school' => 'nullable|max:255',
            'senior_high_school_address' => 'nullable|max:255',
            'senior_high_school_award' => 'nullable|max:255',
            'senior_high_school_type' => 'nullable|max:255',
            'tertiary_school' => 'nullable|max:255',
            'tertiary_address' => 'nullable|max:255',
            'tertiary_award' => 'nullable|max:255',
            'tertiary_school_type' => 'nullable|max:255',
            'special_courses_school' => 'nullable|max:255',
            'special_courses_address' => 'nullable|max:255',
            'special_courses_award' => 'nullable|max:255',
            'special_courses_school_type' => 'nullable|max:255',

            'password' => ['nullable', 'confirmed', Password::defaults()],
        ]);

        DB::beginTransaction();

        try {

            if ($request->filled('password')) {
                $request['password'] = Hash::make($request->password);

                $model->update($request->all());
            } else {

                $model->update($request->except('password'));
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

    public function destroy(Request $request, $id)
    {
        RoleService::checkAuthority(['Admin']);

        if(!empty($request->id_array)) {

            DB::beginTransaction();

            try {

                User::destroy($request->id_array);
                DB::commit();
                return back();
            } catch (Throwable $e) {

                DB::rollBack();
                return back();
            }
        }
    }
}
