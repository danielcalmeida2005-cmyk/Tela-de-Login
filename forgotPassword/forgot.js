
let email = document.querySelector(".CaixaEmail input")
let ButtonStart = document.querySelector(".Start button")
let inputs = document.querySelector(".Inputs")
let DadosDoUsuario = JSON.parse(
    localStorage.getItem("usuarios")
) || [];

console.log(DadosDoUsuario)

ButtonStart.addEventListener("click", () => {
    verificarEmail()
})


function verificarEmail() {
   let valorEmail = email.value 

    if (valorEmail === DadosDoUsuario[0].email) {
criainputSenha()
     }

     else{
        let mensagemErro = document.createElement("p");
        mensagemErro.textContent = "Email não encontrado";
        mensagemErro.style.color = "red";
        inputs.appendChild(mensagemErro);
        return;
     }
    }
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

