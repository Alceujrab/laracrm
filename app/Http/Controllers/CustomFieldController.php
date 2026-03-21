<?php

namespace App\Http\Controllers;

use App\Models\CustomField;
use App\Models\CustomFieldValue;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class CustomFieldController extends Controller
{
    /**
     * List all fields, optionally filtered by entity_type.
     */
    public function index(Request $request)
    {
        $query = CustomField::orderBy('order');
        if ($request->entity_type) {
            $query->where('entity_type', $request->entity_type);
        }
        return response()->json($query->get());
    }

    /**
     * Create a new custom field.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'entity_type' => 'required|in:contact,deal',
            'label'       => 'required|string|max:80',
            'field_type'  => 'required|in:text,number,select,date',
            'options'     => 'nullable|array',
            'order'       => 'integer',
            'is_required' => 'boolean',
        ]);
        $validated['field_key'] = Str::snake($validated['label']) . '_' . Str::random(4);

        return response()->json(CustomField::create($validated), 201);
    }

    /**
     * Update a custom field definition.
     */
    public function update(Request $request, CustomField $customField)
    {
        $validated = $request->validate([
            'label'       => 'sometimes|string|max:80',
            'field_type'  => 'sometimes|in:text,number,select,date',
            'options'     => 'nullable|array',
            'order'       => 'integer',
            'is_required' => 'boolean',
        ]);
        $customField->update($validated);
        return response()->json($customField);
    }

    /**
     * Delete a custom field and its values.
     */
    public function destroy(CustomField $customField)
    {
        $customField->values()->delete();
        $customField->delete();
        return response()->json(['message' => 'Deleted']);
    }

    /**
     * Get field values for a specific entity (e.g., contact:12 or deal:5).
     */
    public function getValues(Request $request)
    {
        $request->validate([
            'entity_type' => 'required|string',
            'entity_id'   => 'required|integer',
        ]);

        $fields = CustomField::where('entity_type', $request->entity_type)->orderBy('order')->get();
        $values = CustomFieldValue::where('entity_type', $request->entity_type)
                                  ->where('entity_id', $request->entity_id)
                                  ->pluck('value', 'custom_field_id');

        return response()->json($fields->map(fn($f) => [
            ...$f->toArray(),
            'value' => $values[$f->id] ?? null,
        ]));
    }

    /**
     * Bulk-save values for a given entity.
     * Body: { entity_type, entity_id, values: { field_id: value } }
     */
    public function saveValues(Request $request)
    {
        $request->validate([
            'entity_type' => 'required|string',
            'entity_id'   => 'required|integer',
            'values'      => 'required|array',
        ]);

        foreach ($request->values as $fieldId => $value) {
            CustomFieldValue::updateOrCreate(
                [
                    'custom_field_id' => $fieldId,
                    'entity_id'       => $request->entity_id,
                    'entity_type'     => $request->entity_type,
                ],
                ['value' => $value]
            );
        }

        return response()->json(['message' => 'Saved successfully']);
    }
}
