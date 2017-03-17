angular.module('app').controller('todolistCtrl', function ($scope, $state, todolistSvc) {
    $scope.titolo = "Titolo della sezione";

    $scope.todos = [];
    todolistSvc.getTodos().then(function (data) {
        $scope.todos = data;
    });

    $scope.addTodo = function () {
        todolistSvc.addTodo($scope.new_todo).then(function (data) {
            $scope.todos = data;
        });
    }

    $scope.deleteTodo = function (id) {
        todolistSvc.deleteTodo(id).then(function (data) {
            $scope.todos = data;
        });
    }

    $scope.updateDoneTodo = function (id) {
        for (todo of $scope.todos)
            if (todo._id == id)
                edit_todo = todo;
        todolistSvc.updateDoneTodo(id, edit_todo).then(function (data) {
            $scope.todos = data;
        })
    }
});