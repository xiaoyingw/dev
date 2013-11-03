(function() {
  var BlogCtrl, MainCtrl, TodoCtrl, api, controller, main;

  api = angular.module('api', ['ngResource']);

  api.factory('API', function($resource) {
    return {
      Todo: $resource('todo/:id'),
      Blog: $resource('blog/:id')
    };
  });

  controller = angular.module('controller', ['api']);

  controller.controller('MainCtrl', MainCtrl = (function() {
    function MainCtrl() {}

    MainCtrl.prototype.pages = [
      {
        title: 'Home',
        state: 'home',
        url: '#/'
      }, {
        title: 'Todo',
        state: 'todo',
        url: '#/Todo'
      }, {
        title: 'Blog',
        state: 'blog',
        url: '#/Blog'
      }
    ];

    return MainCtrl;

  })());

  controller.controller('BlogCtrl', BlogCtrl = (function() {
    function BlogCtrl(API) {
      this.API = API;
    }

    return BlogCtrl;

  })());

  controller.controller('TodoCtrl', TodoCtrl = (function() {
    TodoCtrl.prototype.mode = 'view';

    function TodoCtrl(API) {
      this.API = API;
      this.get();
    }

    TodoCtrl.prototype.get = function() {
      var _this = this;
      this.API.Todo.get({}, function(response) {
        _this.todos = response.todos;
      });
    };

    TodoCtrl.prototype.addTodo = function() {
      this.mode = 'add';
      this["new"] = {};
    };

    TodoCtrl.prototype.confirmAddTodo = function() {
      var _this = this;
      this.API.Todo.save({}, this["new"], function(response) {
        _this.todos.push(response.todo);
        _this.mode = 'view';
      });
    };

    return TodoCtrl;

  })());

  main = angular.module('main', ['ui.router', 'controller']);

  main.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/');
    $stateProvider.state('home', {
      url: '/',
      templateUrl: 'partials/index'
    }).state('blog', {
      url: '/Blog',
      templateUrl: 'partials/blog'
    }).state('todo', {
      url: '/Todo',
      templateUrl: 'partials/todo'
    });
  });

  main.run(function($rootScope, $state) {
    $rootScope.$state = $state;
  });

}).call(this);
