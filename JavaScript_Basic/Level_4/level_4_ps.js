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