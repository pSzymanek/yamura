<?php

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

require __DIR__ . '/vendor/phpmailer/src/Exception.php';
require __DIR__ . '/vendor/phpmailer/src/PHPMailer.php';
require __DIR__ . '/vendor/phpmailer/src/SMTP.php';

const ALLOWED_ORIGINS = [
    'https://yamura.pl',
    'https://www.yamura.pl',
];
const RECIPIENT = 'meble@yamura.pl';
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW = 900;

function respond($status, $message)
{
    http_response_code($status);
    header('Content-Type: application/json; charset=UTF-8');
    header('Cache-Control: no-store');
    echo json_encode(['message' => $message], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function text_value(array $payload, $key)
{
    $value = isset($payload[$key]) ? $payload[$key] : '';
    return is_string($value) ? trim($value) : '';
}

function length_between($value, $minimum, $maximum)
{
    $length = function_exists('mb_strlen') ? mb_strlen($value, 'UTF-8') : strlen($value);
    return $length >= $minimum && $length <= $maximum;
}

function load_private_config()
{
    $candidates = [];
    $home = getenv('HOME');

    if (is_string($home) && $home !== '') {
        $candidates[] = rtrim($home, '/\\') . '/yamura-contact-secrets.php';
    }

    if (!empty($_SERVER['HOME']) && is_string($_SERVER['HOME'])) {
        $candidates[] = rtrim($_SERVER['HOME'], '/\\') . '/yamura-contact-secrets.php';
    }

    if (!empty($_SERVER['DOCUMENT_ROOT']) && is_string($_SERVER['DOCUMENT_ROOT'])) {
        $documentRoot = rtrim($_SERVER['DOCUMENT_ROOT'], '/\\');
        $candidates[] = dirname($documentRoot) . '/yamura-contact-secrets.php';
        $candidates[] = dirname(dirname($documentRoot)) . '/yamura-contact-secrets.php';
    }

    foreach (array_unique($candidates) as $candidate) {
        if (is_file($candidate) && is_readable($candidate)) {
            $config = require $candidate;
            if (is_array($config)) {
                return $config;
            }
        }
    }

    respond(503, 'Formularz jest chwilowo niedostępny. Skontaktuj się z nami bezpośrednio.');
}

function create_mailer(array $config)
{
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = (string) $config['smtp_host'];
    $mail->Port = (int) $config['smtp_port'];
    $mail->SMTPAuth = true;
    $mail->Username = (string) $config['smtp_username'];
    $mail->Password = (string) $config['smtp_password'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Timeout = 15;
    $mail->CharSet = PHPMailer::CHARSET_UTF8;
    $mail->Encoding = PHPMailer::ENCODING_BASE64;
    $mail->setFrom((string) $config['smtp_username'], 'YAMURA Meble');

    return $mail;
}

function enforce_rate_limit($ip)
{
    $path = sys_get_temp_dir() . '/yamura-contact-' . hash('sha256', $ip) . '.json';
    $handle = @fopen($path, 'c+');

    if ($handle === false || !flock($handle, LOCK_EX)) {
        respond(503, 'Formularz jest chwilowo niedostępny. Spróbuj ponownie później.');
    }

    $contents = stream_get_contents($handle);
    $timestamps = json_decode($contents ?: '[]', true);
    $timestamps = is_array($timestamps) ? $timestamps : [];
    $threshold = time() - RATE_LIMIT_WINDOW;
    $timestamps = array_values(array_filter($timestamps, static function ($timestamp) use ($threshold) {
        return is_int($timestamp) && $timestamp >= $threshold;
    }));

    if (count($timestamps) >= RATE_LIMIT_MAX) {
        flock($handle, LOCK_UN);
        fclose($handle);
        respond(429, 'Wysłano zbyt wiele wiadomości. Spróbuj ponownie za kilkanaście minut.');
    }

    $timestamps[] = time();
    ftruncate($handle, 0);
    rewind($handle);
    fwrite($handle, json_encode($timestamps));
    fflush($handle);
    flock($handle, LOCK_UN);
    fclose($handle);
}

function error_id()
{
    if (function_exists('random_bytes')) {
        return bin2hex(random_bytes(6));
    }

    if (function_exists('openssl_random_pseudo_bytes')) {
        $strong = false;
        $bytes = openssl_random_pseudo_bytes(6, $strong);
        if ($bytes !== false && $strong) {
            return bin2hex($bytes);
        }
    }

    return substr(hash('sha256', uniqid('', true) . mt_rand()), 0, 12);
}

$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';
if ($origin !== '' && !in_array($origin, ALLOWED_ORIGINS, true)) {
    respond(403, 'Niedozwolone źródło żądania.');
}

if ($origin !== '') {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
}

$requestMethod = isset($_SERVER['REQUEST_METHOD']) ? $_SERVER['REQUEST_METHOD'] : '';

if ($requestMethod === 'OPTIONS') {
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Accept');
    header('Access-Control-Max-Age: 600');
    http_response_code(204);
    exit;
}

if ($requestMethod !== 'POST') {
    header('Allow: POST, OPTIONS');
    respond(405, 'Dozwolona jest wyłącznie metoda POST.');
}

$contentType = strtolower(isset($_SERVER['CONTENT_TYPE']) ? $_SERVER['CONTENT_TYPE'] : '');
if (strpos($contentType, 'application/json') !== 0) {
    respond(415, 'Nieobsługiwany format danych.');
}

$rawBody = file_get_contents('php://input');
if ($rawBody === false || strlen($rawBody) > 16000) {
    respond(413, 'Wiadomość jest zbyt duża.');
}

$payload = json_decode($rawBody, true);
if (!is_array($payload)) {
    respond(400, 'Nieprawidłowe dane formularza.');
}

if (text_value($payload, 'website') !== '') {
    respond(200, 'Wiadomość została przyjęta.');
}

$startedAt = isset($payload['startedAt']) ? $payload['startedAt'] : 0;
$elapsed = is_numeric($startedAt) ? ((int) round(microtime(true) * 1000) - (int) $startedAt) : 0;
if ($elapsed < 2500 || $elapsed > 86400000) {
    respond(422, 'Odśwież stronę i spróbuj ponownie.');
}

$name = text_value($payload, 'name');
$email = text_value($payload, 'email');
$phone = text_value($payload, 'phone');
$projectType = text_value($payload, 'projectType');
$location = text_value($payload, 'location');
$message = text_value($payload, 'message');
$privacyAccepted = isset($payload['privacyAccepted']) ? $payload['privacyAccepted'] : '';
$allowedProjectTypes = ['Kuchnia', 'Salon', 'Łazienka', 'Biuro', 'Inna zabudowa'];

if (!length_between($name, 2, 120)) {
    respond(422, 'Podaj poprawne imię i nazwisko.');
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL) || !length_between($email, 3, 160)) {
    respond(422, 'Podaj poprawny adres e-mail.');
}
if ($phone !== '' && !length_between($phone, 5, 40)) {
    respond(422, 'Podaj poprawny numer telefonu.');
}
if (!in_array($projectType, $allowedProjectTypes, true)) {
    respond(422, 'Wybierz rodzaj realizacji.');
}
if (!length_between($location, 2, 140)) {
    respond(422, 'Podaj miejsce realizacji.');
}
if (!length_between($message, 20, 3000)) {
    respond(422, 'Wiadomość musi mieć od 20 do 3000 znaków.');
}
if ($privacyAccepted !== 'true' && $privacyAccepted !== true) {
    respond(422, 'Zaakceptuj politykę prywatności.');
}

enforce_rate_limit(isset($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : 'unknown');
$config = load_private_config();

$requiredConfig = ['smtp_host', 'smtp_port', 'smtp_username', 'smtp_password'];
foreach ($requiredConfig as $key) {
    if (!isset($config[$key]) || $config[$key] === '') {
        respond(503, 'Formularz jest chwilowo niedostępny. Skontaktuj się z nami bezpośrednio.');
    }
}

$subject = 'Nowe zapytanie YAMURA: ' . $projectType . ' - ' . $name;
$plainBody = implode("\n", [
    'Nowe zapytanie z formularza yamura.pl',
    '',
    'Imię i nazwisko: ' . $name,
    'E-mail: ' . $email,
    'Telefon: ' . ($phone !== '' ? $phone : 'nie podano'),
    'Rodzaj realizacji: ' . $projectType,
    'Miejsce realizacji: ' . $location,
    '',
    'Wiadomość:',
    $message,
]);

$escape = static function ($value) {
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
};
$htmlBody = '<h2>Nowe zapytanie z formularza yamura.pl</h2>'
    . '<p><strong>Imię i nazwisko:</strong> ' . $escape($name) . '<br>'
    . '<strong>E-mail:</strong> ' . $escape($email) . '<br>'
    . '<strong>Telefon:</strong> ' . $escape($phone !== '' ? $phone : 'nie podano') . '<br>'
    . '<strong>Rodzaj realizacji:</strong> ' . $escape($projectType) . '<br>'
    . '<strong>Miejsce realizacji:</strong> ' . $escape($location) . '</p>'
    . '<p><strong>Wiadomość:</strong><br>' . nl2br($escape($message)) . '</p>';

$confirmationPlainBody = implode("\n", [
    'Dziękujemy za kontakt z YAMURA.',
    '',
    'Twoja wiadomość dotarła do nas. Wkrótce wrócimy z odpowiedzią.',
    '',
    'Podsumowanie zgłoszenia:',
    'Imię i nazwisko: ' . $name,
    'E-mail: ' . $email,
    'Telefon: ' . ($phone !== '' ? $phone : 'nie podano'),
    'Rodzaj realizacji: ' . $projectType,
    'Miejsce realizacji: ' . $location,
    '',
    'Wiadomość:',
    $message,
    '',
    'YAMURA Meble',
    'tel. +48 694 942 645',
    'meble@yamura.pl',
    'Instagram: https://www.instagram.com/yamuradesign/',
    'Facebook: https://www.facebook.com/profile.php?id=61592926465245',
    'Pinterest: https://pl.pinterest.com/yamurameble/',
]);

$confirmationHtmlBody = '<!doctype html><html lang="pl"><body style="margin:0;padding:0;background:#f1ece5;color:#171513;font-family:Arial,sans-serif;">'
    . '<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#f1ece5;padding:24px 12px;"><tr><td align="center">'
    . '<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:640px;background:#ffffff;border-collapse:collapse;">'
    . '<tr><td style="padding:34px 36px 26px;border-top:5px solid #171513;"><img src="cid:yamura-logo" width="210" alt="YAMURA" style="display:block;width:210px;max-width:100%;height:auto;"></td></tr>'
    . '<tr><td style="padding:4px 36px 28px;"><p style="margin:0 0 12px;color:#a32c32;font-size:12px;letter-spacing:3px;text-transform:uppercase;">Potwierdzenie zgłoszenia</p>'
    . '<h1 style="margin:0 0 18px;font-family:Georgia,serif;font-size:34px;font-weight:400;line-height:1.2;">Dziękujemy za kontakt.</h1>'
    . '<p style="margin:0;font-size:16px;line-height:1.7;color:#4f4a45;">Twoja wiadomość dotarła do nas. Wkrótce wrócimy z odpowiedzią i ustalimy kolejny krok.</p></td></tr>'
    . '<tr><td style="padding:0 36px 30px;"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#f7f3ee;border-left:3px solid #d1ad7b;">'
    . '<tr><td style="padding:24px;"><p style="margin:0 0 18px;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#6e665f;">Podgląd Twojej wiadomości</p>'
    . '<p style="margin:0 0 7px;font-size:14px;line-height:1.5;"><strong>Rodzaj realizacji:</strong> ' . $escape($projectType) . '</p>'
    . '<p style="margin:0 0 7px;font-size:14px;line-height:1.5;"><strong>Miejsce realizacji:</strong> ' . $escape($location) . '</p>'
    . '<p style="margin:0 0 7px;font-size:14px;line-height:1.5;"><strong>Telefon:</strong> ' . $escape($phone !== '' ? $phone : 'nie podano') . '</p>'
    . '<p style="margin:16px 0 0;font-size:14px;line-height:1.7;white-space:pre-line;">' . nl2br($escape($message)) . '</p></td></tr></table></td></tr>'
    . '<tr><td style="padding:26px 36px;background:#11100f;color:#f7f3ee;"><p style="margin:0 0 16px;font-size:13px;line-height:1.6;">YAMURA Meble<br><a href="tel:+48694942645" style="color:#d9bc92;text-decoration:none;">+48 694 942 645</a> &nbsp;|&nbsp; <a href="mailto:meble@yamura.pl" style="color:#d9bc92;text-decoration:none;">meble@yamura.pl</a></p>'
    . '<table role="presentation" cellspacing="0" cellpadding="0" border="0"><tr>'
    . '<td style="padding-right:10px;"><a href="https://www.instagram.com/yamuradesign/" style="display:block;"><img src="cid:yamura-instagram" width="38" height="38" alt="Instagram" style="display:block;border:0;"></a></td>'
    . '<td style="padding-right:10px;"><a href="https://www.facebook.com/profile.php?id=61592926465245" style="display:block;"><img src="cid:yamura-facebook" width="38" height="38" alt="Facebook" style="display:block;border:0;"></a></td>'
    . '<td><a href="https://pl.pinterest.com/yamurameble/" style="display:block;"><img src="cid:yamura-pinterest" width="38" height="38" alt="Pinterest" style="display:block;border:0;"></a></td>'
    . '</tr></table><p style="margin:18px 0 0;font-size:11px;line-height:1.5;color:#a9a39c;">To automatyczne potwierdzenie wysłania formularza. Możesz odpowiedzieć bezpośrednio na tę wiadomość.</p></td></tr>'
    . '</table></td></tr></table></body></html>';

try {
    $mail = create_mailer($config);
    $mail->addAddress(RECIPIENT, 'YAMURA Meble');
    $mail->addReplyTo($email, $name);
    $mail->Subject = $subject;
    $mail->isHTML(true);
    $mail->Body = $htmlBody;
    $mail->AltBody = $plainBody;
    $mail->send();
} catch (Exception $exception) {
    $errorId = error_id();
    error_log('YAMURA contact form SMTP error [' . $errorId . ']: ' . $exception->getMessage());
    respond(503, 'Nie udało się wysłać wiadomości. Spróbuj ponownie lub skontaktuj się z nami bezpośrednio.');
}

try {
    $confirmation = create_mailer($config);
    $confirmation->addAddress($email, $name);
    $confirmation->addReplyTo(RECIPIENT, 'YAMURA Meble');
    $confirmation->Subject = 'Dziękujemy za kontakt | YAMURA';
    $confirmation->addCustomHeader('Auto-Submitted', 'auto-replied');
    $confirmation->addCustomHeader('X-Auto-Response-Suppress', 'All');
    $confirmation->addEmbeddedImage(dirname(__DIR__) . '/images/logo/yamura-dark.png', 'yamura-logo', 'yamura.png');
    $confirmation->addEmbeddedImage(__DIR__ . '/email-assets/instagram.png', 'yamura-instagram', 'instagram.png');
    $confirmation->addEmbeddedImage(__DIR__ . '/email-assets/facebook.png', 'yamura-facebook', 'facebook.png');
    $confirmation->addEmbeddedImage(__DIR__ . '/email-assets/pinterest.png', 'yamura-pinterest', 'pinterest.png');
    $confirmation->isHTML(true);
    $confirmation->Body = $confirmationHtmlBody;
    $confirmation->AltBody = $confirmationPlainBody;
    $confirmation->send();
} catch (Exception $exception) {
    $errorId = error_id();
    error_log('YAMURA confirmation email error [' . $errorId . ']: ' . $exception->getMessage());
}

respond(200, 'Dziękujemy. Wiadomość została wysłana.');
