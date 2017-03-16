angular.module('app').config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('/', '/test');
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('/test', {
            url: '/test',
            templateUrl: '/js/todolist/todolist.template.html',
            controller: 'todolistCtrl'
        });
});