
let email = document.querySelector(".CaixaEmail input")
let ButtonStart = document.querySelector(".Start button")
let inputs = document.querySelector(".Inputs")
// let DadosDoUsuario = JSON.parse(
//     localStorage.getItem("usuarios")
// ) || [];

// console.log(DadosDoUsuario)
let etapa = 1
ButtonStart.addEventListener("click", () => {
      if (etapa === 1) {
        recuperaSenha();
    } else {
        enviarNovaSenha();
    }
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

    if (document.querySelector(".ContainerSenha")) {
        return;
    }


    // Montando a estrutura
    inputs.appendChild(containerSenha);
    caixaSenha.appendChild(inputSenha);
    icon.appendChild(iconeSenha);
    icon.appendChild(caixaSenha);
    containerSenha.appendChild(icon);


}
let emailRecuperacao = "";
async function recuperaSenha() {

    
    let VerificaEmail = email.value

    let resposta = await fetch("https://tela-de-login-hsj6.onrender.com/verificarEmail", {

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

   
if (dados.sucesso) {
     emailRecuperacao = email.value;
    criainputSenha();
    etapa = 2;
}
  
 
    else {
        let mensagemErro = document.createElement("p");
        mensagemErro.textContent = "Email não encontrado";
        mensagemErro.style.color = "red";
        inputs.appendChild(mensagemErro);
    }
}






 async function  enviarNovaSenha(){
 
    const requisicao = await fetch('https://tela-de-login-hsj6.onrender.com/recuperaSenha',{
        method:"POST",
        headers:{
    "Content-Type": "application/json"
},
        body: JSON.stringify({
          email:emailRecuperacao,
          senha: inputSenha.value
        }) 
   });
    let resposta = await requisicao.json()


    if (resposta.sucesso) {
        window.location.href = "./telaDeLogin.html";
    }
}