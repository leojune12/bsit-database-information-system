<?php

namespace App\Services;

use Illuminate\Support\Facades\Auth;

class RoleService
{
    public function __construct()
    {
    }

    public static function checkAuthority($approved_roles = [], $text = "")
    {
        if(Auth::check() && !!count($approved_roles)) {
            abort_unless(in_array(Auth::user()->roles[0]->name, $approved_roles), 403, $text);
        }
    }

    public static function checkAuthorityById($id = null, $text = "")
    {
        if (!in_array(Auth::user()->roles[0]->name, ['Admin', 'Faculty'])) {

            abort_unless(Auth::id() == $id, 403, $text);
        }
    }
}
