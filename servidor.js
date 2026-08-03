const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

let usuarios = [];
let id = 1;

// createAccount.js
app.post('/usuarios', (req, res) => {


    const { email, senha } = req.body;

    const novoUsuario = {
        id: id++,
        email,
        senha,
        criadoEm: new Date().toISOString()
    };

    usuarios.push(novoUsuario);

    res.status(201).json(novoUsuario);
});

// paginaprincipal.js
app.post('/login', (req, res) => {
const { email,senha} = req.body;
console.log(req.body)

 const usuario = usuarios.find(user => user.email === email && user.senha === senha );
  
     if (usuario) {
        return res.json({
            sucesso: true,
            mensagem: "Login realizado"
        });
    }

    return res.json({
        sucesso: false,
        mensagem: "Email ou senha inválidos"
    });

});

// forgot.js
app.post('/verificarEmail',(req,res)=>{
const {email} = req.body


 const usuario = usuarios.find(user => user.email === email);
  
     if (usuario) {
        return res.json({
            sucesso: true,
           
        });
    }

    return res.json({
        sucesso: false,
       
    });


})


// forgot.js
app.post('/recuperaSenha',(req,res)=>{
const {email,senha} = req.body

let usuario = usuarios.find(item =>
    item.email === email
)

if(usuario){
usuario.senha = senha;
}


})


const port = process.env.PORT || 3000;
app.listen(port,() => {
    console.log(`Servidor rodando na porta ${port}`);
}  )