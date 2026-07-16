let submit = document.getElementById("todo-form");
let todoList = document.getElementById("todo-list");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function showTask(todoText) {
  let listItem = document.createElement("li");
  listItem.classList.add("todo-item"); 
  let span = document.createElement("span");
  span.textContent = todoText;
  listItem.appendChild(span);

  let deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-btn");
  deleteButton.textContent = "Delete";
  listItem.appendChild(deleteButton);

  listItem.addEventListener("click", () => {
    span.classList.toggle("completed");
  });

  deleteButton.addEventListener("click", function () {
    listItem.remove();
    todos = todos.filter((todo) => todo !== todoText);

    localStorage.setItem("todos", JSON.stringify(todos));
  });

  todoList.appendChild(listItem);
}

todos.forEach(showTask);

submit.addEventListener("click", function () {
  let todoInput = document.getElementById("todo-input");
  let todoText = todoInput.value.trim();

  if (todoText !== "") {
    showTask(todoText);
    todos.push(todoText);

    localStorage.setItem("todos", JSON.stringify(todos));

    todoInput.value = "";
  }

 
});