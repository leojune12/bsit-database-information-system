<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Services\DateService;
use Illuminate\Support\Carbon;
use Illuminate\Validation\Rule;
use App\Models\Address\Province;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

class UserController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('User/Index', [
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

        $query->whereIn('roles.name', ['Admin', 'Faculty']);

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
        return Inertia::render('User/Create', [
            //
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
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
                Rule::unique('users'),
            ],
            'contact_number' => 'nullable|max:255',

            'province_id' => 'required',
            'city_id' => 'required',
            'barangay_id' => 'required',

            'role' => 'required',
            'password' => ['required', 'confirmed', Password::defaults()],
        ]);

        DB::beginTransaction();

        try {

            $request['password'] = Hash::make($request->password);

            $user = User::create($request->except('role'));

            $user->syncRoles([$request->role]);

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
        $model = User::find($id);

        $model->load('province', 'city', 'barangay');

        $model['date_added'] = DateService::viewDate($model->created_at);

        $model['age'] = Carbon::parse($model->date_of_birth)->age;

        return Inertia::render('User/Show', [
            'model' => $model,
        ]);
    }

    public function edit($id)
    {
        $model = User::find($id);

        $model->load('roles');

        return Inertia::render('User/Edit', [
            'model' => $model,
        ]);
    }

    public function update(Request $request, $id)
    {
        $model = User::find($id);

        $request->validate([
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

            'role' => 'required',
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

            $model->syncRoles([$request->role]);

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
