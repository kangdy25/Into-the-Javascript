const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let todos = [];

function saveTodo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
    const delete_li = event.target.parentElement;
    delete_li.remove();
}

function paintTodo(newTodo) {
    const make_li = document.createElement("li");
    const make_span = document.createElement("span");
    make_span.innerText = newTodo;
    const make_button = document.createElement("button");
    make_button.innerText = "❌"
    make_button.addEventListener("click", deleteTodo)
    make_li.appendChild(make_span);
    make_li.appendChild(make_button);
    todoList.appendChild(make_li);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    todos.push(newTodo);
    paintTodo(newTodo);
    saveTodo();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

console.log(savedTodos)
if(savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}