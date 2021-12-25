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
    todos = todos.filter(todo => todo.id !== parseInt(delete_li.id));
    saveTodo();
}

function paintTodo(newTodo) {
    const make_li = document.createElement("li");
    make_li.id = newTodo.id;
    const make_span = document.createElement("span");
    make_span.innerText = newTodo.text;
    const make_button1 = document.createElement("button");
    make_button1.id = 'FailButton';
    make_button1.innerText = "X"
    make_button1.addEventListener("click", deleteTodo);
    const make_button2 = document.createElement("button");
    make_button2.id = 'SuccessButton';
    make_button2.innerText = "👍";
    make_button2.addEventListener("click", deleteTodo);
    make_li.appendChild(make_span);
    make_li.appendChild(make_button1);
    make_li.appendChild(make_button2);
    todoList.appendChild(make_li);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id: Date.now()
    }
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
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
