// Toggle do Menu Hamburguer
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Validação e envio do formulário de contato
const form = document.getElementById('contato-form');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Obtemos a resposta do reCAPTCHA
    const recaptchaResponse = grecaptcha.getResponse();
    if (recaptchaResponse.length === 0) {
      alert('Por favor, complete a verificação do reCAPTCHA.');
      return;
    }

    // Criação do objeto FormData com os dados do formulário
    const formData = new FormData(form);
    formData.append('recaptchaToken', recaptchaResponse); // Adiciona o token reCAPTCHA

    // Enviar os dados para o backend via fetch
    fetch('/api/submit-form', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'Formulário enviado com sucesso!') {
          alert('Obrigado pelo contato! Sua mensagem foi enviada.');
        } else {
          alert('Erro ao enviar o formulário.');
        }
      })
      .catch((error) => {
        console.error('Erro ao enviar o formulário:', error);
        alert('Erro ao enviar o formulário.');
      });

    // Resetando o formulário após o envio
    form.reset();
  });
}

