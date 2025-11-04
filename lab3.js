
class Task {
  constructor(description) {
    this.description = description;
    this.completed = false;
  }
}


let tasks = [];


const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
  const description = taskInput.value.trim();
  if (description) {
    const task = new Task(description);
    tasks.push(task);
    Tasks();
    taskInput.value = "";
  }
});


function Tasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    const textSpan = document.createElement("span");
    textSpan.textContent = task.description;
    if (task.completed) {
      textSpan.classList.add("completed");
    }


    if (!task.completed) {
      const completeBtn = document.createElement("button");
      completeBtn.textContent = "Complete";
      completeBtn.classList.add("complete-btn");
      completeBtn.addEventListener("click", () => {
        task.completed = true;
        Tasks();
      });
      li.appendChild(completeBtn);
    }


    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => {
      tasks.splice(index, 1);
      Tasks();
    });

    li.appendChild(textSpan);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}
