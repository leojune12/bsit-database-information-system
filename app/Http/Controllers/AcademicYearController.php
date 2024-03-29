<?php

namespace App\Http\Controllers;

use Throwable;
use Inertia\Inertia;
use App\Models\Curriculum;
use App\Models\AcademicYear;
use Illuminate\Http\Request;
use App\Services\DateService;
use App\Services\RoleService;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;

class AcademicYearController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('AcademicYear/Index', [
            'response' => $this->getData($request),
        ]);
    }

    private function getData($request)
    {
        return AcademicYear::with('sections')->orderBy($request->orderBy ?? 'id', $request->orderType ?? 'DESC')
                ->when($request->search != 'null', function ($query) use ($request) {
                    return $query->orWhere('name', 'like', '%' . $request->search . '%');
                })
                ->paginate($request->perPage ?? 10);
    }

    public function create()
    {
        RoleService::checkAuthority(['Admin']);

        $curriculums = Curriculum::all();

        return Inertia::render('AcademicYear/Create', [
            'curriculums' => $curriculums,
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

            $model = AcademicYear::create($request->all());

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
        $model = AcademicYear::findOrFail($id);

        $model->load(
            'first_year_sections',
            'second_year_sections',
            'third_year_sections',
            'fourth_year_sections'
        );

        $model['date_added'] = DateService::viewDate($model->created_at);

        return Inertia::render('AcademicYear/Show', [
            'model' => $model,
        ]);
    }

    public function edit($id)
    {
        RoleService::checkAuthority(['Admin']);

        $curriculums = Curriculum::all();

        $model = AcademicYear::findOrFail($id);

        return Inertia::render('AcademicYear/Edit', [
            'model' => $model,
            'curriculums' => $curriculums,
        ]);
    }

    public function update(Request $request, $id)
    {
        RoleService::checkAuthority(['Admin']);

        $model = AcademicYear::findOrFail($id);

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

                AcademicYear::destroy($request->id_array);
                DB::commit();
                return back();
            } catch (Throwable $e) {

                DB::rollBack();
                return back();
            }
        }
    }
}
