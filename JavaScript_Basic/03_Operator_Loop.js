// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 2); // add
console.log(1 - 2); // substract
console.log(2 * 2); // multiply
console.log(2 / 2); // devide
console.log(3 % 2); // remainder
console.log(2 ** 2); // exponentiation

// 3. Increment and Decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
// ############################################################
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
// ############################################################
const preDecrement = --counter;
// counter = counter - 1;
// preDecrement = counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
// ############################################################
const postDecrement = counter--;
// postDecrement = counter;
// counter = counter - 1;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y
x -= y; // x = x - y
x *= y; // x = x * y
x /= y; // x = x / y

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // Greater than
console.log(10 >= 6); // Greater than or equal

// 6. Logical operators
const value1 = true;
const value2 = 4 < 2; //False
// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);
// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);
// ! (not)
console.log(!value1);
// often used to compress long if-statement
// nullableObject && nullableObject.something

// if (nullableObject != null) {
//     nullableObject.something;
// }
    function check() {
        for (let i = 0; i < 10; i++){
            //wasting time
            console.log('😱');
        }
        return true;
    }

// 7. Equality
const stringFive = '5'
const numberFive = 5
// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);
// == Strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);
// Object equality by reference
const Daniel1 = { myname: 'Daniel' };
const Daniel2 = { myname: 'Daniel' };
const Daniel3 = Daniel1;
console.log(Daniel1 == Daniel2);
console.log(Daniel1 === Daniel2);
console.log(Daniel1 === Daniel3);
// equality - puzzle
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

// 8. Conditional operators: if
// if, else if, else
const mynameis = 'df'
if (mynameis === 'Daniel') {
    console.log('Welcome, Daniel!');
} else if (name === 'ProgrammerX') {
    console.log('You are amazing Programmer');
} else {
    console.log('unknown');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(mynameis === 'Daniel' ? 'yes' : 'no');

// 10 Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Safari':
        console.log('love you!');
        break;
    default:
        console.log('Same all!');
        break;
}

// 11 Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}
for (let v = 3; v > 0; v--) {
    // inline variable for declaration
    console.log(`inline variable for: ${v}`);
}

// nested loops
for (let p = 0; p < 10; p++) {
    for (let q = 0; q < 10; q++){
        console.log(`p: ${p}, j:${q}`);
    }
}

// ############################################################
// Code Quiz 1
for (let i = 0; i < 11; i++) {
    if (i % 2 !== 0) {
        continue;
    } 
    console.log(`${i}`);
}
// ############################################################
// Code Quiz 2
for (let a = 0; a < 11; a++) {
    if (a > 8) {
        break;
    } else {
        console.log(`'가즈아': ${a}`);
    }
}