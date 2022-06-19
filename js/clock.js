const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date(); //현재 날짜,시간을 알려줌 
    const hours = String(date.getHours()).padStart(2,"0");//number타입->String변환
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const Seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${Seconds}`;

}

getClock(); //바로 실행(한번만)
setInterval(getClock , 1000); //실시간으로 느껴짐(1초마다 반복)

// setInterval(sayHello, 1000); 1초후에 나타나고 1초마다 반복
// setTimeout(sayHello, 1000); 1초 후에 나타나고 1번만 실행
// padStart(2,"0"); String을 보다 길게 만들어야할때 사용,String앞쪽에 문자를 채워넣음