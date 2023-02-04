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
        return Subject::with('curriculums')
            ->orderBy($request->orderBy ?? 'id', $request->orderType ?? 'DESC')
            ->when($request->search != 'null', function ($query) use ($request) {
                return $query->orWhere('course_code', 'like', '%' . $request->search . '%');
            })
            ->when($request->search != 'null', function ($query) use ($request) {
                return $query->orWhere('descriptive_title', 'like', '%' . $request->search . '%');
            })
            ->paginate($request->perPage ?? 10);
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
        $model = Subject::findOrFail($id);

        $model->load('curriculums');

        $model['date_added'] = DateService::viewDate($model->created_at);

        return Inertia::render('Subject/Show', [
            'model' => $model,
        ]);
    }

    public function edit($id)
    {
        RoleService::checkAuthority(['Admin']);

        $curriculums = Curriculum::all();

        $model = Subject::findOrFail($id);

        return Inertia::render('Subject/Edit', [
            'model' => $model,
            'curriculums' => $curriculums,
        ]);
    }

    public function update(Request $request, $id)
    {
        RoleService::checkAuthority(['Admin']);

        $model = Subject::findOrFail($id);

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
