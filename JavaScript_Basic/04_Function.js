// Function
// -fundamental building block in the program
// -subprogram can be used multiple times
// -performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) {body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, CreatePoint
// function is object in JS
function log(message) {
    console.log(message);
}
log('Hello@@');
log(1234);

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.myname = 'coder';
}
const Ang = { myname: 'Daniel'};
changeName(Ang);
console.log(Ang);

// 3. Default parameters (added in ES6)
function showMessage(kakaoTalk, from = 'unknown') {
    console.log(`${kakaoTalk} by ${from}`);
}
showMessage('Hi!!');

// 4. Rest parameters (added in ES6)
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('Don\'t', 'be', 'afraid');

// 5. Local scope
// 밖에서는 안이 보이지 않고, 안에서는 밖을 볼 수 있다!!
let globalMessage = 'global' // global variable
function printMessage() {
    let localMessage = 'Hello';
    console.log(localMessage); // local variable
    console.log(globalMessage);
}
printMessage();
// console.log(localMessage); => 밖에서는 안이 보이지 않는다!!  

// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1,2);
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
//bad
function upgradeUser(user) {
    if (user.point > 10 ) {
        // long upgrade logic...
    }
}
// good
function upgradeUser(user) {
    if (user.point <= 10 ) {
        return;
    }
    // long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () {
    // anonymous function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, PrintNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        PrintNo();
    }
} 
// anonymous function
const printYes = function () {
    console.log('yes!');
}
// named function
// better debugging in debugger's stack traces
// recursions
const PrintNo = function () {
    console.log('no!');
}
randomQuiz('wrong', printYes, PrintNo);
randomQuiz('love you', printYes, PrintNo);

// Arrow function
// always anonymous
// const simplePrint = function() {
//     console.log('simplePrint!');
// } 

const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
//  do something more
    return a * b;
};

// IIFE: Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})();

// ###############################################################
// Quiz

function calculate(command, a, b) {
    switch (command) {
        case 'add':
            console.log(`add: ${a + b}`);
            break;
        case 'substract':
            console.log(`add: ${a - b}`);
            break;
        case 'devide':
            console.log(`add: ${a * b}`);
            break; 
        case 'multiply':
            console.log(`add: ${a / b}`);
            break;
        case 'remainder':
            console.log(`add: ${a % b}`);
            break;
        default:
            console.log('입력을 제대로 해주세요!!');
    }
}

calculate('remainder', 3, 5);