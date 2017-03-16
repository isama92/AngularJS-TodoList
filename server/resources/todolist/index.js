var express = require('express');
var router = express.Router();
var path = require('path');
var Todos = require('./todo.controller.js');

router.get('/', Todos.getTodos);
router.delete('/:id', Todos.deleteTodo);
router.put('/:id', Todos.updateTodo);
router.post('/', Todos.addTodo);
router.get('/', Todos.detailsTodo);

module.exports = router;