<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Services\DateService;
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

        $query->select(
            'users.id',
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

            $user->syncRoles(['Admin']);

            DB::commit();

            return back();
        } catch (Throwable $e) {

            DB::rollBack();

            return $e;
            // return back();
        }
    }

    public function storeStudent(Request $request)
    {
        $request->validate([
            'id_number' => [
                'required',
                'numeric',
                'max_digits:10',
                Rule::unique('users'),
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

        // $model->load('roles:id,name');
        $model['date_added'] = DateService::viewDate($model->created_at);

        $this->response_array["model"] = $model;

        return Inertia::render('User/Show', $this->response_array);
    }

    public function edit($id)
    {
        $model = User::find($id);

        return Inertia::render('User/Edit', [
            'model' => $model,
        ]);
    }

    public function update(Request $request, $id)
    {
        $model = User::find($id);

        if ($model->roles[0]->name == "Student") {

            $request->validate([
                'id_number' => [
                    'required',
                    'numeric',
                    'max_digits:10',
                    Rule::unique('users')->ignore($model),
                ],
            ]);
        } else {

            $request->validate([
                'id_number' => 'nullable'
            ]);
        }

        $request->validate([
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
