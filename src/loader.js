//Arquivo que carrega os principais arquivos de configuração

const server = require('./config/server')
require('./config/database')
require('./config/routes')(server)