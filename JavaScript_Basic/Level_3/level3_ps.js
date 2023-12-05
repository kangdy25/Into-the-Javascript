// Q1. Array에서 철수라는 자료를 찾고 싶습니다
var nameList = ['Enzo', 'Nkunku', 'Colwill', 'James'];

function findName(name){
    for(let i = 0; i < nameList.length; i++) {
        if (nameList[i] === name) {
            console.log('있어요');
        } 
    }
}
findName('Enzo');
findName('Mudryk');
findName('Nkunku');

// Q2. 갑자기 구구단을 콘솔창에 출력하고 싶습니다.
for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
        console.log(`${i * j}`);
    }
}

// Q3. 평균점수 계산기 만들기 
function neungji(arr, score) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let mean = sum / arr.length;
    if (mean > score) {
        console.log(`평균보다 ${mean - score}점 떨어졌네요. 재수 추천`);
    } else if (mean < score) {
        console.log(`평균보다 ${score - mean}점이 올랐네요.`);
    }
}

neungji([10, 20, 30, 40, 50], 40)
neungji([40, 40, 40], 20) 