const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; 
const USERNAME_KEY = "username";

//2.
function onLoginSubmit(event){ 
    event.preventDefault();//event가 원래 하는 행동 멈추기(피이지 새로고침)
    loginForm.classList.add(HIDDEN_CLASSNAME);//form 다시 숨기기
    const username = loginInput.value;//userndame에 변수로 저장
    localStorage.setItem(USERNAME_KEY,username);//localStorage에 저장
    paintingGreetings(username);//함수 호출
}
    //3. 비어있는 h1요소 안에 텍스추가, hidden클래스명 제거
function paintingGreetings(username){ //form안에 input에 입력한 유저명
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
} 

//1.JS가 local storage확인 (작은DB같은 API)
const savedUSername = localStorage.getItem(USERNAME_KEY);

if (savedUSername === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else {
    //show the greetings
    paintingGreetings(savedUSername);
}
