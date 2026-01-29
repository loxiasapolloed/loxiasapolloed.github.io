<?php
/**
 * ENVIAR_EMAIL.PHP - Loxias Apollo
 * Script de envio de e-mails do formulário de contato
 * Versão: 2.0 - Correção de sintaxe e SMTP
 */

// ============================================
// CONFIGURAÇÕES PRINCIPAIS
// ============================================

// E-mail que receberá as mensagens
$destinatario = "loxias.apollo.ed@gmail.com";

// Assunto padrão dos e-mails
$assunto_site = "Nova mensagem do site Loxias Apollo";

// Configuração de timezone
date_default_timezone_set('America/Sao_Paulo');

// ============================================
// VERIFICA SE O FORMULÁRIO FOI ENVIADO
// ============================================

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // ============================================
    // COLETA E VALIDA OS DADOS
    // ============================================
    
    // Sanitiza os dados de entrada
    $nome = isset($_POST['nome']) ? trim(htmlspecialchars($_POST['nome'])) : '';
    $email = isset($_POST['email']) ? trim(filter_var($_POST['email'], FILTER_SANITIZE_EMAIL)) : '';
    $assunto = isset($_POST['assunto']) ? trim(htmlspecialchars($_POST['assunto'])) : '';
    $visibilidade = isset($_POST['visibilidade']) ? trim(htmlspecialchars($_POST['visibilidade'])) : 'publico';
    $mensagem = isset($_POST['mensagem']) ? trim(htmlspecialchars($_POST['mensagem'])) : '';
    
    // Array para armazenar erros
    $erros = array();
    
    // Validações
    if (empty($nome)) {
        $erros[] = "O nome é obrigatório.";
    }
    
    if (empty($email)) {
        $erros[] = "O e-mail é obrigatório.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $erros[] = "Por favor, forneça um e-mail válido.";
    }
    
    if (empty($assunto)) {
        $erros[] = "Por favor, selecione um assunto.";
    }
    
    if (empty($mensagem)) {
        $erros[] = "A mensagem é obrigatória.";
    } elseif (strlen($mensagem) < 10) {
        $erros[] = "A mensagem deve ter pelo menos 10 caracteres.";
    }
    
    // ============================================
    // SE HOUVER ERROS, RETORNA PARA O FORMULÁRIO
    // ============================================
    
    if (!empty($erros)) {
        // Cria uma string com todos os erros
        $erros_str = implode("|", $erros);
        
        // Redireciona de volta ao formulário com os erros
        header('Location: contato.html?erro=' . urlencode($erros_str));
        exit;
    }
    
    // ============================================
    // PREPARA O CONTEÚDO DO E-MAIL
    // ============================================
    
    // Corpo do e-mail em HTML
    $corpo_html = '
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <style>
            body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                background-color: #f9f9f9;
                margin: 0;
                padding: 20px;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                background: white;
                border-radius: 8px;
                overflow: hidden;
                box-shadow: 0 0 10px rgba(0,0,0,0.1);
            }
            .header {
                background-color: #5A6B4F;
                color: #FFD700;
                padding: 20px;
                text-align: center;
            }
            .content {
                padding: 30px;
            }
            .field {
                margin-bottom: 15px;
                padding-bottom: 15px;
                border-bottom: 1px solid #eee;
            }
            .label {
                font-weight: bold;
                color: #5A6B4F;
                display: inline-block;
                width: 120px;
            }
            .mensagem-box {
                background-color: #f8f8f8;
                padding: 15px;
                border-left: 4px solid #A68A64;
                margin-top: 10px;
                border-radius: 4px;
            }
            .badge {
                display: inline-block;
                padding: 3px 10px;
                border-radius: 12px;
                font-size: 12px;
                margin-left: 10px;
            }
            .badge-public {
                background-color: #FFD700;
                color: #000;
            }
            .badge-private {
                background-color: #5A6B4F;
                color: white;
            }
            .footer {
                text-align: center;
                padding: 15px;
                background-color: #f5f5f5;
                color: #666;
                font-size: 12px;
                border-top: 1px solid #ddd;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1 style="margin: 0;">📚 Loxias Apollo</h1>
                <p style="margin: 5px 0 0; opacity: 0.9;">Editora Independente de Literatura</p>
            </div>
            
            <div class="content">
                <h2 style="color: #5A6B4F; margin-top: 0;">Nova Mensagem do Site</h2>
                
                <div class="field">
                    <span class="label">📅 Data/Hora:</span>
                    ' . date('d/m/Y H:i:s') . '
                </div>
                
                <div class="field">
                    <span class="label">👤 Nome:</span>
                    ' . $nome . '
                </div>
                
                <div class="field">
                    <span class="label">📧 E-mail:</span>
                    ' . $email . '
                </div>
                
                <div class="field">
                    <span class="label">🏷️ Assunto:</span>
                    ' . $assunto . '
                </div>
                
                <div class="field">
                    <span class="label">🔐 Visibilidade:</span>
                    <span class="badge ' . ($visibilidade == 'publico' ? 'badge-public' : 'badge-private') . '">
                        ' . ($visibilidade == 'publico' ? '🌍 Público' : '🔒 Privado') . '
                    </span>
                </div>
                
                <div class="field">
                    <span class="label">✉️ Mensagem:</span>
                    <div class="mensagem-box">
                        ' . nl2br($mensagem) . '
                    </div>
                </div>
            </div>
            
            <div class="footer">
                <p>📬 Esta mensagem foi enviada através do formulário de contato do site Loxias Apollo</p>
                <p>🌐 <a href="https://loxiasapollo.com.br" style="color: #5A6B4F;">loxiasapollo.com.br</a></p>
            </div>
        </div>
    </body>
    </html>
    ';
    
    // Versão texto simples (para clientes de e-mail que não suportam HTML)
    $corpo_texto = "NOVA MENSAGEM - LOXIAS APOLLO\n";
    $corpo_texto .= "===============================\n\n";
    $corpo_texto .= "Data/Hora: " . date('d/m/Y H:i:s') . "\n";
    $corpo_texto .= "Nome: " . $nome . "\n";
    $corpo_texto .= "E-mail: " . $email . "\n";
    $corpo_texto .= "Assunto: " . $assunto . "\n";
    $corpo_texto .= "Visibilidade: " . ($visibilidade == 'publico' ? 'Público' : 'Privado') . "\n\n";
    $corpo_texto .= "MENSAGEM:\n";
    $corpo_texto .= "---------\n";
    $corpo_texto .= $mensagem . "\n\n";
    $corpo_texto .= "---\n";
    $corpo_texto .= "Enviado através do formulário de contato do site Loxias Apollo\n";
    $corpo_texto .= "https://loxiasapollo.com.br\n";
    
    // ============================================
    // CONFIGURA OS CABEÇALHOS DO E-MAIL
    // ============================================
    
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "From: " . $nome . " <" . $email . ">\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();
    $headers .= "\r\n";
    $headers .= "X-Priority: 1 (Highest)\r\n";
    $headers .= "X-MSMail-Priority: High\r\n";
    $headers .= "Importance: High\r\n";
    
    // Assunto completo
    $assunto_completo = $assunto_site . " - " . $assunto;
    
    // ============================================
    // TENTA ENVIAR O E-MAIL
    // ============================================
    
    // Tenta enviar usando a função mail() do PHP
    $enviado = mail($destinatario, $assunto_completo, $corpo_html, $headers);
    
    // ============================================
    // REGISTRA LOG DO ENVIO (para debug)
    // ============================================
    
    $log_data = date('Y-m-d H:i:s') . " | ";
    $log_data .= "Nome: " . $nome . " | ";
    $log_data .= "Email: " . $email . " | ";
    $log_data .= "Assunto: " . $assunto . " | ";
    $log_data .= "Visibilidade: " . $visibilidade . " | ";
    $log_data .= "Enviado: " . ($enviado ? "SIM" : "NÃO") . "\n";
    
    // Salva o log em um arquivo
    file_put_contents('email_log.txt', $log_data, FILE_APPEND);
    
    // ============================================
    // REDIRECIONA CONFORME O RESULTADO
    // ============================================
    
    if ($enviado) {
        // Sucesso - redireciona para a página de confirmação
        header('Location: contato.html?enviado=sucesso');
        exit;
    } else {
        // Falha - tenta método alternativo
        header('Location: contato.html?erro=falha_envio&sugestao=contato_direto');
        exit;
    }
    
} else {
    // Se alguém acessar este arquivo diretamente sem enviar o formulário
    header('Location: contato.html');
    exit;
}

// ============================================
// FIM DO SCRIPT
// ============================================
?>