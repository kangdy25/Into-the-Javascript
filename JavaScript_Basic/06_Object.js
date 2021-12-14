// Objects
// one of the JS's data type.
// a collection of related data and/or functionality.
// Nearly all objects in JS are instances of Object
// object = {key: value};

// 1. literals and properties
const obj1 = {}; // 'Object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const Daniel = {name: 'Daniel', age: 21};
print(Daniel);

// 2. Computed properties
// key should be always string
console.log(Daniel.name); // 대부분 이걸로 쓴다
console.log(Daniel['name']);


// 3. Property value shorthand
const person1 = {name: 'Bob', age: 2};
const person2 = {name: 'Steve', age: 3};
const person3 = {name: 'Dave', age: 4};
const person4 = new Person('Daniel', 22);
console.log(person4);

// 4. Constructor function
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in Daniel);
console.log('age' in Daniel);
console.log('random' in Daniel);
console.log(Daniel.random);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (let key in Daniel) {
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (value of array) {
    console.log(value);
}

// 7. Fun Cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'Ang', age: 20};
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.log(user3);

const user4 = {};
Object.assign(user4, user);
console.log(user4);