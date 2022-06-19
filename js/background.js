//JS에서 이미지를 만들고 html에 추가
const images = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
//밑에 코드 3줄 => HTML에서 <img src="">랑 같은것 
const bgImage = document.createElement("img");//js에서 html 요소를 생성
bgImage.src = `img/${chosenImage}`;//아직 JS에만 존재
document.body.appendChild(bgImage);//bgImage를 body내부 맨 뒤에 추가
// document.body.prepend(bgImage);//이미지 가장 위에

// document.body.style.backgroundImage = `url(img/${chosenImage})`;