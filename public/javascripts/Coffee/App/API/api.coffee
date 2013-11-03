api = angular.module 'api', ['ngResource']

api.factory 'API', ($resource) ->
    Todo: $resource 'todo/:id'
    Blog: $resource 'blog/:id'
