const todoList = document.getElementById("todo-list");
const inputForm = document.getElementById("input-wrapper");
const todoInput = document.getElementById("todo-input");

inputForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const input = todoInput.value;
  if (!input) {
    alert("Empty ToDo!");
    return;
  }
  try {
    await postTodo({ description: todoInput.value, done: false });
    todoInput.value = "";
    await refreshList();
  } catch (err) {
    alert(err);
  }
});

const refreshList = async () => {
  //clear list first
  emptyList();
  try {
    const result = await getTodos();
    result.forEach((todo) => {
      const li = document.createElement("li");
      const deleteLi = document.createElement("button");
      deleteLi.innerHTML = "delete";
      deleteLi.classList.add("delete-button");
      //delete button
      deleteLi.addEventListener("click", async (e) => {
        try {
          await deleteTodo(todo._id);
          await refreshList();
        } catch (err) {
          alert("Unable to delete ToDo!");
        }
      });
      li.innerHTML = todo.description;
      li.appendChild(deleteLi);
      todoList.appendChild(li);
    });
  } catch (err) {
    alert(err);
  }
};

const emptyList = () => {
  todoList.innerHTML = "";
};

refreshList();
