
let email = document.querySelector(".CaixaEmail input")
let ButtonStart = document.querySelector(".Start button")
let inputs = document.querySelector(".Inputs")
// let DadosDoUsuario = JSON.parse(
//     localStorage.getItem("usuarios")
// ) || [];

// console.log(DadosDoUsuario)

ButtonStart.addEventListener("click", () => {
    recuperaSenha()
})





let containerSenha = document.createElement("div");
containerSenha.className = "ContainerSenha";

let icon = document.createElement("div");
icon.className = "icon";

let iconeSenha = document.createElement("i");
iconeSenha.className = "fa-solid fa-lock";

let caixaSenha = document.createElement("div");
caixaSenha.className = "CaixaSenha";

let inputSenha = document.createElement("input");
inputSenha.type = "password";
inputSenha.placeholder = "Digite sua nova senha";


function criainputSenha() {

    containerSenha.innerHTML = "";
    DadosDoUsuario[0].senha = inputSenha.value;
    console.log(DadosDoUsuario[0].senha)


    // Montando a estrutura
    inputs.appendChild(containerSenha);
    caixaSenha.appendChild(inputSenha);
    icon.appendChild(iconeSenha);
    icon.appendChild(caixaSenha);
    containerSenha.appendChild(icon);


}

async function recuperaSenha() {
    let VerificaEmail = email.value

    let resposta = await fetch("https://tela-de-login-hsj6.onrender.com/senha", {

        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: VerificaEmail
        }
        )

    })

    let dados = await resposta.json()

    console.log(dados)

    if (dados.sucesso) {
        criainputSenha()
    }

    else {
        let mensagemErro = document.createElement("p");
        mensagemErro.textContent = "Email não encontrado";
        mensagemErro.style.color = "red";
        inputs.appendChild(mensagemErro);
    }
}
