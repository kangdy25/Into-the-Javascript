// Constructor (생성자)
function Human(names, ages) {
    this.name = names;
    this.age = ages;
    this.sayHi = function () {
        console.log(`안녕하세요 ${this.name}입니다.`)
    }
}

// Prototype (프로토타입)
Human.prototype.gender = '남';
let student1 = new Human();
console.log(student1.gender)

console.log(student1.__proto__); // console.log(Human.prototype); 와 동일한 의미이다.

student1.__proto__.height = 183;
console.log(student1.height)

// Object.create()를 통해 상속 구현 (ES5)
let parent = { name : 'Kim', age : 50 };
let child = Object.create(parent);
let grandChild = Object.create(child);

console.log(child.age); // 50 나옴
console.log(grandChild.age); // 50 나옴

// class를 통해 상속 구현 (ES6)
class Father {
    constructor(names) {
        this.name = names;
        // this.sayHi = function() {  console.log('hello') }
    }
    sayHi() {
        console.log('hello')
    }
}

let son = new Father('Kang');
son.__proto__;
Object.getPrototypeOf(son);

// Extends / Super
class Grandfather {
    constructor(name) {
        this.firstname = 'kim';
        this.lastname = name;
    }
    sayHi() {
        console.log('안뇽');
    }
}

class Dad extends Grandfather {
    constructor(name) {
        super(name);
        this.age = 50;
    }
}

let grandfather1 = new Grandfather('석열');
let dad1 = new Dad('동훈');