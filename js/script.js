// Toggle do Menu Hamburguer
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Validação e envio do formulário de contato
const form = document.getElementById('contato-form');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    // Aqui pode ser adicionado envio via AJAX ou integração com API
    alert('Obrigado pelo contato! Sua mensagem foi enviada.');
    form.reset();
  });
}
import { inject } from 'https://cdn.jsdelivr.net/npm/@vercel/analytics';
inject();


import { inject } from '@vercel/analytics';
import { inject } from 'https://unpkg.com/@vercel/analytics';
inject();


 inject();

