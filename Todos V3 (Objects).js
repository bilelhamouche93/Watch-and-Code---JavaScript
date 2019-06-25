// Code goes here

var todoList = {
  
    todos: ["item 1", "item 2", "item 3"],
    
    display: function() {
      console.log("My Todos: ", this.todos);
    },
    
    add: function(todo) {
      this.todos.push(todo);
      this.display();
    },
    
    change: function(position, newValue) {
      this.todos[position] = newValue;
      this.display();
    },
  
    remove: function(position) {
      this.todos.splice(position, 1)
      this.display();
    }
  
  };