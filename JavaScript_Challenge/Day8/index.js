// 미션1. 자바스크립트의 this

// 다음 코드에서 regularFunction과 arrowFunction이 있습니다.
// 두 함수 모두 this가 어떻게 작동하는지 확인하기 위해 각각 this.value를 출력하려고 합니다.

// 각 함수의 this가 무엇을 가리키는지 확인하고, 각 함수가 정상적으로 this.value를 출력할 수 있도록 코드를 수정하세요. (주석으로 작성된 질문에 대한 답도 주석으로 남겨주세요!!)

const obj = {
    value: 42,
    regularFunction: function () {
        console.log(this.value); // 여기서 this는 무엇을 가리키나요?: 메서드를 포함하는 객체인 obj
    },
    arrowFunction: () => {
        console.log(this.value); // 여기서 this는 무엇을 가리키나요? : this가 포함되는 함수가 선언된 위치의 상위 스코프 (여기서는 전역 객체이다.)   
    },
};

obj.regularFunction(); // 출력: 42
obj.arrowFunction(); // 출력: undefined (이유를 설명해보세요) : 메서드를 일반함수로 호출하지 않고 화살표 함수를 사용하면 함수가 선언된 위치의 상위 스코프를 참조하기에 전역 객체가 바인딩된다.