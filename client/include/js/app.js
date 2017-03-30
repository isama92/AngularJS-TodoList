angular.module('app', ['ui.router', 'ngMaterial'])
    .config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('indigo'
                /*, {
                                'default': '900',
                                'help': '50'
                            }*/
            )
            .accentPalette('green')
            .warnPalette('red')
            .backgroundPalette('grey');
    });