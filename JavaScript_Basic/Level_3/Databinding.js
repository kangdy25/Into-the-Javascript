// 데이터를 배열 및 오브젝트 자료형에 저장하기
var car = { name : '소나타', price : 50000 };
var products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
];

// 배열 및 오브젝트 자료형에서 데이터를 꺼내서 HTML 삽입
document.querySelector(".item").innerHTML = car.name;
document.querySelector(".price").innerHTML = car.price + '$';

// 반복문으로 모든 데이터 출력 후 HTML에 삽입
for(let i = 0; i < 3; i++) {
    document.querySelectorAll(".card-title")[i].innerHTML = products[i].title;  
    document.querySelectorAll(".card-price")[i].innerHTML = products[i].price;  
}

// forEach 반복문 사용법
// var arr = [28, 30, 32];
// arr.forEach(function(a, i) {
//     console.log(a)
// });

// for ... in 반복문 사용법
// var obj = { name : 'kim', age : 20 }

// for (var key in obj) {
// console.log(key)
// }
