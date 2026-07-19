let email = document.querySelector(".CaixaEmail input")
let password = document.querySelector(".CaixaSenha input")
let ConfirmPass = document.querySelector(".ConfirmSenha input")
let buttonStart = document.querySelector(".Start button")
const validacao = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



buttonStart.addEventListener("click",()=>{
  ValidacaoDeDados()  
})
function ValidacaoDeDados(){
 let DadosDoUsuario = []
   

    let valueEmail = email.value;
    let valuepassword = password.value;
    let valueConfirmPass = ConfirmPass.value;

    if(valueEmail === "" || !validacao.test(valueEmail) ){
        let divIcon = email.closest(".icon");

        divIcon.classList.add("ativo");

        setTimeout(() => {
            divIcon.classList.remove("ativo");
        }, 1000);

        return;
    }




    if(valuepassword === ""){
        console.log("Senha vazia");

         let divIcon = password.closest(".icon");

        divIcon.classList.add("ativo");

        setTimeout(() => {
            divIcon.classList.remove("ativo");
        }, 1000);
        return;
    }


    if(valuepassword !== valueConfirmPass){
        console.log("Senhas diferentes")

         let divIcon = ConfirmPass.closest(".icon");

        divIcon.classList.add("ativo");

        setTimeout(() => {
            divIcon.classList.remove("ativo");
        }, 1000);
        return;
    }


    
   DadosDoUsuario.push({
        email: valueEmail,
        senha: valuepassword
    });

    

    localStorage.setItem(
    "usuarios",
    JSON.stringify(DadosDoUsuario)
);
console.log(DadosDoUsuario)
MostrarMensagem()
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
