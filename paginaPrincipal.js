
let inputEmail = document.querySelector(".email")
let inputSenha = document.querySelector(".senha")
let buttonEnviar = document.querySelector(".enviarDados")


buttonEnviar.addEventListener("click", () => {
    VerificarCampo()
})

function VerificarCampo() {

    const validacao = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let valorEmail = inputEmail.value
    let valorSenha = inputSenha.value






    if (valorEmail === "" || !validacao.test(valorEmail)) {

        let divIcon = inputEmail.closest(".icon")

        divIcon.classList.add("ativo")

        setTimeout(() => {
            divIcon.classList.remove("ativo")
        }, 1000)



    }
    
  


    if (valorSenha === "") {
        let divIcon = inputSenha.closest(".icon")

        divIcon.classList.add("ativo")

        setTimeout(() => {
            divIcon.classList.remove("ativo")
        }, 1000)
    }

    
try{
    let DadosDoUsuario = JSON.parse(
    localStorage.getItem("usuarios")
) || [];


console.log(DadosDoUsuario[0].email)

if (DadosDoUsuario.length > 0) {

    if(valorEmail === DadosDoUsuario[0].email && valorSenha === DadosDoUsuario[0].senha){
        // window.open("paginaPrincipal.html", "_self");

        MostrarMensagem()
    }
    else {
        console.log("email e senha inválidos")
    }  
}

 

}
catch(erro) {
    console.error("Falha ao verificar login:", erro);
}
}


