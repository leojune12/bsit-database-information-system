<?php

namespace App\Http\Controllers;

use Throwable;
use App\Models\User;
use Inertia\Inertia;
use App\Models\IdNumber;
use App\Models\SubjectUser;
use Illuminate\Http\Request;
use App\Services\DateService;
use App\Services\RoleService;
use Illuminate\Support\Carbon;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\File;
use Illuminate\Validation\Rules\Password;

class StudentController extends Controller
{
    public function index(Request $request)
    {
        if (Auth::user()->roles[0]->name == 'Student') {
            return redirect('/students/' . Auth::id());
        }

        return Inertia::render('Student/Index', [
            'response' => $this->getData($request),
        ]);
    }

    private function getData($request)
    {
        $query = User::with('sections')
        ->orderBy($request->orderBy ?? 'users.id', $request->orderType ?? 'DESC')

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

        ->role('Student')
        ->paginate($request->perPage ?? 10);

        return $query;
    }

    public function create()
    {
        RoleService::checkAuthority(['Admin']);

        return Inertia::render('Student/Create', [
            //
        ]);
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
        RoleService::checkAuthorityById($id, "You can only view your own profile");

        $model = User::findOrFail($id);

        $model->load('province', 'city', 'barangay', 'sections', 'certificate_and_awards');

        $model->sections->load('curriculum', 'academic_year');

        $model['date_added'] = DateService::viewDate($model->created_at);

        $model['age'] = Carbon::parse($model->date_of_birth)->age;

        $photo_url = $model->getFirstMediaUrl('profile_photos');

        return Inertia::render('Student/Show', [
            'model' => $model,
            'photo_url' => $photo_url,
        ]);
    }

    public function showGrades($id = null)
    {
        if (!$id) {
            $id = Auth::id();
        }

        RoleService::checkAuthorityById($id, "You can only view your own profile");

        $model = User::findOrFail($id);

        $model->load(
            'sections',
            'first_year_first_semester_subjects',
            'first_year_second_semester_subjects',
            'second_year_first_semester_subjects',
            'second_year_second_semester_subjects',
            'third_year_first_semester_subjects',
            'third_year_second_semester_subjects',
            'fourth_year_first_semester_subjects',
            'fourth_year_second_semester_subjects',
        );

        $model->sections->load('curriculum', 'academic_year');

        return Inertia::render('Student/Grades', [
            'model' => $model,
        ]);
    }

    public function updateGrade(Request $request, $id)
    {
        $request->validate([
            'grade' => 'required|max:100'
        ]);

        DB::beginTransaction();

        try {

            $model = SubjectUser::where('user_id', $id)
                                ->where('subject_id', $request->subject_id)
                                ->first();

            $model->update($request->only('grade'));

            DB::commit();

            return back();
        } catch (Throwable $e) {

            DB::rollBack();

            return $e;
            // return back();
        }
    }

    public function edit($id)
    {
        RoleService::checkAuthority(['Admin', 'Student']);
        RoleService::checkAuthorityById($id, "You can only update your own profile");

        $model = User::findOrFail($id);

        $photo_url = $model->getFirstMediaUrl('profile_photos');

        return Inertia::render('Student/Edit', [
            'model' => $model,
            'photo_url' => $photo_url,
        ]);
    }

    public function update(Request $request, $id)
    {
        RoleService::checkAuthority(['Admin', 'Faculty', 'Student']);

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

    public function updateRoleToAlumnus($id)
    {
        $model = User::findOrFail($id);

        $model->syncRoles('Alumnus');

        return back();
    }

    public function updateRoleToStudent($id)
    {
        $model = User::findOrFail($id);

        $model->syncRoles('Student');

        return back();
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
