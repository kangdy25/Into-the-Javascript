// Destructuring
let arr = [2, 3, 4];

let [a, b, c = 5] = [2, 3];

// let { name, age } = { name : 'Kim', age : 30 };
// let {name : nickname, age = 31} = {name: 'Kim'};

var name = 'Kim';
var age = 30;

var obj = { name : name, age : age };

// Promise
let promise1 =  new Promise(function(success, fail){
    let operator = 1 + 1;
    success(operator); // then() 실행
    // fail(); // catch() 실행
}); // 성공/실패 판정 기계

let promise2 = new Promise((success, fail)=>{
    setTimeout(()=>{
        success();
    }, 5000);
})

promise1.then(function(result){
    console.log('앙 성공띠 ' + result);
}).catch(function(){
    console.log('힝 실패 ㅠㅠ')
});

promise2.then(function(){
    console.log('앙 성공띠 ');
}).catch(function(){
    console.log('힝 실패 ㅠㅠ')
});

// async / await
async function plus(){
    let oper = new Promise((success, fail)=>{
        let result = 1 + 1;
        success(result);
    });
    let result = await oper;
    console.log(result)
}
plus();

// Loop Statement
// [1, 2, 3].forEach(); // Array

class Parent {

}
Parent.prototype.name = 'Park';

var object = new Parent();

for (var key in object) {
    if (object.hasOwnProperty(key)) {
        console.log(object[key]);
    }
} // Object

let array = [2, 3, 4, 5]
for (var element of array) {
    console.log(element)
} // Iterable

// Symbol
var weight = Symbol('내 진짜 몸무게');
let height = Symbol('내 진짜 키');

var person = { name : 'Kim' };
person.weight = 100;

person[weight] = 200;
person[height] = 180;

console.log(person);

var symbolA = Symbol.for('설명1');
var symbolB = Symbol.for('설명1');
console.log(symbolA === symbolB);

var arrays = [2,3,4];
console.log(arrays[Symbol.iterator]);

// Map / Set
// Map
var person = new Map();
person.set('age', 20);

person.get('age'); //자료 꺼내는 법
person.delete('age'); //자료 삭제하는 법
person.size; //자료 몇갠지 알려줌

//Map자료 반복문 돌리기
for (var key of person.keys() ){
    console.log(key)
}

//자료를 직접 집어넣고 싶으면

var person = new Map([
    ['age', 20],
    ['name', 'Kim']
]); 

// Set
var checkPerson = new Set([ 'john' , 'tom', 'andy', 'tom' ]);

checkPerson.add('sally'); //자료더하기 
checkPerson.has('tom'); //자료있는지 확인
checkPerson.size;  //자료 몇갠지 세기

var ang = [ 'john' , 'tom', 'andy', 'tom' ];
var ang2 = new Set(ang); //Array를 Set으로 바꾸기
ang = [...ang2]  //Set을 Array로 바꾸기

// Web Components
class customClass extends HTMLElement {
    connectedCallback() {
        let name = this.getAttribute('name')
        this.attachShadow({mode : 'open'});
        this.shadowRoot.append(template1.content.cloneNode(true));
        
        let el = this.shadowRoot.querySelector('label');
        el.addEventListener('click', function(){
            console.log('클릭함');
        })
    }
    static get observedAttributes() {
        return ['name']
    }
    attributeChangedCallback() {
        console.log(this.getAttribute('name'))
    }
}

customElements.define('custom-input', customClass);

// Shadow DOM
document.querySelector('.mordor').attachShadow({mode : 'open'});
document.querySelector('.mordor').shadowRoot.innerHTML = '<p>심연에서 왔도다</p>'

// Optional Chaining / Nullish Coalescing Operator
// "중첩된 object 자료에서 에러없이 안전하게 데이터를 꺼낼 때 사용한다" 
var user = {
    name : 'kim',
    age : 20
}

console.log(user.name);
console.log(user?.name);

var user = {
    name : 'kim',
    age : { value : 20 }
}

console.log(user.age1?.value1) // 에러는 안남 매우 안전

var ohno;

console.log(ohno ?? '로딩중')