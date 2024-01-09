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
