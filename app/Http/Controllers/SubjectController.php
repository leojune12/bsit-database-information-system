<?php

namespace App\Http\Controllers;

use Throwable;
use Inertia\Inertia;
use App\Models\Subject;
use Illuminate\Http\Request;
use App\Services\DateService;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;

class SubjectController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('Subject/Index', [
            'response' => $this->getData($request),
        ]);
    }

    private function getData($request)
    {
        $query = DB::table('subjects');

        $query->where('deleted_at', null);

        $query->orderBy($request->orderBy ?? 'id', $request->orderType ?? 'DESC');

        return $query->paginate($request->perPage ?? 10);
    }

    public function create()
    {
        return Inertia::render('Subject/Create', [
            //
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
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

        $model['date_added'] = DateService::viewDate($model->created_at);

        return Inertia::render('Subject/Show', [
            'model' => $model,
        ]);
    }

    public function edit($id)
    {
        $model = Subject::find($id);

        return Inertia::render('Subject/Edit', [
            'model' => $model,
        ]);
    }

    public function update(Request $request, $id)
    {
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
