
let email = document.querySelector(".CaixaEmail input")
let ButtonStart = document.querySelector(".Start button")
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

 let card = document.createElement("div");
        let p = document.createElement("p");

        card.classList.add("mensagemEmail");

        p.textContent = "Email já existe!";

        card.appendChild(p);

        document.body.appendChild(card);
setTimeout(()=>{
card.remove()
},3000)

       
    }

}