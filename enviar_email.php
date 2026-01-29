<?php
// enviar_email.php - CONFIGURAÇÃO FINAL COM PHPMailer
header('Content-Type: application/json; charset=utf-8');

// Incluir PHPMailer
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

// ==============================================
// CONFIGURAÇÃO DO GMAIL
// ==============================================
define('SMTP_HOST', 'smtp.gmail.com');
define('SMTP_PORT', 587);  // Use 587 para TLS
define('SMTP_USERNAME', 'loxias.apollo.ed@gmail.com');
define('SMTP_PASSWORD', 'COLE_AQUI_SUA_SENHA_DE_16_DIGITOS'); // ← COLE A SENHA AQUI!
define('EMAIL_DESTINO', 'loxias.apollo.ed@gmail.com');

// ==============================================
// VERIFICAR SE É POST
// ==============================================
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'status' => 'error',
        'message' => 'Método não permitido. Use POST.'
    ]);
    exit;
}

// ==============================================
// CAPTURAR DADOS DO FORMULÁRIO
// ==============================================
$nome = $_POST['nome'] ?? '';
$email = $_POST['email'] ?? '';
$assunto = $_POST['assunto'] ?? '';
$mensagem = $_POST['mensagem'] ?? '';
$visibilidade = $_POST['visibilidade'] ?? 'publico';

// ==============================================
// VALIDAÇÃO SIMPLES
// ==============================================
if (empty($nome) || empty($email) || empty($assunto) || empty($mensagem)) {
    echo json_encode([
        'status' => 'error', 
        'message' => 'Por favor, preencha todos os campos obrigatórios.'
    ]);
    exit;
}

// ==============================================
// TENTAR ENVIAR O EMAIL
// ==============================================
try {
    // Criar instância do PHPMailer
    $mail = new PHPMailer(true);
    
    // Configurações do servidor SMTP
    $mail->isSMTP();
    $mail->Host = SMTP_HOST;
    $mail->SMTPAuth = true;
    $mail->Username = SMTP_USERNAME;
    $mail->Password = SMTP_PASSWORD;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // TLS
    $mail->Port = SMTP_PORT;
    
    // Configurações adicionais
    $mail->CharSet = 'UTF-8';
    $mail->Encoding = 'base64';
    
    // Remetente e destinatário
    $mail->setFrom($email, $nome);
    $mail->addAddress(EMAIL_DESTINO, 'Loxias Apollo');
    $mail->addReplyTo($email, $nome);
    
    // Assunto
    $mail->Subject = '📚 Loxias Apollo: ' . $assunto;
    
    // Corpo do email (HTML)
    $mail->isHTML(true);
    $mail->Body = '
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; background: #f9f9f9; }
            .container { max-width: 600px; margin: 20px auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
            .header { background: #000000; color: #FFD700; padding: 20px; text-align: center; }
            .content { padding: 25px; }
            .field { margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #eee; }
            .label { font-weight: bold; color: #5A6B4F; display: inline-block; width: 100px; }
            .footer { background: #f5f5f5; padding: 15px; text-align: center; font-size: 12px; color: #666; }
            .badge { display: inline-block; padding: 3px 10px; border-radius: 12px; font-size: 12px; margin-left: 10px; }
            .publico { background: #FFD700; color: #000; }
            .privado { background: #5A6B4F; color: white; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h2>✉️ Nova Mensagem - Loxias Apollo</h2>
            </div>
            <div class="content">
                <div class="field">
                    <span class="label">Data:</span> ' . date('d/m/Y H:i:s') . '
                </div>
                <div class="field">
                    <span class="label">Nome:</span> ' . htmlspecialchars($nome) . '
                </div>
                <div class="field">
                    <span class="label">Email:</span> ' . htmlspecialchars($email) . '
                </div>
                <div class="field">
                    <span class="label">Assunto:</span> ' . htmlspecialchars($assunto) . '
                </div>
                <div class="field">
                    <span class="label">Tipo:</span> 
                    <span class="badge ' . ($visibilidade === 'publico' ? 'publico' : 'privado') . '">
                        ' . ($visibilidade === 'publico' ? 'Público' : 'Privado') . '
                    </span>
                </div>
                <div class="field" style="border: none;">
                    <div style="font-weight: bold; color: #5A6B4F; margin-bottom: 10px;">Mensagem:</div>
                    <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #5A6B4F;">
                        ' . nl2br(htmlspecialchars($mensagem)) . '
                    </div>
                </div>
            </div>
            <div class="footer">
                📍 Enviado através do formulário de contato do site Loxias Apollo
            </div>
        </div>
    </body>
    </html>';
    
    // Versão texto para clientes que não suportam HTML
    $mail->AltBody = "NOVA MENSAGEM - LOXIAS APOLLO\n" .
                     "====================\n" .
                     "Nome: $nome\n" .
                     "Email: $email\n" .
                     "Assunto: $assunto\n" .
                     "Tipo: " . ($visibilidade === 'publico' ? 'Público' : 'Privado') . "\n" .
                     "Data: " . date('d/m/Y H:i:s') . "\n\n" .
                     "MENSAGEM:\n" .
                     "$mensagem\n\n" .
                     "====================\n" .
                     "Enviado através do site Loxias Apollo";
    
    // ==============================================
    // ENVIAR O EMAIL
    // ==============================================
    if ($mail->send()) {
        
        // ==============================================
        // SALVAR NO LOG (BACKUP)
        // ==============================================
        $log_entry = sprintf(
            "[%s] %s <%s> | Assunto: %s | Tipo: %s\n",
            date('Y-m-d H:i:s'),
            $nome,
            $email,
            $assunto,
            $visibilidade
        );
        
        @file_put_contents('emails_log.txt', $log_entry, FILE_APPEND);
        
        // ==============================================
        // RETORNAR SUCESSO
        // ==============================================
        echo json_encode([
            'status' => 'success',
            'message' => '✅ Mensagem enviada com sucesso! ' .
                        ($visibilidade === 'publico' ? 
                         'A mensagem aparecerá no mural.' : 
                         'Mensagem privada enviada para a equipe.'),
            'visibilidade' => $visibilidade,
            'timestamp' => date('Y-m-d H:i:s')
        ]);
        
    } else {
        throw new Exception('Falha no envio pelo servidor SMTP');
    }
    
} catch (Exception $e) {
    // ==============================================
    // EM CASO DE ERRO
    // ==============================================
    error_log('ERRO PHPMailer: ' . $e->getMessage());
    
    echo json_encode([
        'status' => 'error',
        'message' => '❌ Erro ao enviar mensagem: ' . 
                    'O servidor de email está temporariamente indisponível. ' .
                    'Sua mensagem foi salva localmente e será processada em breve.',
        'error_detail' => 'SMTP Error: ' . $e->getMessage()
    ]);
}
?>