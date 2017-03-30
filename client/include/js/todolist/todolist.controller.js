angular.module('app').controller('todolistCtrl', function ($scope, $state, todolistSvc, $interval) {
    $scope.titolo = "Titolo della sezione";


    $interval(function () {
        console.log('test');
        $scope.todos = [];
        todolistSvc.getTodos().then(function (data) {
            $scope.todos = formatDate(data);
        });
    }, 500);

    $scope.addTodo = function () {
        todolistSvc.addTodo($scope.new_todo).then(function (data) {
            $scope.todos = formatDate(data);
        });
    }

    $scope.deleteTodo = function (id) {
        todolistSvc.deleteTodo(id).then(function (data) {
            $scope.todos = formatDate(data);
        });
    }

    $scope.updateDoneTodo = function (id) {
        for (todo of $scope.todos)
            if (todo._id == id)
                edit_todo = todo;
        todolistSvc.updateDoneTodo(id, edit_todo).then(function (data) {
            $scope.todos = formatDate(data);
        })
    }
});

function formatDate(todos) {
    for (todo of todos)
        todo.data = new Date(todo.data);
    return todos;
}