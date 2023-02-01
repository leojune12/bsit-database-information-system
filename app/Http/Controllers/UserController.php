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
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\File;
use Illuminate\Validation\Rules\Password;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

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

        $query = User::with('roles')
        ->orderBy($request->orderBy ?? 'users.id', $request->orderType ?? 'DESC')

        ->when($request->search != 'null', function ($query) use ($request) {
                return $query->orWhere('users.first_name', 'like', '%' . $request->search . '%');
        })
        ->when($request->search != 'null', function ($query) use ($request) {
            return $query->orWhere('users.last_name', 'like', '%' . $request->search . '%');
        })
        ->when($request->search != 'null', function ($query) use ($request) {
                return $query->orWhere('users.email', 'like', '%' . $request->search . '%');
        })

        ->role(['Admin', 'Faculty'])
        ->paginate($request->perPage ?? 10);

        return $query;
    }

    private function search($query, $request)
    {
        $query->when($request->search != 'null', function ($query) use ($request) {
            return $query->where('users.first_name', 'like', '%' . $request->search . '%');
        });

        $query->when($request->search != 'null', function ($query) use ($request) {
            return $query->orWhere('users.last_name', 'like', '%' . $request->search . '%');
        });

        $query->when($request->search != 'null', function ($query) use ($request) {
            return $query->orWhere('users.email', 'like', '%' . $request->search . '%');
        });

        return $query;
    }

    public function create()
    {
        return Inertia::render('User/Create', [
            //
        ]);
    }

    public function store(Request $request)
    {
        // dd($request->photo);

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
        $model = User::find($id);

        $model->load('province', 'city', 'barangay');

        $model['date_added'] = DateService::viewDate($model->created_at);

        $model['age'] = Carbon::parse($model->date_of_birth)->age;

        $photo_url = $model->getFirstMediaUrl('profile_photos');

        return Inertia::render('User/Show', [
            'model' => $model,
            'photo_url' => $photo_url,
        ]);
    }

    public function edit($id)
    {
        $model = User::find($id);

        $model->load('roles');

        $photo_url = $model->getFirstMediaUrl('profile_photos');

        return Inertia::render('User/Edit', [
            'model' => $model,
            'photo_url' => $photo_url,
        ]);
    }

    public function update(Request $request, $id)
    {
        $model = User::find($id);

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
