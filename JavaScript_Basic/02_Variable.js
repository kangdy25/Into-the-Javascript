// Variable, rw(read/write)

// let (added in ES6)
let globalName = 'global name';
{
    let names = 'Daniel';
    console.log(names);
    names = 'Hello'
    console.log(names);
}
// console.log(names); (Error)
console.log(globalName);

// var (Don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope
{
    age = 4;
    var age;
}
console.log(age);

// Constant, r(read only)
// use const whenever possible.
// only use let if variable needs to change.

// Immutable data types: primitive types, frozen objects (i.e object.freeze())
// Immutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons;
//  - security
//  - thread safety
//  - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

//  Variable types
// primitive, single item (number, string, boolean, null, undefined, symbol)
    // => 값 자체가 메모리에 저장
// object, box container
    // => Object를 가리키는 래퍼런스가 메모리에 저장
// function, first-class function

// Number
const count = 17;
const size = 17.1;
console.log(`value: ${count}, type:${typeof count}`);
console.log(`value: ${size}, type:${typeof size}`);

// number - special numeric values: infinity. -infinity. NaN
const infinity = 1 / 0;
const Negativeinfinity = -1 / 0;
const nAn = 'Not A Number' / 2;
console.log(infinity);
console.log(Negativeinfinity);
console.log(nAn);

// BigInt (fairly new, don't use it yet)
const bigInt =123456789009876543211234567890n; // over ( {-2}^53 ~ 2^53 )
console.log(`value: ${bigInt}, type = ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// String 
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}`; // template literals (String)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// Boolean
// False: 0, null, undefined, NaN, ''
// True: any other value
const canRead = true;
const test = 3 < 1;
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x; // = (let x = undefined;)
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique indentifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 === gsymbol2);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const Daniel = { name: 'Daniel', age:  21 }; 
Daniel.age = 22;

// Dynamic typing: dynamically typed language
let text = 'hello'
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);

