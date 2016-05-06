<?php
$contactData = json_decode(file_get_contents('php://input'));
$response = array(
  'success' => true,
  'error' => false,
  'message' => ''
);

$email = array(
  'subject' => $contactData->subject,
  'message' => $contactData->message
);

unset($contactData->subject);
unset($contactData->message);

$message = array('Datos de contacto:');
foreach ($contactData as $key => $value) {
  $message[] = ucfirst($key).": {$value}";
}

$email['message'] = implode("\r\n", $message)."\r\n\r\n{$email['message']}";
$email['message'] = wordwrap($email['message'], 70, "\r\n");

$headers = 'From: ITSO Contacto Webpage <webmaster@itso.mx>'."\r\n" .
  'Reply-To: ITSO Contacto Webpage <webmaster@itso.mx>'."\r\n" .
  'X-Mailer: PHP/'.phpversion();

$response['success'] = mail(
  'itsomx@gmail.com',
  "Contacto itso.mx: {$email['subject']}",
  $email['message'],
  $headers
);

$response['error'] = !$response['success'];
echo json_encode($response);
exit;
