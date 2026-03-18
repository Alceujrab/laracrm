<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Conversation;

class InboxController extends Controller
{
    public function index(Request $request)
    {
        $conversations = Conversation::with(['contact', 'channel', 'messages' => function($q) {
            $q->orderBy('created_at', 'asc');
        }])->orderBy('last_message_at', 'desc')->get();

        return Inertia::render('Inbox/Index', [
            'conversations' => $conversations
        ]);
    }
}
