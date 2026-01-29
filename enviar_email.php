<?php
// enviar_email.php
// Script para envio de emails do formulário de contato

// Configurações
$para_email = "loxias.apollo.ed@gmail.com"; // Seu email
$assunto_site = "Loxias Apollo - Mensagem do Site";

// Habilitar exibição de erros (apenas para desenvolvimento)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Verificar se é uma requisição POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode([
        "status" => "error",
        "message" => "Método não permitido. Use POST."
    ]);
    exit;
}

// Receber dados do formulário
$nome = isset($_POST['nome']) ? trim($_POST['nome']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$assunto = isset($_POST['assunto']) ? trim($_POST['assunto']) : '';
$mensagem = isset($_POST['mensagem']) ? trim($_POST['mensagem']) : '';
$visibilidade = isset($_POST['visibilidade']) ? trim($_POST['visibilidade']) : 'publico';

// Validar dados
$errors = [];

if (empty($nome)) {
    $errors[] = "Nome é obrigatório";
}

if (empty($email)) {
    $errors[] = "Email é obrigatório";
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = "Email inválido";
}

if (empty($assunto)) {
    $errors[] = "Assunto é obrigatório";
}

if (empty($mensagem)) {
    $errors[] = "Mensagem é obrigatória";
}

// Se houver erros, retornar
if (!empty($errors)) {
    http_response_code(400);
    echo json_encode([
        "status" => "error",
        "message" => "Erros de validação",
        "errors" => $errors
    ]);
    exit;
}

// Construir o email
$assunto_email = "[Loxias Apollo] $assunto - De: $nome";

$corpo_email = "
<html>
<head>
    <title>Mensagem do Site Loxias Apollo</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #000; color: #FFD700; padding: 15px; text-align: center; }
        .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #5A6B4F; }
        .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h2>Nova Mensagem do Site Loxias Apollo</h2>
        </div>
        <div class='content'>
            <div class='field'>
                <span class='label'>Data:</span> " . date('d/m/Y H:i:s') . "
            </div>
            <div class='field'>
                <span class='label'>Nome:</span> $nome
            </div>
            <div class='field'>
                <span class='label'>Email:</span> $email
            </div>
            <div class='field'>
                <span class='label'>Assunto:</span> $assunto
            </div>
            <div class='field'>
                <span class='label'>Visibilidade:</span> " . ($visibilidade == 'publico' ? 'Público (aparece no mural)' : 'Privado') . "
            </div>
            <div class='field'>
                <span class='label'>Mensagem:</span><br>
                " . nl2br(htmlspecialchars($mensagem)) . "
            </div>
        </div>
        <div class='footer'>
            Esta mensagem foi enviada através do formulário de contato do site Loxias Apollo.
        </div>
    </div>
</body>
</html>
";

// Cabeçalhos do email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type: text/html; charset=utf-8" . "\r\n";
$headers .= "From: $nome <$email>" . "\r\n";
$headers .= "Reply-To: $email" . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Tentar enviar o email
try {
    $enviado = mail($para_email, $assunto_email, $corpo_email, $headers);
    
    if ($enviado) {
        // Salvar também em um arquivo de log (backup)
        $log_data = date('Y-m-d H:i:s') . " | $nome | $email | $assunto | $visibilidade\n";
        file_put_contents('contatos_log.txt', $log_data, FILE_APPEND);
        
        // Retornar sucesso
        echo json_encode([
            "status" => "success",
            "message" => "Mensagem enviada com sucesso!",
            "redirect" => "contato.html?enviado=sucesso"
        ]);
    } else {
        throw new Exception("Falha no envio do email. Servidor de email não respondeu.");
    }
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        "status" => "error",
        "message" => "Erro ao enviar email: " . $e->getMessage()
    ]);
}
?>