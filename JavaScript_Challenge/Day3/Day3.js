// 미션1. 배열, 객체, 반복문
// 아래와 같은 배열에서, 칼로리가 500 이상인 음식의 이름을 출력해주세요.
// 반복문과 조건문을 사용하세요!

let foods = [
    { name: 'Burger', calories: 800 },
    { name: 'Apple', calories: 52 },
    { name: 'Pizza', calories: 550 },
    { name: 'Salad', calories: 150 },
];

// 일반 for문
for (let i = 0; i < foods.length; i++) {
    if (foods[i].calories >= 500) {
        console.log(foods[i].name);
    }
}

// forEach문
foods.forEach((food)=>{
    if (food.calories >= 500) {
        console.log(food.name)
    }
})

// 미션2. 생성자 함수
// 동물의 종류와 소리를 인자로 받아 객체를 생성하는 Animal 생성자 함수를 작성해주세요. 그리고 makeSound 메서드를 추가하여 동물이 내는 소리를 출력하는 기능을 구현하세요.

class Animal {
    constructor(type, sound) {
        this.type = type;
        this.sound = sound;

        this.makeSound = function() {
            return `${this.type}이(가) ${this.sound} 소리를 냅니다.`
        }
    }
}

const dog = new Animal('개', '멍멍');
console.log(dog.makeSound()); // 출력: 개이(가) 멍멍 소리를 냅니다.

const cat = new Animal('고양이', '야옹');
console.log(cat.makeSound()); // 출력: 고양이이(가) 야옹 소리를 냅니다.