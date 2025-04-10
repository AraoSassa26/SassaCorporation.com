import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Obtém os dados do formulário e o token do reCAPTCHA
    const { nome, email, mensagem, recaptchaToken } = req.body;

    // Sua chave secreta do reCAPTCHA
    const secretKey = '6Ld7NRIrAAAAAEt0DxsScYov06hiC4EB9-TuAx_F';

    // Verificação do reCAPTCHA com o Google
    const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      body: new URLSearchParams({
        secret: secretKey,
        response: recaptchaToken, // O token do reCAPTCHA
      }),
    });

    const data = await recaptchaResponse.json();

    // Se a verificação falhar
    if (!data.success) {
      return res.status(400).json({ message: 'Falha na verificação do reCAPTCHA' });
    }

    // Processar o envio do formulário (ex: enviar e-mail ou salvar no banco de dados)
    // Aqui você pode adicionar sua lógica de envio de email ou armazenar os dados

    // Resposta de sucesso
    res.status(200).json({ message: 'Formulário enviado com sucesso!' });
  } else {
    // Caso o método HTTP não seja POST
    res.status(405).json({ message: 'Método não permitido' });
  }
}
