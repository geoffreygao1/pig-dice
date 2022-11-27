// Business Logic for Tasks
function Task(name, description, priority, dueDate) {
  this.name = name;
  this.description = description;
  this.priority = priority.toLowerCase();
  this.dueDate = new Date(dueDate); // date format : mm/dd/yyyy
  this.isDone = false;
}

Task.prototype.toString = function () {
  return `${this.name}: ${this.description}, ${this.dueDate.toLocaleDateString()} Priority: ${this.priority}`;
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
}

ToDoList.prototype.finishTask = function (index) {
  this.tasks[index].isDone = true;
}

ToDoList.prototype.reOpen = function (index) {
  this.tasks[index].isDone = false;
}

ToDoList.prototype.toggle = function (index) {
  this.tasks[index].isDone = !this.tasks[index].isDone;
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


function buildList(list) {
  const incompleteOl = document.createElement("ol");
  const completeOl = document.createElement("ol");
  list.tasks.forEach(function (element, index) {
    let li = document.createElement("li");
    li.append(element.toString());

    let removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.id = index;
    removeButton.addEventListener("click", function () {
      removeTaskHandler(list, index)
    });
    li.append(removeButton);

    let completeButton = document.createElement("button");
    completeButton.id = index;
    completeButton.addEventListener("click", function () {
      toggleTaskHandler(list, index)
    });
    li.append(completeButton);
    if (element.isDone) {
      completeButton.innerText = "Reopen";
      completeOl.append(li);
    } else {
      completeButton.innerText = "Complete";
      incompleteOl.append(li);
    }
    ;
  })
  return [incompleteOl, completeOl]
}

function updateList(list) {
  const listArea = document.getElementById("toDoList");
  const completeArea = document.getElementById("completedTasks");
  listArea.innerHTML = "";
  completeArea.innerHTML = "";
  let [incompleteOl, completeOl] = buildList(list);
  listArea.append(incompleteOl);
  completeArea.append(completeOl);
}

function addTaskHandler(list) {
  event.preventDefault();
  const name = document.getElementById("inputName").value;
  const description = document.getElementById("inputDescription").value;
  const priorities = document.getElementById("priorities").value;
  const inputDate = document.getElementById("inputDate").value;
  const newTask = new Task(name, description, priorities, inputDate);
  list.addTask(newTask);
  updateList(list);
}

function removeTaskHandler(list, index) {
  list.removeTask(parseInt(index));
  updateList(list);
}

function toggleTaskHandler(list, index) {
  list.toggle(index);
  updateList(list);
}

function sortHandler(list) {
  event.preventDefault();
  const sortBy = document.getElementById("sortBy").value;
  console.log(sortBy);
  list.sortTasks(sortBy);
  console.log(list.tasks)
  updateList(list);
}

window.onload = function () {
  const toDoList = new ToDoList();
  const addForm = document.getElementById("taskInput");
  const sortForm = document.getElementById("sortForm");
  addForm.addEventListener("submit", function () {
    addTaskHandler(toDoList);
  });
  sortForm.addEventListener("submit", function () {
    sortHandler(toDoList);
  });
}