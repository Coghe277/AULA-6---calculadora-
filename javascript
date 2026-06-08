// Seleciona o formulário pelo ID
const formulario = document.getElementById("meuFormulario");
const mensagemDiv = document.getElementById("mensagem");

// Adiciona o evento de submit ao formulário
formulario.addEventListener("submit", function(event) {
    // Limpa mensagens anteriores
    mensagemDiv.innerHTML = "";
    mensagemDiv.className = "";

    // Captura os valores dos campos e remove espaços extras
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const idade = parseInt(document.getElementById("idade").value, 10);

    // Array para armazenar os erros encontrados
    let erros = [];

    // Validação do Nome: não pode estar vazio
    if (nome === "") {
        erros.push("O campo Nome não pode estar vazio.");
    }

    // Validação do Email: deve conter "@"
    if (!email.includes("@")) {
        erros.push("O Email inserido deve ser válido (conter '@').");
    }

    // Validação da Idade: deve ser maior que 0 e um número válido
    if (isNaN(idade) || idade <= 0) {
        erros.push("A Idade deve ser um número maior que 0.");
    }

    // Verifica se existem erros
    if (erros.length > 0) {
        // Impede o envio do formulário
        event.preventDefault();

        // Exibe os erros na tela
        mensagemDiv.className = "error";
        mensagemDiv.innerHTML = erros.join("<br>");
    } else {
        // Opcional: Se tudo estiver correto, exibe mensagem de sucesso
        // Remova ou comente a linha abaixo caso queira que o formulário recarregue a página nativamente no sucesso
        event.preventDefault(); 
        
        mensagemDiv.className = "success";
        mensagemDiv.innerHTML = "Formulário validado e enviado com sucesso!";
        formulario.reset(); // Limpa os campos do formulário
    }
});
