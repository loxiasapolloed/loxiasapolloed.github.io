<?php
// Configurações do e-mail
$destinatario = "loxias.apollo.ed@gmail.com"; // E-mail que receberá as mensagens
$assunto_site = "Nova mensagem do site Loxias Apollo";

// Configurações do servidor
date_default_timezone_set('America/Sao_Paulo');

// Verifica se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Coleta e sanitiza os dados do formulário
    $nome = trim(filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_STRING));
    $email = trim(filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL));
    $assunto = trim(filter_input(INPUT_POST, 'assunto', FILTER_SANITIZE_STRING));
    $visibilidade = trim(filter_input(INPUT_POST, 'visibilidade', FILTER_SANITIZE_STRING));
    $mensagem = trim(filter_input(INPUT_POST, 'mensagem', FILTER_SANITIZE_STRING));
    
    // Validação básica
    $erros = [];
    
    if (empty($nome)) {
        $erros[] = "O nome é obrigatório.";
    }
    
    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $erros[] = "Por favor, forneça um e-mail válido.";
    }
    
    if (empty($assunto)) {
        $erros[] = "Por favor, selecione um assunto.";
    }
    
    if (empty($mensagem) || strlen($mensagem) < 10) {
        $erros[] = "A mensagem deve ter pelo menos 10 caracteres.";
    }
    
    // Se houver erros, retorna para o formulário com os erros
    if (!empty($erros)) {
        // Em um sistema mais completo, você salvaria os erros em sessão
        // e redirecionaria de volta com mensagens de erro
        header('Location: contato.html?erro=1');
        exit;
    }
    
    // Prepara o conteúdo do e-mail
    $corpo_email = "
    <html>
    <head>
        <title>Nova mensagem do site Loxias Apollo</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #5A6B4F; color: white; padding: 15px; text-align: center; }
            .content { padding: 20px; border: 1px solid #ddd; background-color: #f9f9f9; }
            .field { margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #eee; }
            .label { font-weight: bold; color: #5A6B4F; display: inline-block; width: 120px; }
            .visibilidade-publico { color: #FFD700; font-weight: bold; }
            .visibilidade-privado { color: #666; font-weight: bold; }
            .mensagem-box { background-color: white; padding: 15px; border: 1px solid #ddd; margin-top: 10px; border-radius: 4px; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h2>📚 Nova mensagem do site Loxias Apollo</h2>
            </div>
            <div class='content'>
                <div class='field'>
                    <span class='label'>Data/Hora:</span> " . date('d/m/Y H:i:s') . "
                </div>
                <div class='field'>
                    <span class='label'>Nome:</span> " . htmlspecialchars($nome) . "
                </div>
                <div class='field'>
                    <span class='label'>E-mail:</span> " . htmlspecialchars($email) . "
                </div>
                <div class='field'>
                    <span class='label'>Assunto:</span> " . htmlspecialchars($assunto) . "
                </div>
                <div class='field'>
                    <span class='label'>Visibilidade:</span> 
                    <span class='visibilidade-" . ($visibilidade == 'publico' ? 'publico' : 'privado') . "'>
                        " . ($visibilidade == 'publico' ? '🔓 Público (aparecerá no mural)' : '🔒 Privado') . "
                    </span>
                </div>
                <div class='field'>
                    <span class='label'>Mensagem:</span>
                    <div class='mensagem-box'>
                        " . nl2br(htmlspecialchars($mensagem)) . "
                    </div>
                </div>
                <div style='margin-top: 20px; padding-top: 20px; border-top: 2px solid #5A6B4F; text-align: center; color: #666; font-size: 0.9em;'>
                    Esta mensagem foi enviada através do formulário de contato do site Loxias Apollo.
                </div>
            </div>
        </div>
    </body>
    </html>
    ";
    
    // Cabeçalhos do e-mail
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "From: " . $nome . " <" . $email . ">\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();
    
    // Tenta enviar o e-mail
    if (mail($destinatario, $assunto_site . " - " . $assunto, $corpo_email, $headers)) {
        // Se enviar com sucesso, redireciona para a página de confirmação
        header('Location: contato.html?enviado=sucesso');
        exit;
    } else {
        // Se falhar, redireciona com mensagem de erro
        header('Location: contato.html?erro=2');
        exit;
    }
} else {
    // Se alguém acessar diretamente o arquivo PHP, redireciona para o formulário
    header('Location: contato.html');
    exit;
}
?>