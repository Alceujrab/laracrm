<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\AppSetting;
use Illuminate\Support\Facades\Storage;

class AppSettingsController extends Controller
{
    public function update(Request $request)
    {
        $request->validate([
            'app_name' => 'required|string|max:255',
            'app_logo' => 'nullable|image|mimes:jpeg,png,jpg,svg|max:2048',
        ]);

        AppSetting::setSetting('app_name', $request->app_name);

        if ($request->hasFile('app_logo')) {
            // Deletar logo antiga se existir
            $oldLogo = AppSetting::getSetting('app_logo');
            if ($oldLogo) {
                Storage::disk('public')->delete($oldLogo);
            }

            $path = $request->file('app_logo')->store('app_logos', 'public');
            AppSetting::setSetting('app_logo', $path);
        }

        return back()->with('success', 'Configurações atualizadas com sucesso!');
    }
}
