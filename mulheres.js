const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Viviane Ribeiro',
        imagem: 'https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png',
        minibio: 'Desenvolvedora Python'
    },
    {
        nome: 'Iana Chan',
        imagem: 'https://www.mmaglobal.com/files/styles/speaker/public/speakers/iana_chan.jpg?itok=vDkDgEoN',
        minibio: 'Fundadora da PrograMaria'
    },
    {
        nome: 'Nina da Hora',
        imagem: 'https://www.fundacaotelefonicavivo.org.br/wp-content/webp-express/webp-images/uploads/2022/11/10-ninadahora1200x628desktop.png.webp?x73735',
        minibio: 'Hacker antirracista'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)