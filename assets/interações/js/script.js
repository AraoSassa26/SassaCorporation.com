document.getElementById("contatoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o recarregamento da página

    // Exibe a mensagem de sucesso
    let msg = document.getElementById("mensagem");
    msg.style.display = "block";
    msg.style.color = "green";

    // Limpa o formulário
    this.reset();

    // Esconde a mensagem após 3 segundos
    setTimeout(() => {
        msg.style.display = "none";
    }, 3000);
});
