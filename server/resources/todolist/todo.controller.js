mongoose = require('mongoose');
var Todos = require('./todo.model.js');

module.exports = (function () {

    var getTodos = function (req, res) {
        Todos.find().exec()
            .then(function (data) {
                res.status(200).json(data);
            })
            .catch(function (err) {
                res.status(500).json(err);
            });
    }

    var deleteTodo = function (req, res) {
        Todos.findByIdAndRemove(req.params.id).exec()
            .then(function (data) {
                res.status(200).json(data);
            })
            .catch(function (err) {
                res.status(500).json(err);
            });
    }

    var updateTodo = function (req, res) {
        Todos.findByIdAndUpdate(req.params.id, req.body).exec()
            .then(function (data) {
                res.status(200).json(data);
            })
            .catch(function (err) {
                res.status(500).json(err);
            });
    }

    var addTodo = function (req, res) {
        var new_todo = new Todos(req.body);
        new_todo.save()
            .then(function (data) {
                res.status(200).json(data);
            })
            .catch(function (err) {
                res.status(500).json(err);
            });
    }

    var detailsTodo = function (req, res) {

    }

    return {
        getTodos: getTodos,
        deleteTodo: deleteTodo,
        updateTodo: updateTodo,
        addTodo: addTodo,
        detailsTodo: detailsTodo,
    }
})();