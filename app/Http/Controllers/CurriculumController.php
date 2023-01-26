<?php

namespace App\Http\Controllers;

use Throwable;
use Inertia\Inertia;
use App\Models\Curriculum;
use Illuminate\Http\Request;
use App\Services\DateService;
use App\Services\RoleService;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;

class CurriculumController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('Curriculum/Index', [
            'response' => $this->getData($request),
        ]);
    }

    private function getData($request)
    {
        $query = DB::table('curricula');

        $query->where('deleted_at', null);

        $query->orderBy($request->orderBy ?? 'id', $request->orderType ?? 'DESC');

        return $query->paginate($request->perPage ?? 10);
    }

    public function create()
    {
        RoleService::checkAuthority(['Admin']);

        return Inertia::render('Curriculum/Create', [

        ]);
    }

    public function store(Request $request)
    {
        RoleService::checkAuthority(['Admin']);

        $request->validate([
            'name' => [
                'required',
                'max:100',
                Rule::unique('academic_years'),
            ],
        ]);

        DB::beginTransaction();

        try {

            $model = Curriculum::create($request->all());

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
        $model = Curriculum::find($id);

        $model['date_added'] = DateService::viewDate($model->created_at);

        return Inertia::render('Curriculum/Show', [
            'model' => $model,
        ]);
    }

    public function edit($id)
    {
        RoleService::checkAuthority(['Admin']);

        $model = Curriculum::find($id);

        return Inertia::render('Curriculum/Edit', [
            'model' => $model,
        ]);
    }

    public function update(Request $request, $id)
    {
        RoleService::checkAuthority(['Admin']);

        $model = Curriculum::find($id);

        $request->validate([
            'name' => [
                'required',
                'max:100',
                Rule::unique('academic_years')->ignore($model),
            ],
        ]);

        DB::beginTransaction();

        try {

            $model->update($request->all());

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

                Curriculum::destroy($request->id_array);
                DB::commit();
                return back();
            } catch (Throwable $e) {

                DB::rollBack();
                return back();
            }
        }
    }
}
