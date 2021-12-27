const express = require('express')

module.exports = function(server){
    //API Routes
    const router = express.Router()
    server.use('/api', router)

    //TODO Routes
    const todoService = require('../api/todo/todoService')
    //Registra os métodos pra url's
    todoService.register(router, '/todos')
}