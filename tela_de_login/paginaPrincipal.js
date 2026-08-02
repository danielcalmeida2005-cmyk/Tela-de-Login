let inputEmail = document.querySelector(".email");
let inputSenha = document.querySelector(".senha");
let buttonEnviar = document.querySelector(".enviarDados");

buttonEnviar.addEventListener("click", () => {

    const validacao = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let valorEmail = inputEmail.value;
    let valorSenha = inputSenha.value;


    if (valorEmail === "" || !validacao.test(valorEmail)) {

        let divIcon = inputEmail.closest(".icon");

        divIcon.classList.add("ativo");

        setTimeout(() => {
            divIcon.classList.remove("ativo");
        }, 1000);

        return;
    }


    if (valorSenha === "") {

        let divIcon = inputSenha.closest(".icon");

        divIcon.classList.add("ativo");

        setTimeout(() => {
            divIcon.classList.remove("ativo");
        }, 1000);

        return;
    }


    verificarLogin(valorEmail, valorSenha);

});


async function verificarLogin(email, senha) {

    try {

        let dados = await fetch("https://tela-de-login-hsj6.onrender.com/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                senha: senha
            })
        });

        console.log(dados)
        let resposta = await dados.json();
        console.log(resposta)
        
        if (resposta.sucesso) {
            let mensagem = document.createElement("div");
            mensagem.className = "MensagemSucesso";

            let texto = document.createElement("p");
            texto.textContent = "Seus dados foram validados com sucesso!";
            mensagem.appendChild(texto);

            document.body.appendChild(mensagem);

        } else {
            let mensagem = document.createElement("div");
            mensagem.className = "MensagemErro";

            let texto = document.createElement("p");
            texto.textContent = "Email ou senha inválidos.";

            mensagem.appendChild(texto);

            document.body.appendChild(mensagem);
        }

    } catch (erro) {

        console.error("Falha ao verificar login:", erro);

    }

}