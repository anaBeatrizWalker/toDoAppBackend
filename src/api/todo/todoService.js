const Todo = require('./todo')

//Tudo o que será habilitado na API Rest
Todo.methods(['get', 'post', 'put', 'delete'])

//Quando atualizar alguma informação, (new) retorna o registro atualizado e (runVa..) valida e roda as atualizações
Todo.updateOptions({new: true, runValidators: true})

module.exports = Todo