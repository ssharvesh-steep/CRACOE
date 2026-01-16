<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

if (!$input || !isset($input['name']) || !isset($input['email']) || !isset($input['message'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing required fields']);
    exit;
}

$to = 'info@cracoe.com';
$subject = 'Elite Contact Form - ' . $input['name'];
$message = "New elite consultation request:\n\n";
$message .= "Name: " . $input['name'] . "\n";
$message .= "Email: " . $input['email'] . "\n";
$message .= "Phone: " . ($input['phone'] ?: 'Not provided') . "\n";
$message .= "Company: " . ($input['company'] ?: 'Not provided') . "\n\n";
$message .= "Message:\n" . $input['message'] . "\n\n";
$message .= "Submitted: " . date('Y-m-d H:i:s') . "\n";

$headers = "From: " . $input['email'] . "\r\n";
$headers .= "Reply-To: " . $input['email'] . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

if (mail($to, $subject, $message, $headers)) {
    echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send email']);
}
?>