<?php

namespace App\Http\Controllers;

use Throwable;
use Inertia\Inertia;
use App\Models\Section;
use App\Models\Curriculum;
use App\Models\AcademicYear;
use Illuminate\Http\Request;
use App\Services\DateService;
use App\Services\RoleService;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;

class SectionController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('Section/Index', [
            'response' => $this->getData($request),
        ]);
    }

    private function getData($request)
    {
        $query = DB::table('sections');

        $query->where('sections.deleted_at', null);

        $query->orderBy($request->orderBy ?? 'sections.id', $request->orderType ?? 'DESC');

        $query->join('academic_years', 'academic_years.id', '=', 'sections.academic_year_id');
        $query->where('academic_years.deleted_at', null);

        $query->join('curricula', 'curricula.id', '=', 'sections.curriculum_id');
        $query->where('curricula.deleted_at', null);

        $query->select(
            'sections.id',
            'sections.name',
            'sections.year',
            'academic_years.name as section_academic_year',
            'curricula.name as section_curriculum',
        );

        return $query->paginate($request->perPage ?? 10);
    }

    public function create()
    {
        RoleService::checkAuthority(['Admin']);

        $academic_years = AcademicYear::all();

        $curriculums = Curriculum::all();

        return Inertia::render('Section/Create', [
            'academic_years' => $academic_years,
            'curriculums' => $curriculums,
        ]);
    }

    public function store(Request $request)
    {
        RoleService::checkAuthority(['Admin']);

        $request->validate([
            'academic_year_id' => 'required',
            'curriculum_id' => 'required',
            'name' => [
                'required',
                'max:100',
                Rule::unique('sections'),
            ],
            'year' => [
                'required',
                'numeric',
                'max_digits:1',
                'max:4'
            ],
        ]);

        DB::beginTransaction();

        try {

            $model = Section::create($request->all());

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
        $model = Section::find($id);

        $model->load('academic_year', 'curriculum');

        $model['date_added'] = DateService::viewDate($model->created_at);

        return Inertia::render('Section/Show', [
            'model' => $model,
        ]);
    }

    public function edit($id)
    {
        RoleService::checkAuthority(['Admin']);

        $academic_years = AcademicYear::all();

        $curriculums = Curriculum::all();

        $model = Section::find($id);

        return Inertia::render('Section/Edit', [
            'model' => $model,
            'academic_years' => $academic_years,
            'curriculums' => $curriculums,
        ]);
    }

    public function update(Request $request, $id)
    {
        RoleService::checkAuthority(['Admin']);

        $model = Section::find($id);

        $request->validate([
            'academic_year_id' => 'required',
            'curriculum_id' => 'required',
            'name' => [
                'required',
                'max:100',
                Rule::unique('sections')->ignore($model),
            ],
            'year' => [
                'required',
                'numeric',
                'max_digits:1',
                'max:4'
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

                Section::destroy($request->id_array);
                DB::commit();
                return back();
            } catch (Throwable $e) {

                DB::rollBack();
                return back();
            }
        }
    }
}
