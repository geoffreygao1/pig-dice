// Business Logic for Tasks
function Task(name, description, priority, dueDate, isDone) {
  this.name = name;
  this.description = description;
  this.priority = priority.toLowerCase();
  this.dueDate = new Date(dueDate); // date format : mm/dd/yyyy
  this.isDone = isDone;
}

Task.prototype.toString = function () {
  return this.name + " " + this.isDone;
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

ToDoList.prototype.reOpen = function (index) {
  this.tasks[index].isDone = false;
}

ToDoList.prototype.sortTasks = function (by) {
  this.tasks.sort(function (a, b) {
    if (a.priority === b.priority) {
      if (a[by] < b[by]) {
        return -1;
      } else if (b[by] < a[by]) {
        return 1;
      } else {
        return 0;
      }
    } else if (a.priority === "high") {
      return -1;
    } else {
      return 1;
    }
  });
}
