window.addEventListener("load", function () {
  document.getElementById("addTodoInputField").focus();
  let button = document
    .getElementById("addTodoButton")
    .addEventListener("click", function (event) {
      event.preventDefault();
    });
});

//
function deleteTodo(element) {
  element.parentNode.parentNode.removeChild(element.parentNode);
  document.getElementById("addTodoInputField").focus();
}

function addToDo() {
  document.getElementById("addTodoInputField").focus();
  element = document.getElementById("addTodoInputField");
  if (element.value.length == 0) {
    alert("Please input an item before trying to add one!");
    return;
  }
  let elementlist = document.getElementById("todoList");
  let value = element.value;
  elementlist.insertAdjacentHTML(
    "beforeend",
    ` <li>${value} <button onclick="deleteTodo(this)">Delete</button></li>`
  );
}
