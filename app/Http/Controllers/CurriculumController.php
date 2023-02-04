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
use App\Models\CurriculumSubject;
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
        return Curriculum::orderBy($request->orderBy ?? 'id', $request->orderType ?? 'DESC')
                ->with('subjects')
                ->when($request->search != 'null', function ($query) use ($request) {
                    return $query->orWhere('name', 'like', '%' . $request->search . '%');
                })
                ->paginate($request->perPage ?? 10);
    }

    public function create()
    {
        RoleService::checkAuthority(['Admin']);

        $subjects = Subject::all();

        // dd($subjects->where('year', 1)->where('semester', 1)->toArray());

        return Inertia::render('Curriculum/Create', [
            'first_year_first_semester_subjects' => $subjects->where('year', 1)->where('semester', 1),
            'first_year_second_semester_subjects' => $subjects->where('year', 1)->where('semester', 2),
            'second_year_first_semester_subjects' => $subjects->where('year', 2)->where('semester', 1),
            'second_year_second_semester_subjects' => $subjects->where('year', 2)->where('semester', 2),
            'third_year_first_semester_subjects' => $subjects->where('year', 3)->where('semester', 1),
            'third_year_second_semester_subjects' => $subjects->where('year', 3)->where('semester', 2),
            'fourth_year_first_semester_subjects' => $subjects->where('year', 4)->where('semester', 1),
            'fourth_year_second_semester_subjects' => $subjects->where('year', 4)->where('semester', 2),
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
        $model = Curriculum::findOrFail($id);

        $model->load(
            'subjects',
            'first_year_first_semester_subjects',
            'first_year_second_semester_subjects',
            'second_year_first_semester_subjects',
            'second_year_second_semester_subjects',
            'third_year_first_semester_subjects',
            'third_year_second_semester_subjects',
            'fourth_year_first_semester_subjects',
            'fourth_year_second_semester_subjects',
        );

        $model['date_added'] = DateService::viewDate($model->created_at);

        $subjects = Subject::all();

        $first_year_first_semester_subjects_array = [];
        $first_year_second_semester_subjects_array = [];
        $second_year_first_semester_subjects_array = [];
        $second_year_second_semester_subjects_array = [];
        $third_year_first_semester_subjects_array = [];
        $third_year_second_semester_subjects_array = [];
        $fourth_year_first_semester_subjects_array = [];
        $fourth_year_second_semester_subjects_array = [];

        foreach ($subjects->where('year', 1)->where('semester', 1) as $item) {
            array_push($first_year_first_semester_subjects_array, $item);
        };
        foreach ($subjects->where('year', 1)->where('semester', 2) as $item) {
            array_push($first_year_second_semester_subjects_array, $item);
        };
        foreach ($subjects->where('year', 2)->where('semester', 1) as $item) {
            array_push($second_year_first_semester_subjects_array, $item);
        };
        foreach ($subjects->where('year', 2)->where('semester', 2) as $item) {
            array_push($second_year_second_semester_subjects_array, $item);
        };
        foreach ($subjects->where('year', 3)->where('semester', 1) as $item) {
            array_push($third_year_first_semester_subjects_array, $item);
        };
        foreach ($subjects->where('year', 3)->where('semester', 2) as $item) {
            array_push($third_year_second_semester_subjects_array, $item);
        };
        foreach ($subjects->where('year', 4)->where('semester', 1) as $item) {
            array_push($fourth_year_first_semester_subjects_array, $item);
        };
        foreach ($subjects->where('year', 4)->where('semester', 2) as $item) {
            array_push($fourth_year_second_semester_subjects_array, $item);
        };

        return Inertia::render('Curriculum/Show', [
            'model' => $model,
            'subjects' => [
                'first_year_first_semester_subjects' => $first_year_first_semester_subjects_array,
                'first_year_second_semester_subjects' => $first_year_second_semester_subjects_array,
                'second_year_first_semester_subjects' => $second_year_first_semester_subjects_array,
                'second_year_second_semester_subjects' => $second_year_second_semester_subjects_array,
                'third_year_first_semester_subjects' => $third_year_first_semester_subjects_array,
                'third_year_second_semester_subjects' => $third_year_second_semester_subjects_array,
                'fourth_year_first_semester_subjects' => $fourth_year_first_semester_subjects_array,
                'fourth_year_second_semester_subjects' => $fourth_year_second_semester_subjects_array,
            ]
        ]);
    }

    public function edit($id)
    {
        RoleService::checkAuthority(['Admin']);

        $model = Curriculum::findOrFail($id);

        return Inertia::render('Curriculum/Edit', [
            'model' => $model,
        ]);
    }

    public function update(Request $request, $id)
    {
        RoleService::checkAuthority(['Admin']);

        $model = Curriculum::findOrFail($id);

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

    public function updateSubjects(Request $request, $id)
    {
        // RoleService::checkAuthority(['Admin']);
        // dd($request->all());
        $model = Curriculum::findOrFail($id);

        DB::beginTransaction();

        try {

            // $model->{$request->year_and_semester}()->sync(array_column($request->subjects, 'id'));

            $subjects = Subject::where('year', $request->year)
                                ->where('semester', $request->semester)->get();

            foreach ($subjects as $subject) {
                CurriculumSubject::where('curriculum_id', $id)->where('subject_id', $subject->id)->delete();
            }

            $model->subjects()->attach(array_column($request->subjects, 'id'));

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
