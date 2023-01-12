<?php

namespace App\Http\Controllers;

use Throwable;
use App\Models\User;
use Inertia\Inertia;
use App\Models\IdNumber;
use Illuminate\Http\Request;
use App\Services\DateService;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

class StudentController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('Student/Index', [
            'response' => $this->getData($request),
        ]);
    }

    private function getData($request)
    {
        $query = DB::table('users');

        $query->where('deleted_at', null);

        $query->orderBy($request->orderBy ?? 'id', $request->orderType ?? 'DESC');

        $query->join('model_has_roles', 'users.id', '=', 'model_has_roles.model_id');

        $query->join('roles', 'model_has_roles.role_id', '=', 'roles.id');

        $query->where('roles.name', 'Student');

        $query->select(
            'users.id',
            'users.id_number',
            'users.first_name',
            'users.last_name',
            'users.email',
            'roles.name as role'
        );

        return $query->paginate($request->perPage ?? 10);
    }

    public function create()
    {
        return Inertia::render('Student/Create', [
            //
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'id_number' => [
                'required',
                'numeric',
                'max_digits:10',
                'min_digits:10',
                Rule::unique('users'),
                'exists:id_numbers',
            ],
            'first_name' => 'required|max:255',
            'middle_name' => 'nullable|max:255',
            'last_name' => 'required|max:255',
            'suffix_name' => 'nullable|max:255',
            'date_of_birth' => 'required|max:10|date',
            'email' => [
                'required',
                'email',
                Rule::unique('users'),
            ],
            'contact_number' => 'nullable|max:255',
            'guardian_name' => 'nullable|max:255',
            'guardian_relationship' => 'nullable|max:255',
            'guardian_contact_number' => 'nullable|max:255',
            'province_id' => 'nullable',
            'city_id' => 'nullable',
            'barangay_id' => 'nullable',
            'password' => ['required', 'confirmed', Password::defaults()],
        ]);

        DB::beginTransaction();

        try {

            $request['password'] = Hash::make($request->password);

            $user = User::create($request->all());

            $user->save();

            $user->syncRoles(['Student']);

            DB::commit();

            Auth::login($user);

            return back();
        } catch (Throwable $e) {

            DB::rollBack();

            return $e;
            // return back();
        }
    }

    public function show($id)
    {
        $model = User::find($id);

        $model->load('province', 'city', 'barangay');

        $model['date_added'] = DateService::viewDate($model->created_at);

        return Inertia::render('Student/Show', [
            'model' => $model,
        ]);
    }

    public function edit($id)
    {
        $model = User::find($id);

        return Inertia::render('Student/Edit', [
            'model' => $model,
        ]);
    }

    public function update(Request $request, $id)
    {
        $model = User::find($id);

        $request->validate([
            'id_number' => [
                'required',
                'numeric',
                'max_digits:10',
                'min_digits:10',
                Rule::unique('users')->ignore($model),
                'exists:id_numbers',
            ],
            'first_name' => 'required|max:255',
            'middle_name' => 'nullable|max:255',
            'last_name' => 'required|max:255',
            'suffix_name' => 'nullable|max:255',
            'date_of_birth' => 'required|max:10|date',
            'email' => [
                'required',
                'email',
                Rule::unique('users')->ignore($model),
            ],
            'contact_number' => 'nullable|max:255',
            'guardian_name' => 'nullable|max:255',
            'guardian_relationship' => 'nullable|max:255',
            'guardian_contact_number' => 'nullable|max:255',
            'province_id' => 'nullable',
            'city_id' => 'nullable',
            'barangay_id' => 'nullable',
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
