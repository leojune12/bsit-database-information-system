<?php

namespace App\Http\Controllers;

use Throwable;
use Inertia\Inertia;
use App\Models\IdNumber;
use Illuminate\Http\Request;
use App\Services\DateService;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;

class IdNumberController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('IdNumber/Index', [
            'response' => $this->getData($request),
        ]);
    }

    private function getData($request)
    {
        $query = DB::table('id_numbers');

        $query->orderBy($request->orderBy ?? 'id', $request->orderType ?? 'DESC');

        return $query->paginate($request->perPage ?? 10);
    }

    public function create()
    {
        return Inertia::render('IdNumber/Create', [
            //
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'id_number' => [
                'required',
                'numeric',
                'max_digits:10',
                'min_digits:10',
                Rule::unique('id_numbers'),
            ],
        ]);

        DB::beginTransaction();

        try {

            IdNumber::create($request->all());

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
        $model = IdNumber::find($id);

        $model['date_added'] = DateService::viewDate($model->created_at);

        return Inertia::render('IdNumber/Show', [
            'model' => $model,
        ]);
    }

    public function edit($id)
    {
        $model = IdNumber::find($id);

        return Inertia::render('IdNumber/Edit', [
            'model' => $model,
        ]);
    }

    public function update(Request $request, $id)
    {
        $model = IdNumber::find($id);

        $request->validate([
            'id_number' => [
                'required',
                'numeric',
                'max_digits:10',
                'min_digits:10',
                Rule::unique('id_numbers')->ignore($model),
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

                IdNumber::destroy($request->id_array);
                DB::commit();
                return back();
            } catch (Throwable $e) {

                DB::rollBack();
                return back();
            }
        }
    }
}
