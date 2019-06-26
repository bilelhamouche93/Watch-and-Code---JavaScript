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
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },

  deleteTodo: function (position) {
    todoList.deleteTodo(position);
    view.displayTodos();
  },

  toggleTodo: function () {
    var toggleTodoPositionInput = document.getElementById("toggleTodoPositionInput");    
    todoList.toggleTodo(toggleTodoPositionInput.valueAsNumber);
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
    var todosUl = document.querySelector("ul");
    todosUl.innerHTML = '';   // the html code inside the list tags ("ul")
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
      todosUl.appendChild(todoLi);
    }
  },

  createDeleteButton: function() {
    var deleteButton = document.createElement("button");
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    deleteButton.style.marginLeft = '40px';
    return deleteButton; 
  },

  setUpEventListeners: function () {
    var todosUl = document.querySelector('ul')
    todosUl.addEventListener('click', function(event) {
      var elementClicked = event.target;
      
      if (elementClicked.className === 'deleteButton') {
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
      }
    })

  }
};

view.setUpEventListeners();

// var todosOl = document.querySelector('ol')
// todosOl.addEventListener('click', function(event) {
//   var elementClicked = event.target;
  
//   if (elementClicked.className === 'deleteButton') {
//     handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
//   }

// })