var todoList = {
  
  todos: [],
  
  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log('Your todo list is empty!');
    } else {
      console.log('My todos: ');
      for (var i = 0; i < this.todos.length; i++) {        
        if (this.todos[i].completed === true) {
          console.log('(x)', this.todos[i].todoText);
        } else {
          console.log('( )', this.todos[i].todoText);
        }
      }  
    }    
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
  
  toggleTodo: function(position) { // true or false
    this.todos[position].completed = !this.todos[position].completed;
    this.displayTodos();
  },

  toggleAllTodos: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;

    // Get number of completed todos
    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;       
      } 
    }

    // Case 1: If everything is True make everything False 
    if (completedTodos === totalTodos) {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = !this.todos[i].completed;
      }      
    } else { // Case 2: Otherwise make everything True
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }      
    }

    this.displayTodos();
  }

};


// Debugging

console.log('---------Empty list: ');
todoList.displayTodos();

console.log('---------Adding two items: ');

todoList.addTodo('Item 1');
todoList.addTodo('Item 2');

console.log('---------Complete the first item:');
todoList.toggleTodo(0);

console.log('---------Complete the second item:');
todoList.toggleTodo(1);


console.log('---------Toggle All:');
todoList.toggleAllTodos();


console.log('---------Complete the first item again:');
todoList.toggleTodo(0);


console.log('---------Complete them all:');
todoList.toggleAllTodos();
