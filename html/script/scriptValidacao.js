document
  .getElementById("duvidaForm")
  .addEventListener("submit", function (event) {
    let validacao = true;

    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const duvida = document.getElementById("duvida");

    const nomeError = document.getElementById("nomeError");
    const emailError = document.getElementById("emailError");
    const duvidaError = document.getElementById("duvidaError");

    // Validação do nome
    if (nome.value.trim() === "") {
      nomeError.style.display = "block";
      validacao = false;
    } else {
      nomeError.style.display = "none";
    }

    // Validação do e-mail
    const emailValidacao = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailValidacao.test(email.value)) {
      emailError.style.display = "block";
      validacao = false;
    } else {
      emailError.style.display = "none";
    }

    // Validação da dúvida
    if (duvida.value.trim() === "") {
      duvidaError.style.display = "block";
      validacao = false;
    } else {
      duvidaError.style.display = "none";
    }

    // Se alguma validação falhar
    if (!validacao) {
      event.preventDefault();
    }
  });
