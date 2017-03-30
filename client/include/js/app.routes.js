angular.module('app').config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('/', {
            url: '/',
            templateUrl: '/js/todolist/todolist.template.html',
            controller: 'todolistCtrl'
        })
        .state('/material', {
            url: '/material',
            templateUrl: '/js/material/material.template.html',
            controller: 'MaterialCtrl'
        });
});