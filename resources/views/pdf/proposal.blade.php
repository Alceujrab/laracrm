<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Proposta Comercial</title>
    <style>
        body { font-family: 'Helvetica', sans-serif; color: #333; }
        .header { text-align: center; border-bottom: 2px solid #6366f1; padding-bottom: 20px; }
        .logo { max-width: 150px; }
        .proposal-info { margin-top: 30px; }
        .info-grid { display: table; width: 100%; }
        .info-col { display: table-cell; width: 50%; }
        .items-table { width: 100%; border-collapse: collapse; margin-top: 30px; }
        .items-table th { background: #6366f1; color: #fff; padding: 10px; text-align: left; }
        .items-table td { padding: 10px; border-bottom: 1px solid #eee; }
        .total { text-align: right; margin-top: 20px; font-size: 20px; font-weight: bold; }
        .footer { margin-top: 50px; font-size: 12px; color: #777; text-align: center; }
    </style>
</head>
<body>
    <div class="header">
        <h1>Proposta Comercial</h1>
        <p>{{ config('app.name') }}</p>
    </div>

    <div class="proposal-info">
        <div class="info-grid">
            <div class="info-col">
                <strong>Cliente:</strong> {{ $proposal->contact->name }}<br>
                <strong>Telefone:</strong> {{ $proposal->contact->phone }}
            </div>
            <div class="info-col">
                <strong>Vendedor:</strong> {{ $proposal->user->name }}<br>
                <strong>Validade:</strong> {{ $proposal->valid_until ? $proposal->valid_until->format('d/m/Y') : 'N/A' }}
            </div>
        </div>
    </div>

    @if($proposal->vehicle)
    <div style="margin-top: 30px; background: #f9fafb; padding: 15px; border-radius: 8px;">
        <h3 style="margin-top: 0;">Veículo: {{ $proposal->vehicle->make }} {{ $proposal->vehicle->model }}</h3>
        <p>Ano: {{ $proposal->vehicle->year }} | KM: {{ number_format($proposal->vehicle->km, 0, ',', '.') }}</p>
    </div>
    @endif

    @if($proposal->items)
    <table class="items-table">
        <thead>
            <tr>
                <th>Descrição</th>
                <th style="text-align: right;">Valor</th>
            </tr>
        </thead>
        <tbody>
            @foreach($proposal->items as $item)
            <tr>
                <td>{{ $item['description'] ?? 'S/D' }}</td>
                <td style="text-align: right;">R$ {{ number_format($item['value'] ?? 0, 2, ',', '.') }}</td>
            </tr>
            @endforeach
        </tbody>
    </table>
    @endif

    <div class="total">
        Total: R$ {{ number_format($proposal->total_value, 2, ',', '.') }}
    </div>

    @if($proposal->notes)
    <div style="margin-top: 40px;">
        <strong>Observações:</strong><br>
        <p style="font-size: 14px;">{!! nl2br(e($proposal->notes)) !!}</p>
    </div>
    @endif

    <div class="footer">
        Esta proposta está sujeita a análise de crédito e disponibilidade de estoque.
    </div>
</body>
</html>
