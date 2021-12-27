//Arquivo de configuração relativo ao express
const port = 3003
const bodyParser = require('body-parser')
const express = require('express')
const server = express()

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.listen(port, function(){
    console.log(`BACKEND FUNCIONANDO NA PORTA ${port}`)
})

module.exports = server