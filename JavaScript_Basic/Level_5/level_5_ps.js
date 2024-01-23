// 쇼핑몰에 쓸 상품데이터를 오브젝트로 여러 개 만들고 싶습니다. 
function Item(clothes, money) {
    this.name = clothes;
    this.price = money;
    this.vat = function() {
        console.log(this.price * 0.1 + '원');
    }
}

var product1 = new Item('shirts', 40000);
var product2 = new Item('pants', 50000);

// 오브젝트 자료 여러 개를 만들고 싶습니다.
function Person(names, ages) {
    this.name = names;
    this.age = ages;
    this.sayHi = function() {
        console.log(`안녕 나는 ${this.name}이야`);
    }
}

var adult1 = new Person('Kim', 20);
var adult2 = new Person('Park', 21);
var adult3 = new Person('Lee', 22);

// Q. 다음 코드의 출력 결과는 무엇일까요?
function Parent(){
    this.name = 'Kim';
}
var a = new Parent();

a.__proto__.name = 'Park';
console.log(a.name)

// A. 앙 Kim오띠~

// 함수가 안들어가요 엉엉
function Student(이름, 나이){
    this.name = 이름;
    this.age = 나이;
}

Student.prototype.sayHi = () => {
    console.log('안녕 나는 ' + this.name + '이야');
}
var 학생1 = new Student('Kim', 20);

학생1.sayHi(); 
// Q. 왜 이 코드가 제대로 안나오죠?
// A. arrow function은 this 참조를 다른 방식(바깥의 this 값을 가져온다)으로 하기 때문에

// 모든 array에 적용할 수 있는 함수를 직접 새로 만들려면 어떻게 해야할까요?
var arr = [1,2,3];

Array.prototype.remove3 = function() {
    for(let i = 0; i < this.length; i++) {
        if (this[i] == 3) {
            this.splice(i, 1);
        }
    }
}

arr.remove3();
console.log(arr); //[1,2]