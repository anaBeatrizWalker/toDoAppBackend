//Criando um middleware

module.exports = function(req, res, next) {
    //Adicionando cabeçalhos nas respostas que serão enviadas pro browser pra dizer que é permitida acessar o serviço solicitado
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')

    //Continua o fluxo da aplicação, indo para o próximo middleware
    next()
}