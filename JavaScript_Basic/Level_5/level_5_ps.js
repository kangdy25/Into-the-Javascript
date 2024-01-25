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