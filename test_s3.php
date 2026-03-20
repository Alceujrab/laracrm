<?php

$url = 'https://s3.carro57.com.br/FC/12259/7724156_6_G_dda10fcaa8.jpeg';

$context = stream_context_create([
    "ssl" => [
        "verify_peer" => false,
        "verify_peer_name" => false,
    ],
]);

$imageContents = file_get_contents($url, false, $context);
if (!$imageContents) {
    echo "FALHOU: não baixou nada\n";
    exit;
}

$finfo = new \finfo(FILEINFO_MIME_TYPE);
$mimeType = $finfo->buffer($imageContents);

echo "Tamanho: " . strlen($imageContents) . " bytes\n";
echo "Mime detectado: " . $mimeType . "\n";
echo "Primeiros 100 caracteres:\n";
echo substr($imageContents, 0, 100) . "\n";
