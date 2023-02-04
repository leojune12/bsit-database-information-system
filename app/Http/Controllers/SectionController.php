<?php

namespace App\Http\Controllers;

use Throwable;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Section;
use App\Models\Subject;
use App\Models\Curriculum;
use App\Models\SectionUser;
use App\Models\SubjectUser;
use App\Models\AcademicYear;
use Illuminate\Http\Request;
use App\Services\DateService;
use App\Services\RoleService;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class SectionController extends Controller
{
    public function index(Request $request)
    {
        if (Auth::user()->roles[0]->name != 'Admin') {

            return redirect('/');
        }

        return Inertia::render('Section/Index', [
            'response' => $this->getData($request),
        ]);
    }

    private function getData($request)
    {
        return Section::with('curriculum', 'academic_year', 'students')
            ->orderBy($request->orderBy ?? 'id', $request->orderType ?? 'DESC')
            ->when($request->search != 'null', function ($query) use ($request) {
                return $query->orWhere('name', 'like', '%' . $request->search . '%');
            })
            ->paginate($request->perPage ?? 10);
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
                // Rule::unique('sections'),
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
        $model = Section::findOrFail($id);

        $model->load('academic_year', 'curriculum');

        $model['date_added'] = DateService::viewDate($model->created_at);

        return Inertia::render('Section/Show', [
            'model' => $model,
            'students' => $model->students,
        ]);
    }

    public function addStudent(Request $request)
    {
        $request->validate([
            'id_number' => 'required|integer|exists:users,id_number',
        ]);

        $user = User::where('id_number', $request->id_number)->first();

        DB::beginTransaction();

        try {

            $section_user = SectionUser::where('user_id', $user->id)
                ->where('section_id', $request->section_id)
                ->first();

            if (!$section_user) {

                SectionUser::insert([
                    'section_id' => $request->section_id,
                    'user_id' => $user->id,
                ]);

                $curriculum = Curriculum::find($request->curriculum_id);

                $subjects = $curriculum->subjects->where('year', $request->year);

                // dd($subjects);

                // $subjects = Subject::where('curriculum_id', $request->curriculum_id)
                //     ->where('year', $request->year)
                //     ->get();

                foreach ($subjects as $subject) {

                    SubjectUser::insert([
                        'subject_id' => $subject->id,
                        'user_id' => $user->id,
                    ]);
                }
            }

            DB::commit();
            return back();
        } catch (Throwable $e) {
            dd($e);
            DB::rollBack();
            return back();
        }
    }

    public function edit($id)
    {
        RoleService::checkAuthority(['Admin']);

        $academic_years = AcademicYear::all();

        $curriculums = Curriculum::all();

        $model = Section::findOrFail($id);

        return Inertia::render('Section/Edit', [
            'model' => $model,
            'academic_years' => $academic_years,
            'curriculums' => $curriculums,
        ]);
    }

    public function update(Request $request, $id)
    {
        RoleService::checkAuthority(['Admin']);

        $model = Section::findOrFail($id);

        $request->validate([
            'academic_year_id' => 'required',
            'curriculum_id' => 'required',
            'name' => [
                'required',
                'max:100',
                // Rule::unique('sections')->ignore($model),
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

    public function removeStudent(Request $request, $id)
    {
        RoleService::checkAuthority(['Admin']);

        if(!empty($request->section_id)) {

            DB::beginTransaction();

            try {

                SectionUser::where('user_id', $id)
                    ->where('section_id', $request->section_id)
                    ->delete();

                $subjects = Subject::where('curriculum_id', $request->curriculum_id)
                    ->where('year', $request->year)
                    ->get();

                foreach ($subjects as $subject) {

                    SubjectUser::where('subject_id', $subject->id)
                        ->where('user_id', $id)
                        ->delete();
                }

                DB::commit();
                return back();
            } catch (Throwable $e) {
                dd($e);
                DB::rollBack();
                return back();
            }
        }
    }
}
