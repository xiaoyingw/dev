controller.controller 'TodoCtrl',
    class TodoCtrl
        mode: 'view'
        constructor: (@API) -> 
            @get()
        get: -> 
            @API.Todo.get {}, (response) =>
                @todos = response.todos;
                return
            return
        addTodo: ->
            @mode = 'add'
            @new = {}
            return
        confirmAddTodo: ->
            @API.Todo.save {}, @new, (response) =>
                @todos.push(response.todo)
                @mode = 'view'
                return
            return
            

