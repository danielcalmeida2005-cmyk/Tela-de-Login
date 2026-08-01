let email = document.querySelector(".CaixaEmail input")
let password = document.querySelector(".CaixaSenha input")
let ConfirmPass = document.querySelector(".ConfirmSenha input")
let buttonStart = document.querySelector(".Start button")
const validacao = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



buttonStart.addEventListener("click",()=>{

    if(ValidacaoDeDados()){
        enviarDados();
    }

});

function ValidacaoDeDados(){

    let valueEmail = email.value;
    let valuepassword = password.value;
    let valueConfirmPass = ConfirmPass.value;

    if(valueEmail === "" || !validacao.test(valueEmail)){
        return false;
    }

    if(valuepassword === ""){
        return false;
    }

    if(valuepassword !== valueConfirmPass){
        return false;
    }

    MostrarMensagem();
    return true;
}


function MostrarMensagem() {

    let card = document.createElement("div");
    let titulo = document.createElement("h2");
    let mensagem = document.createElement("p");

    titulo.textContent = "Cadastro realizado!";
    mensagem.textContent = "Seus dados foram salvos com sucesso.";

    card.appendChild(titulo);
    card.appendChild(mensagem);

    card.classList.add("cardSucesso");

    document.body.appendChild(card);


    setTimeout(() => {
        card.remove();
    }, 3000);
}



async function enviarDados() {

    const dadosdousuario = {
        email: email.value,
        senha: password.value
    };

    const resposta = await fetch("http://localhost:3000/usuarios", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosdousuario)
    });

    const dados = await resposta.json();

    console.log(dados);
      setTimeout(()=>{
window.location.href = '../tela_de_login/telaDelogin.html';
        },3000)
    
    }