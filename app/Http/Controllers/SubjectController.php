<?php

namespace App\Http\Controllers;

use Throwable;
use Inertia\Inertia;
use App\Models\Subject;
use App\Models\Curriculum;
use Illuminate\Http\Request;
use App\Services\DateService;
use App\Services\RoleService;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class SubjectController extends Controller
{
    public function index(Request $request)
    {
        if (Auth::user()->roles[0]->name != 'Admin') {

            return redirect('/');
        }

        return Inertia::render('Subject/Index', [
            'response' => $this->getData($request),
        ]);
    }

    private function getData($request)
    {
        $query = DB::table('subjects');

        $query->where('subjects.deleted_at', null);

        $query->orderBy($request->orderBy ?? 'subjects.id', $request->orderType ?? 'DESC');

        $query->join('curricula', 'curricula.id', '=', 'subjects.curriculum_id');

        $query->select(
            'subjects.id',
            'subjects.course_code',
            'subjects.descriptive_title',
            'subjects.prerequisite_subject_id',
            'subjects.year',
            'subjects.semester',
            'curricula.name as subject_curriculum_name',
        );

        // dd($query->paginate($request->perPage ?? 10));

        return $query->paginate($request->perPage ?? 10);
    }

    public function create()
    {
        RoleService::checkAuthority(['Admin']);

        $curriculums = Curriculum::all();

        return Inertia::render('Subject/Create', [
            'curriculums' => $curriculums,
        ]);
    }

    public function store(Request $request)
    {
        RoleService::checkAuthority(['Admin']);

        $request->validate([
            'curriculum_id' => 'required',
            'course_code' => [
                'required',
                'max:255',
                Rule::unique('subjects'),
            ],
            'descriptive_title' => 'required|max:255',
            'unit' => 'nullable|integer|max:100',
            'lecture' => 'nullable|integer|max:100',
            'laboratory' => 'nullable|integer|max:100',
            'prerequisite_subject_id' => [
                'nullable',
                'integer',
                'exists:subjects',
            ],
            'year' => 'required',
            'semester' => 'required',
        ]);

        DB::beginTransaction();

        try {

            Subject::create($request->all());

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
        $model = Subject::find($id);

        $model->load('curriculum');

        $model['date_added'] = DateService::viewDate($model->created_at);

        return Inertia::render('Subject/Show', [
            'model' => $model,
        ]);
    }

    public function edit($id)
    {
        RoleService::checkAuthority(['Admin']);

        $curriculums = Curriculum::all();

        $model = Subject::find($id);

        return Inertia::render('Subject/Edit', [
            'model' => $model,
            'curriculums' => $curriculums,
        ]);
    }

    public function update(Request $request, $id)
    {
        RoleService::checkAuthority(['Admin']);

        $model = Subject::find($id);

        $request->validate([
            'course_code' => [
                'required',
                'max:255',
                Rule::unique('subjects')->ignore($model),
            ],
            'descriptive_title' => 'required|max:255',
            'unit' => 'nullable|integer|max:100',
            'lecture' => 'nullable|integer|max:100',
            'laboratory' => 'nullable|integer|max:100',
            'prerequisite_subject_id' => [
                'nullable',
                'integer',
                'exists:subjects',
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

                Subject::destroy($request->id_array);
                DB::commit();
                return back();
            } catch (Throwable $e) {

                DB::rollBack();
                return back();
            }
        }
    }
}
