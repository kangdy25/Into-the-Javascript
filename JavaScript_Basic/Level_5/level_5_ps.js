////////////// Destructuring //////////////

// Q1. 변수를 마구 만들었는데 말입니다..
var [number, address] = [ 30, 'seoul' ];
// number = 30, address = seoul
var {address : a , number = 20 } = { address, number };

// A1. a, address = 'seoul', number = 30

// Q2. 다음과 같은 Object에서 데이터를 뽑아서 변수를 만들고 싶습니다. 
let bodyData = {
    body: {
        height: 190,
        weight: 70,
    },
    size: ["상의 Large", "바지 30인치"],
};
let {
    body: {
        height,
        weight
    },
    size : [up, down]
} = bodyData

////////////// Promise //////////////

// Q1. <img> 이미지 로딩 성공시 특정 코드를 실행하고 싶습니다. 
let image = document.querySelector("#test");

let loading = new Promise((success, fail)=>{
    image.addEventListener('load', ()=>{
        success();
    });
    image.addEventListener('error', ()=>{
        fail();
    });
});

loading.then(()=>{
    console.log('성공')
}).catch(()=>{
    console.log('실패')
})

// Q2. Ajax 요청이 성공하면 무언가 코드를 실행하고 싶습니다. 

let promise = new Promise((success, fail)=>{
    $.ajax({
        type : 'GET',
        url : 'https://codingapple1.github.io/hello.txt'
    }).done((data)=>{
        success(data)
    })
})

promise.then((data)=>{
    console.log(data);
    let nextPromise = new Promise((success, fail)=>{
        $.ajax({
            type : 'GET',
            url : 'https://codingapple1.github.io/hello2.txt'
        }).done((data2)=>{
            success(data2)
        })
    })
    return nextPromise;
}).then((data2)=>{
    console.log(data2)
})