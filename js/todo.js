const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

//toDo에 들어오는 텍스트를 배열로 묶어 보관하기 위해 빈array생성
// const toDos = []; //문제점: 새로고침 할 때 기존 toDo값이 사라짐
let toDos = []; 
const TODOS_KEY = "todos";

//2. toDo들을 저장
// local Storage는 문자열만 저장 가능 
//값은 String으로 저장할 수 있는 방법 JSON.stringify()
function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));//"[a,b,c,d]"
}

//버튼을 누르면 todolist삭제
function deleteToDo(event){
    const li = event.target.parentElement;//target은 클릭된 HTML element.✂
        //parentElement은 <li>, ✂의 부모!
    li.remove()
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));//클릭한 li.id와 다른 toDo.id는 남겨두고 싶다!
    // toDo.id의 타입은 number이기 때문에
    // console.log(typeof li.id); //String타입을 number로 바꿔줘야한다.=>parseInt()
    saveToDos();
}

//JS를 통해 HTML에 <li>,<span>태그 생성
//<li>안에 <span>넣기
//<span>안에 newToDo넣기
function paintToDo(newTodo){
    // console.log("I will paint",newTodo);
    const li = document.createElement("li");
    li.id = newTodo.id;
    // console.log(li.id);
    const span = document.createElement("span");
    // span.innerText = newTodo;
    span.innerText = newTodo.text; //object는 id와 text를 가지고 있기에..
    //모든것을 append하기전에 button생성
    const button = document.createElement("button");
    button.innerText = "✂"
    li.appendChild(span);
    li.appendChild(button);
    button.addEventListener("click", deleteToDo);
    toDoList.appendChild(li);//toDoList안에<li>넣기
    //여기까지의 문제점 1.todolist삭제못함 2.새로고침하면 없어짐
}

//1.
function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;//input의 현재 value를 새로운 변수에 복사
    toDoInput.value = ""; //newTodo랑 무관
    const newTodoObj = { //id를 부여해서 array에 push하기 =>object를 저장
        text: newTodo,
        id: Date.now()
    }
    // toDos.push(newTodo);
    toDos.push(newTodoObj);
    // paintToDo(newTodo);//화면에 toDo를 그려줌 =>String을 넣어줌
    paintToDo(newTodoObj);//id를 부여하기 위해 =>object를 넣어줌
    saveToDos();//toDos array를 localStorage에 집어넣기
    
}

//JS가 item을 기본으로 제공
//
// function sayHello(item){
//     console.log("This is the turn of",item);
// }
//같은 결과
// parsedToDos.forEach((item) => console.log("This is the turn of",item)); 

toDoForm.addEventListener("submit",handleToDoSubmit);
const savedToDos = localStorage.getItem(TODOS_KEY); //String

if(savedToDos !== null){
    //parse는 string을 array형태로 변환
    const parsedToDos = JSON.parse(savedToDos); //Array [a,b,c,d]
    toDos = parsedToDos;
    // parsedToDos.forEach(sayHello); //array에 있는 각각의 item에 대해서 1개의 함수만 실행
    // parsedToDos.forEach((item) => console.log("This is the turn of",item));//arrow function 코드가 더 간결
    // !!!! forEach함수는 paintToDo를 parsedToDos 배열의 요소마다 실행한다!!!
    parsedToDos.forEach(paintToDo); //새로고침해도 화면에 표시 but 추가하면 기존꺼는 사라짐
    //ex. [{"text":"hello","id":1655538914680}]
}

//지우고 싶은 item을 제외하는 것 => .filter
// false인 item을 제외하고 "새로운array생성"

// const todos = [{"text":"hello","id":1655538914680},{"text":"hah","id":1655540966990},{"text":"soso","id":1655540969467}]	
// undefined
// function sexyFilter(todo){return todo.id !== 1655538914680 }
// undefined
// todos.filter(sexyFilter)
// (2) [{…}, {…}]0: {text: 'hah', id: 1655540966990}1: {text: 'soso', id: 1655540969467}length: 2[[Prototype]]: Array(0)
// todos.filter(item => item.id !== 1655538914680 )
// (2) [{…}, {…}]
