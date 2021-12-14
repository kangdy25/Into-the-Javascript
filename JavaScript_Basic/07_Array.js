'use strict';

// Array 

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index Position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
// print all fruits

// a. for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// b. for of
for (let fruit of fruits) {
    console.log(fruit);
}
// console.clear();
// c. forEach
fruits.forEach((fruit)  => console.log(fruit));

// 4. Addition, deletion, copy

// push: add an item to the end
fruits.push('peach', 'strawberry');
console.log(fruits);
// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);
// unshift: add an item to the beginning
fruits.unshift('lemon', 'lime');
console.log(fruits);
// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);
// note!! shift, unshift are slower than pop. push

// splice: remove an item by index position
fruits.push('lemon', 'melon', 'strawberry');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, 'watermelon', 'peach');
console.log(fruits);

// combine two arrays
const fruits2 = ['pear', 'blueberry'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// find the index
console.clear();
console.log(fruits);
// indexOf: find the index
console.log(fruits.indexOf('banana'));
console.log(fruits.indexOf('peach'));
// includes
console.log(fruits.includes('peach'));
console.log(fruits.includes('banana'));
// lastIndexOf
console.clear();
fruits.push('apple');
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.lastIndexOf('apple'));
