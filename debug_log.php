<?php
$lines = file('storage/logs/laravel.log');
$last = array_slice($lines, -80);
echo "\n==== EXCEPTION STACK ====\n";
foreach($last as $l) {
    if (trim($l) !== '') {
        echo trim($l) . "\n";
    }
}
echo "\n==== END ====\n";
