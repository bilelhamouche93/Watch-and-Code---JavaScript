var todoList = {
  
  todos: [],

  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  
  changeTodo: function(position, todoText) { // change text
    this.todos[position].todoText = todoText;
  },

  deleteTodo: function(position) {
    this.todos.splice(position, 1)
  },
  
  toggleTodo: function(position) { // true or false
    this.todos[position].completed = !this.todos[position].completed;
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
  }

};


// Refactoring
var handlers = {
  addTodo: function() {
    var addTodoTextInput = document.getElementById("addTodoTextInput"); 
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
  },

  changeTodo: function() {
    var changeTodoTextInput = document.getElementById("changeTodoTextInput");
    var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");    
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber - 1, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },

  deleteTodo: function () {
    var deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");    
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber - 1);
    deleteTodoPositionInput.value = '';    
    view.displayTodos();
  },

  toggleTodo: function () {
    var toggleTodoPositionInput = document.getElementById("toggleTodoPositionInput");    
    todoList.toggleTodo(toggleTodoPositionInput.valueAsNumber - 1);
    toggleTodoPositionInput.value = '';
    view.displayTodos();
    
  },

  toggleAllTodos: function() {
    todoList.toggleAllTodos();
    view.displayTodos();
  }
};

var view = {
  displayTodos: function() {
    var todosOl = document.querySelector("ol");
    todosOl.innerHTML = '';   // the html code inside the list tags ("ol")
    for (var i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement("li");
      var todo = todoList.todos[i];
      
      var todoTextWithCompletion = '';
      if (todo.completed === true) {
        todoTextWithCompletion = '(X) ' + todo.todoText;
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText;
      }
      
      todoLi.id = i;
      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton());
      todosOl.appendChild(todoLi);
    }
  },

  createDeleteButton: function() {
    var deleteButton = document.createElement("button");
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    deleteButton.style.marginLeft = '40px';
    return deleteButton; 
  }


};
