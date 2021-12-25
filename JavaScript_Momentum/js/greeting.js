const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME); // 로그인 숨기기
    const username = loginInput.value; // 입력값을 받음
    localStorage.setItem(USERNAME_KEY, username); // 저장
    paintGreetings(username); // 함수 실행 (글자 표시 함수)
}
function paintGreetings(username) {
    greeting.innerText = `God bless you!! ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME); // 숨김 해제
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}