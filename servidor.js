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

app.listen(3000,() => {
    console.log("Servidor rodando na porta 3000");
}  )