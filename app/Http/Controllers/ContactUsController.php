<?php

namespace App\Http\Controllers;

use to;
use App\Mail\ContactUsMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactUsController extends Controller
{
    public function index(Request $request)
    {
        $mailData = [
            'from' => $request->email,
            'title' => $request->subject,
            'body' => $request->message,
        ];

        try {

            Mail::to('jfljfb@gmail.com')->send(new ContactUsMail($mailData));
        } catch (Throwable $e) {

            dd("Something went wrong. Please try again.");
        }
    }
}
