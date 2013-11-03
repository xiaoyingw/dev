main = angular.module 'main', ['ui.router', 'controller']

main.config ($stateProvider, $urlRouterProvider) -> 
    $urlRouterProvider.when('', '/');

    $stateProvider
        .state 'home',
                url: '/'
                templateUrl: 'partials/index'
        .state 'blog',
                url: '/Blog'
                templateUrl: 'partials/blog'
        .state 'todo', 
                url: '/Todo'
                templateUrl: 'partials/todo'
    return

main.run ($rootScope, $state) ->
    $rootScope.$state = $state
    return
