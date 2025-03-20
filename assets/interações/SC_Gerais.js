document.addEventListener("DOMContentLoaded", function () {
    // Obtém a URL atual da página
    const urlAtual = window.location.pathname.split("/").pop();
  
    // Seleciona todos os links da navbar
    const menuLinks = document.querySelectorAll(".links");
  
    menuLinks.forEach(link => {
      // Se o href do link for igual ao nome do arquivo atual, adiciona a classe "ativo"
      if (link.getAttribute("href") === urlAtual) {
        link.classList.add("ativo");
      }
    });
  });
  