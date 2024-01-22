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