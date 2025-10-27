<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');

$messagesFile = 'messages.json';

if (!file_exists($messagesFile)) {
    echo json_encode([]);
    exit;
}

$messages = json_decode(file_get_contents($messagesFile), true);
if (!$messages) {
    echo json_encode([]);
    exit;
}

echo json_encode($messages);
?>
