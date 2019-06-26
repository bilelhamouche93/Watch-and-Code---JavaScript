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
    this.todos.splice(position, 1);
  },
  
  toggleTodo: function(position) { // true or false
    this.todos[position].completed = !this.todos[position].completed;
  },

  toggleAllTodos: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;

    //Counting the completed Todos
    this.todos.forEach(function(todo) {
      if (todo.completed === true) {
        completedTodos++;       
      }  
    });
    
    this.todos.forEach(function(todo) {
      //Case 1: If everything is True make everything False
      if (completedTodos === totalTodos) {
        todo.completed = false;
      } else { //Case 2: Otherwise make everything True
        todo.completed = true;
      }
    });
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

    todoList.todos.forEach(function(todo, position) {
      var todoLi = document.createElement("li");
      var todoTextWithCompletion = '';
      if (todo.completed === true) {
        todoTextWithCompletion = '(X) ' + todo.todoText;
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText;
      }
      
      todoLi.id = position;
      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi);
    }, this) // Array.forEach(callback function, this) this: refers to "view" object here
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

