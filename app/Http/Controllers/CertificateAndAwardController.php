<?php

namespace App\Http\Controllers;

use Throwable;
use Illuminate\Http\Request;
use App\Services\RoleService;
use Illuminate\Support\Facades\DB;
use App\Models\CertificateAndAward;
use Illuminate\Validation\Rules\File;

class CertificateAndAwardController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        RoleService::checkAuthority(['Admin', 'Faculty']);

        $request->validate([
            // Basic Information
            'file' => [
                'required',
            ],
            'name' => 'required|max:255',
        ]);

        DB::beginTransaction();

        try {

            $certificate_and_award = CertificateAndAward::create($request->all());

            $certificate_and_award
                ->addMedia($request->file)
                ->toMediaCollection('certificate-and-awards');

            DB::commit();

            return back();
        } catch (Throwable $e) {

            DB::rollBack();

            return $e;
            // return back();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CertificateAndAward  $certificateAndAward
     * @return \Illuminate\Http\Response
     */
    public function show(CertificateAndAward $certificateAndAward)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\CertificateAndAward  $certificateAndAward
     * @return \Illuminate\Http\Response
     */
    public function edit(CertificateAndAward $certificateAndAward)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\CertificateAndAward  $certificateAndAward
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CertificateAndAward $certificateAndAward)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CertificateAndAward  $certificateAndAward
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        RoleService::checkAuthority(['Admin','Faculty']);

        try {

            DB::beginTransaction();

            CertificateAndAward::destroy($request->certificate_and_award_id);

            DB::commit();
            return back();
        } catch (Throwable $e) {

            DB::rollBack();
            return back();
        }
    }
}
