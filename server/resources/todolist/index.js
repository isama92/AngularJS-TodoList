var express = require('express');
var router = express.Router();
var path = require('path');
var Todos = require('./todo.controller.js');

router.get('/', Todos.getTodos);
router.delete('/:id([0-9a-fA-F]{24})', Todos.deleteTodo);
router.put('/:id([0-9a-fA-F]{24})', Todos.updateTodo);
router.post('/', Todos.addTodo);
router.get('/', Todos.detailsTodo);

module.exports = router;