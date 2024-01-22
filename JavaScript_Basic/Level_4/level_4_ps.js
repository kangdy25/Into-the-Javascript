/////////////////// this, arrow function ///////////////////

// 1. 간단한 메소드 만들기
var person = {
    name: 'son',
    sayHi: function () {
        console.log('안녕 나는 ' + this.name)
    }
}
person.sayHi();

// 2. 오브젝트 내의 데이터를 전부 더해주는 메소드 만들기
var data = {
    item: [1, 2, 3, 4, 5],
}

data.sum = function() {
    let result = 0;
    for (let i = 0; i < data.item.length; i++) {
        result += data.item[i];
    }
    console.log(result);
}
data.sum();

// 3. setTimeout 이용해보기
document.getElementById('btn').addEventListener('click', (e)=>{
    setTimeout(()=>{
        console.log(e.target.innerHTML)
    }, 1000)
});

////////////////// variable ///////////////////

// 다음 코드의 콘솔창 출력결과는 무엇일까요? (코드는 비밀^^) 
// 1. error
// 2. error
// 3. 1
// 4. 5

// 콘솔창에 1초에 한번씩 1부터 5까지의 정수를 출력해주고 싶습니다. 
for (let i = 1; i < 6; i++) { 
    setTimeout(function() { console.log(i); }, i*1000 ); 
}

// 버튼을 누르면 모달창을 띄우고 싶습니다. 
let btns = document.querySelectorAll('.btn');
let modals = document.querySelectorAll('div');

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', ()=>{
        modals[i].style.display = 'block';
    })
}

////////////////// Template Literal / Tagged Literal ///////////////////

// 문제 1. 단어 순서를 바꾸는 해체분석기 제작하기
var pants = 20;
var socks = 100;
`바지${pants} 양말${socks}`;

function changeItem(string, variable1,variable2) {
    console.log(string[1] + variable1 + string[0] + variable2); 
}

changeItem`바지${pants} 양말${socks}`;

// 문제 2. 바지가 0개면 '바지다팔렸어요'라는 문자를 대신 표시해주고 싶습니다. 
function advancedChangeItem(string, ...variable) {
    if (variable[0] == 0) {
        console.log(string[0] + " 다 팔렸어요" + string[1] + variable[1]);
    }
}

advancedChangeItem`바지${pants} 양말${socks}`;

////////////////// Spread, Rest Parameter dd///////////////////

// 1. spread 문제 1 : 위 코드의 출력 결과는?
// 답: ['김', '밥', 1, 2, 3] 

// 2. spread 문제 2 : 대괄호가 가득한 위 코드의 출력 결과는?
// 답: you

// 3. default 파라미터 문제 1
// 콘솔에 9 출력

// 4. default 파라미터 문제 2
// 콘솔에 15 출력

// 5. array를 만들어주는 함수를 제작하고 싶습니다.
function arr(...parameter){
    return parameter
}

var newArray = arr(1,2,3,4,5);
console.log(newArray); 

// 6. 최댓값 구하기
var numbers = [2,3,4,5,6,1,3,2,5,5,4,6,7];
console.log(Math.max(...numbers));

// 7. 글자를 알파벳순으로 정렬해주는 함수를 만들고 싶습니다. 
function sorting(parameter){
    console.log(...[...parameter].sort())
}

sorting('bear'); 

// 8. 데이터마이닝 기능 만들기 
function countLetter(parameter) {
    let result = {};
    console.log([...parameter]);
    // forEach 반복문
    // [[...parameter]].forEach((a)=>{
    //     if (result[a] > 0) {
    //         result[a]++
    //     } else {
    //         result[a] = 1;
    //     }
    // })

    // for 반복문
    for (let i = 0; i < [...parameter].length; i++) {
        if (result[[...parameter][i]] > 0) {
            result[[...parameter][i]]++;
        } else {
            result[[...parameter][i]] = 1;
        }
    }
    console.log(result)
}
countLetter('aacbbb')