const buttons = document.querySelectorAll('button');
const operator = document.querySelectorAll('.operator');
const displayElement = document.querySelector('.input');
const numBtn = document.querySelectorAll('.numBtn');

let operatorOn = '';
let previousNum = '';
let resentNum = '';

// 기본 연산 기능 함수
let calculate = (n1, operator, n2) => {
    let result = 0;
    switch (operator) {
        case '+/-':
            result = Number(n1) * -1;
            break;
        case '+':
            result = Number(n1) + Number(n2);
            break;
        case '-':
            result = Number(n1) - Number(n2);
            break;
        case 'x':
            result = Number(n1) * Number(n2);
            break;
        case '/':
            result = (Number(n1) / Number(n2)).toFixed(7);
            break;
        case '%':
            result = Math.floor(Number(n1) % Number(n2));
            break;
        default:
            break;
    }
    return String(result);
}


let calculator = () => {
    let isFirstDigit = true;
    buttons.forEach((item=>{
        item.addEventListener('click', (e)=>{
            let action = e.target.classList[0];
            let click = e.target.innerHTML;

            if (action === 'operator') {
                //연산자 눌렀을 때
                operatorOn = click;
                previousNum = displayElement.textContent;
                displayElement.textContent = '';
                isFirstDigit = true; 
                // 연산자를 누르면 다음 숫자는 첫 번째 숫자가 됨
            }
            if (action === 'numBtn') {
                if (isFirstDigit && click === '0') {
                // 첫 번째 숫자이고 입력된 값이 0인 경우 아무 작업도 수행하지 않음
                    return;
                }
                if (
                    //창이 비어있고 연산자 누르지 않았을 때 (한 자리)
                    displayElement.textContent === '' && operatorOn === ''
                ) {
                    displayElement.textContent = click;
                    previousNum = displayElement.textContent;
                } else if (
                    //창이 비어있지 않고 연산자 누르지 않았을 때 (한 자리 이상)
                    displayElement.textContent !== '' && operatorOn === ''
                ) {
                    displayElement.textContent += click;
                    previousNum = displayElement.textContent;
                } else if (
                    //창이 비어있고 연산자 눌렀을 때 (한 자리)
                    displayElement.textContent === '' && operatorOn !== ''
                ) {
                    displayElement.textContent = click;
                    resentNum = displayElement.textContent;
                } else if (
                    //창이 비어있지 않고 연산자 눌렀을 때 (한 자리 이상)
                    displayElement.textContent !== '' && operatorOn !== ''
                ) {
                    displayElement.textContent += click;
                    resentNum = displayElement.textContent;
                }
                // 첫 번째 숫자 입력 후에는 첫 번째 숫자가 아님을 표시
                isFirstDigit = false;
            }
            if (action === 'result') {
                // = 눌렀을 때 calculate함수 실행
                displayElement.textContent = calculate(
                    previousNum,
                    operatorOn,
                    resentNum
                );
                isFirstDigit = true; 
                // 결과를 표시한 후에는 다음 숫자는 첫 번째 숫자가 됨
            }
            if (action === 'ac') {
                //C 버튼 눌렀을 때 모든 할당 초기화
                displayElement.textContent = '';
                previousNum = '';
                operatorOn = '';
                resentNum = '';
                isFirstDigit = true; 
                // 모든 할당 초기화 후에는 다음 숫자는 첫 번째 숫자가 됨
            }
        });
    }));
}  

calculator();