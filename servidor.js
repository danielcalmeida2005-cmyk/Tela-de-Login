const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

let usuarios = [];
let id = 1;

app.post('/usuarios', (req, res) => {

console.log(req.body);
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


app.post('/senha',(req,res)=>{
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


const port = process.env.PORT || 3000;
app.listen(port,() => {
    console.log(`Servidor rodando na porta ${port}`);
}  )