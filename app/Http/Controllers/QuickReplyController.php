<?php

namespace App\Http\Controllers;

use App\Models\QuickReply;
use Illuminate\Http\Request;

class QuickReplyController extends Controller
{
    /**
     * Return quick replies: global ones + current user's own.
     */
    public function index(Request $request)
    {
        $replies = QuickReply::where(function ($q) use ($request) {
            $q->whereNull('user_id')
              ->orWhere('user_id', $request->user()->id);
        })->orderBy('title')->get();

        return response()->json($replies);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title'    => 'required|string|max:80',
            'content'  => 'required|string',
            'category' => 'nullable|string|max:60',
            'is_global'=> 'boolean',
        ]);

        $reply = QuickReply::create([
            'title'    => $validated['title'],
            'content'  => $validated['content'],
            'category' => $validated['category'] ?? null,
            'user_id'  => ($validated['is_global'] ?? false) ? null : $request->user()->id,
        ]);

        return response()->json($reply, 201);
    }

    public function update(Request $request, QuickReply $quickReply)
    {
        $validated = $request->validate([
            'title'    => 'sometimes|string|max:80',
            'content'  => 'sometimes|string',
            'category' => 'nullable|string|max:60',
        ]);
        $quickReply->update($validated);
        return response()->json($quickReply);
    }

    public function destroy(QuickReply $quickReply)
    {
        $quickReply->delete();
        return response()->json(['message' => 'Deleted']);
    }
}
