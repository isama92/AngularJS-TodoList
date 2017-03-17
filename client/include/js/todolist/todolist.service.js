angular.module('app').service('todolistSvc', function ($http) {

    const PORT = 3000;
    var root = 'http://localhost:' + PORT;

    var getTodos = function () {
        return $http({
            method: 'GET',
            url: root + '/api/todolist',
        }).then(function (res) {
            return res.data;
        }).catch(function (err) {
            return err;
        });
    }

    var getTodo = function () {

    }

    var updateTodo = function () {

    }

    var deleteTodo = function (id) {
        return $http({
            method: 'DELETE',
            url: root + '/api/todolist/' + id,
        }).then(function (res) {
            return res.data;
        }).catch(function (err) {
            return err;
        });
    }

    var addTodo = function (new_todo) {
        return $http({
            method: 'POST',
            url: root + '/api/todolist',
            data: new_todo
        }).then(function (res) {
            return res.data;
        }).catch(function (err) {
            return err;
        });
    }

    var updateDoneTodo = function (id, edit_todo) {
        return $http({
            method: 'PUT',
            url: root + '/api/todolist/' + id,
            data: edit_todo
        }).then(function (res) {
            return res.data;
        }).catch(function (err) {
            return err;
        });
    }

    return {
        getTodos: getTodos,
        getTodo: getTodo,
        updateTodo: updateTodo,
        deleteTodo: deleteTodo,
        addTodo: addTodo,
        updateDoneTodo: updateDoneTodo,
    }
});