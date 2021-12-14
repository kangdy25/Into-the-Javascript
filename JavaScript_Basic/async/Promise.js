'use strict';

// Promise is a JS object for asynchronous operation.
// State: pending -> fulfilled or rejected
// Producer VS Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log('doing something ...');
    setTimeout(() => {
        resolve('ellie');
        // reject(new Error('No Network'));
    }, 2000);
});

// 2. Consumers: then, catch, finally
promise //
    .then((value) => {
    console.log(value);
})
    .catch((error) => {
    console.log(error);
})
    .finally(() => {
        console.log('finally');
});

// 3. Promise chaining
const fetctNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetctNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1) , 1000);
    });
})
.then(num => console.log(num));

// 4. Error Handling
const getChicken = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐔'), 1000);
    });

const getEgg = chicken => 
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`error! ${chicken} => 🥚`)), 1000);
    });

const cook = egg => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    });


// getChicken()
// .then(chicken => getEgg(chicken))
// .then(egg => cook(egg))
// .then(meal => console.log(meal));

getChicken() //
    .then(getEgg)
    .catch(error => {
        return '🍞';
    })
    .then(cook)
    .then(console.log)
    .catch(console.log);