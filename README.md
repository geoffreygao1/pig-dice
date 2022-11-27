Task(name, description, priority, dueDate, isDone)

Describe: Task().name
Test: Return the name of the task
Code: Task("test", _, _, _, _).name
Expected Output: "test"

Describe: Task().description
Test: Return the description of the task
Code: Task(_,"description", _, _, _).name
Expected Output: "description"

Describe: Task().priority
Test: Return the priority of the task
Code: Task(_, _,"priority", _, _).name
Expected Output: "priority"

Describe: Task().dueDate
Test: Return the due date of the task
Code: Task(_, _, _, "11/27/2022", _).name
Expected Output: ""11/27/2022""

Describe: Task().isDone
Test: Return the status of the task
Code: Task(_, _, _, _, false).name
Expected Output: false


ToDoList()

Describe: ToDoList().tasks
Test: Return an empty array of tasks
Code: ToDoList().name
Expected Output: []

Describe: ToDoList.prototype.addTask(Task)
Test: Adds a task to the ToDoList
Code: ToDoList().addTask(task1)
      ToDoList.tasks
Expected Output: [task1]

Describe: ToDoList.prototype.removeTask(index)
Test: Removes a task from the ToDoList
Code: ToDoList().removeTask(0)
      ToDoList.tasks
Expected Output: []

Describe: ToDoList.prototype.finishTask(index)
Test: Changes the isDone property of a task from the ToDoList
Code: ToDoList().isDone(0)
      ToDoList.tasks[0].isDone
Expected Output: true