controller = angular.module 'controller', ['api']
controller.controller 'MainCtrl', 
    class MainCtrl
        pages: [
            title: 'Home' 
            state: 'home' 
            url: '#/'
        ,
            title: 'Todo' 
            state: 'todo' 
            url: '#/Todo'
        ,
            title: 'Blog'
            state: 'blog'
            url: '#/Blog'
        ]

