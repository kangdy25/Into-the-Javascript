// 데이터를 배열 및 오브젝트 자료형에 저장하기
var car = { name : '소나타', price : 50000 };
var products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' },
];

// 상품 가격 정렬 기능 (Sort 함수))
document.querySelector('#priceSort').addEventListener('click', ()=>{
    products.sort(function(a, b) {
        return a.price - b.price;
    });
    document.querySelector('.row').innerHTML = ''
    for (let i = 0; i < products.length; i++) {
        let cardLayout = `<div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5>${products[i].title}</h5>
        <p>가격 : ${products[i].price}</p>
        </div>`
        document.querySelector('.row').insertAdjacentHTML('beforeend', cardLayout)
    }
})

// 상품 이름 정렬 기능 
document.querySelector('#nameSort').addEventListener('click', ()=>{
    products.sort(function (a, b) {
        return a.title > b.title ? 1 : -1;
    });
    console.log(products)
    document.querySelector('.row').innerHTML = ''
    for (let i = 0; i < products.length; i++) {
        let cardLayout = `<div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5>${products[i].title}</h5>
        <p>가격 : ${products[i].price}</p>
        </div>`
        document.querySelector('.row').insertAdjacentHTML('beforeend', cardLayout)
    }
})

// <input>을 이용해 유저가 직접 가격을 입력해서 필터하는 기능
document.querySelector('.price-input').addEventListener('input', (e)=>{
    // Input 값 불러오기
    let priceInput = e.target.value;
    
    // 필터링 버튼을 눌렀을 때 Input 값과 비교 후 화면 출력
    document.querySelector('#filter').addEventListener('click', ()=>{
        let arr = products.filter(function (a) {
            return a.price <= priceInput;
        })
        document.querySelector('.row').innerHTML = ''
        for (let i = 0; i < arr.length; i++) {
            let cardLayout = `<div class="col-sm-4">
            <img src="https://via.placeholder.com/600" class="w-100">
            <h5>${arr[i].title}</h5>
            <p>가격 : ${arr[i].price}</p>
            </div>`
            document.querySelector('.row').insertAdjacentHTML('beforeend', cardLayout)
        }
    })
})

// 카드 레이아웃 생성
for (let i = 0; i < products.length; i++) {
    let cardLayout = `<div class="col-sm-4">
    <img src="https://via.placeholder.com/600" class="w-100">
    <h5>${products[i].title}</h5>
    <p>가격 : ${products[i].price}</p>
    </div>`
    document.querySelector('.row').insertAdjacentHTML('beforeend', cardLayout)
}

// 배열 및 오브젝트 자료형에서 데이터를 꺼내서 HTML 삽입
// document.querySelector(".item").innerHTML = car.name;
// document.querySelector(".price").innerHTML = car.price + '$';

// 반복문으로 모든 데이터 출력 후 HTML에 삽입
// for(let i = 0; i < 3; i++) {
//     document.querySelectorAll(".card-title")[i].innerHTML = products[i].title;  
//     document.querySelectorAll(".card-price")[i].innerHTML = products[i].price;  
// }

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
