// Quiz 1
// 미션1. 화살표 함수 작성하기
// 두 숫자의 곱을 반환하는 화살표 함수를 작성하고, 3과 4를 인자로 호출하여 결과를 출력하세요.

const mul = (x, y) => x * y;

console.log(mul(3, 4));

// Quiz 2
// 미션2. 함수 작성하기
// 책의 제목과 저자 이름을 속성으로 가진 book 객체를 만들고, 책의 정보를 반환하는 getSummary 메서드를 작성하세요.
const book = {
    title: '',
    author: '',

    getSummary() {
        return `책 제목: ${this.title}, 저자: ${this.author}`
    }
}

console.log(book.getSummary());

// Quiz 3
// 미션3. 스코프와 함수
// 두 숫자 a와 b를 인자로 받아, b에 5를 더한 값을, a에 더한 결과를 반환하는 sumNumbers 함수를 작성하세요.

function sumNumbers(a, b) {
    function addFive(number) {
        //코드 작성
        return number + 5;
    }
    //코드 작성
    return a + addFive(b);
}

console.log(sumNumbers(3, 7)); // 출력: 15 (7에 5를 더한 후 3을 더함)
console.log(sumNumbers(10, 5)); // 출력: 20 (5에 5를 더한 후 10을 더함)```