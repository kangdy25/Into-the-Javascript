// Destructuring
let arr = [2, 3, 4];

let [a, b, c = 5] = [2, 3];

// let { name, age } = { name : 'Kim', age : 30 };
// let {name : nickname, age = 31} = {name: 'Kim'};

var name = 'Kim';
var age = 30;

var obj = { name : name, age : age };
var obj = { name, age }

// Promise
let promise1 =  new Promise(function(success, fail){
    let operator = 1 + 1;
    success(operator); // then() 실행
    // fail(); // catch() 실행
}); // 성공/실패 판정 기계

let promise2 = new Promise((success, fail)=>{
    setTimeout(()=>{
        success();
    }, 5000);
})

promise1.then(function(result){
    console.log('앙 성공띠 ' + result);
}).catch(function(){
    console.log('힝 실패 ㅠㅠ')
});

promise2.then(function(){
    console.log('앙 성공띠 ');
}).catch(function(){
    console.log('힝 실패 ㅠㅠ')
});

// async / await
async function plus(){
    let oper = new Promise((success, fail)=>{
      let result = 1 + 1;
      success(result);
    });
    let result = await oper;
    console.log(result)
  }
  plus();