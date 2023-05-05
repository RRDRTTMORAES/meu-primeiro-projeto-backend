const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
response.json({
    nome: 'Rute Moraes',
    imagem:'C:\Users\RRMfr\Pictures\IMG-20220206-WA0022.jpg',
    minibio:'Desenvolvedora'
})
}

function mostraPorta() {
    console.log("Servidor criado e rodando", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)
