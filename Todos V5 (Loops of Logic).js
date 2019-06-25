// Code goes here

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
  
  toggleCompleted: function(position) { // true or false
    this.todos[position].completed = !this.todos[position].completed;
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
todoList.toggleCompleted(0);

console.log('---------Toggle the completed first item again:');
todoList.toggleCompleted(0);
