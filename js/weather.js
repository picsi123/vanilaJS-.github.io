
//1. 내 위치를 나타내는 서비스 사용
//2. 숫자들을 장소로 바꿔줄 서비스 사용(내가 있는 장소의 이름과 현재 날씨 받아오기)
//3. latitude,longitude,API Key와 함께 API를 부르기
const API_KEY = "61939bf0e2f34935807703ffd79f7f66";
function onGeoOk(position){//success 함수
    const lat = position.coords.latitude; 
    const lon = position.coords.longitude;
    // &units=metric => 화씨를 섭씨로 바꿈
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    //fetch는 promise다. promise는 시간이 조금 뒤에 일어난다. 당장X
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
            }); //실제로 url에 갈 필요 없이 JS가 대신 URL을 부른다

}

function onGeoError(){//error 함수
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);//내 위치 숫자로 나옴

