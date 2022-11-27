// Business Logic for Tasks
function Task(name, description, priority, dueDate, isDone) {
  this.name = name;
  this.description = description;
  this.priority = priority;
  this.dueDate = dueDate;
  this.isDone = isDone;
}


// Business Logic for ToDoLists
function ToDoList() {
  this.tasks = [];
}

ToDoList.prototype.addTask = function (task) {
  this.tasks.push(task);
}

ToDoList.prototype.removeTask = function (index) {
  this.tasks.splice(index, 1);
  // Add functionality to return removed task
}

ToDoList.prototype.finishTask = function (index) {
  this.tasks[index].isDone = true;
}