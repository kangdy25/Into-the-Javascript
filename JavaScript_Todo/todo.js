const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector('.todo-list');
const TODOS_KEY = 'todo';

// 투두 목록 빈 배열로 초기화
let todoContent = [];

// 클릭 시 로컬스토리지에 입력한 데이터 저장 및 화면에 출력
todoButton.addEventListener("click", (e)=>{
    e.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text:newTodo,
    }
    // 배열에 새로운 투두 추가
    todoContent.push(newTodoObj);

    // 로컬스토리지에 배열 저장
    localStorage.setItem(TODOS_KEY, JSON.stringify(todoContent));

    // TO-DO 목록 레이아웃 생성 1 
    const todoDiv = document.createElement("div");
    todoDiv.className = 'list-content';
    const todoTitle = document.createElement("h3");
    todoTitle.innerText = newTodoObj.text
    const todoBtn = document.createElement("button");
    todoBtn.innerText = '삭제';
    todoBtn.className = 'delete-btn';
    todoList.appendChild(todoDiv);
    todoDiv.appendChild(todoTitle);
    todoDiv.appendChild(todoBtn);

    // 삭제 버튼에는 삭제 기능 추가
    todoBtn.addEventListener('click', deleteTODOLIST)
})

// 삭제 기능은 따로 함수로 만들기
function deleteTODOLIST(e) {
    const deleteItem = e.target.parentElement;
    deleteItem.remove();
    
    // 저장된 배열에서 삭제할 원소를 필터링한 후, 다시 로컬스토리지에 저장
    todoContent = todoContent.filter(todo => todo.text !== deleteItem.firstChild.innerText);
    localStorage.setItem(TODOS_KEY, JSON.stringify(todoContent));
}