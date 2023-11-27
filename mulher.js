const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
  response.json({
     nome: 'Viviane Ribeiro',
     imagem: 'https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png',
     minibio:'Desenvolvedora Python'
  })

}
function mostraPorta() {
    console.log("Servidor criado e rodando", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)