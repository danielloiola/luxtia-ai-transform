<?php
/**
 * Luxtia Deployment Script
 * Simple PHP script to handle contact form if needed
 */

// Enable CORS if needed
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Simple contact form handler
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action']) && $_POST['action'] === 'contact') {
    $name = htmlspecialchars($_POST['name'] ?? '');
    $email = filter_var($_POST['email'] ?? '', FILTER_VALIDATE_EMAIL);
    $message = htmlspecialchars($_POST['message'] ?? '');
    
    if ($name && $email && $message) {
        // Here you can add email sending logic or database storage
        $to = 'contato@luxtia.com'; // Replace with actual email
        $subject = 'Contato do site Luxtia - ' . $name;
        $body = "Nome: $name\nEmail: $email\nMensagem:\n$message";
        $headers = "From: $email\r\nReply-To: $email\r\n";
        
        // Uncomment to actually send email
        // mail($to, $subject, $body, $headers);
        
        echo json_encode(['success' => true, 'message' => 'Mensagem enviada com sucesso!']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Dados inválidos.']);
    }
    exit();
}

// Serve the React app for all other requests
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Luxtia - Curadoria em Tecnologia & IA</title>
    <meta name="description" content="Luxtia - Curadoria em Tecnologia & Inteligência Artificial. Transformando negócios por meio da inovação com mais de 20 anos de experiência." />
    <meta name="author" content="Luxtia" />
    <link rel="icon" href="/lovable-uploads/116758e0-686c-40ab-9e49-8668f5423389.png" type="image/png" />

    <meta property="og:title" content="Luxtia - Curadoria em Tecnologia & IA" />
    <meta property="og:description" content="Transformando negócios por meio da inovação com mais de 20 anos de experiência em transformação digital." />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="/lovable-uploads/116758e0-686c-40ab-9e49-8668f5423389.png" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@luxtia" />
    <meta name="twitter:image" content="/lovable-uploads/116758e0-686c-40ab-9e49-8668f5423389.png" />
    
    <!-- This will be replaced with actual built assets -->
    <link rel="stylesheet" href="/assets/index.css">
  </head>

  <body>
    <div id="root"></div>
    <!-- This will be replaced with actual built assets -->
    <script type="module" src="/assets/index.js"></script>
  </body>
</html>