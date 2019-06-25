// Code goes here

var todoList = {
  
    todos: [],
    
    displayTodos: function() {
      console.log("My Todos: ", this.todos);
    },
    
    addTodo: function(todoText) {
      this.todos.push({
        todoText: todoText,
        completed: false
      });
      this.displayTodos();
    },
    
    changeTodo: function(position, todoText) { // change text
      this.todos[position].todoText = todoText;
      this.displayTodos();
    },
  
    deleteTodo: function(position) {
      this.todos.splice(position, 1)
      this.displayTodos();
    },
    
    toggleCompleted: function(position) { // true or false
      this.todos[position].completed = !this.todos[position].completed;
      this.displayTodos();
    },
  
  };