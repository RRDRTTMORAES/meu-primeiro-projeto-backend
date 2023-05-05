const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Rute Moraes',
        imagem:'C:\Users\RRMfr\Pictures\IMG-20220206-WA0022.jpg',
        minibio:'Desenvolvedora'
    },
    {
        nome:'Iana Chain',
        imagem: 'https://bit.ly/3JCXBqP',
        minibio:'Fundadora da Programaria'
    },
    {
        nome:'Nina da Hora',
        imagem:'https://bit.ly/3FKpFAZ',
        minibio:'Hacker antirracista'
    }
]

function mostraMulheres(resquest, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando", porta)
}
app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)