'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length-1]);

// 3. Looping over an array
// print all fruits
console.clear();

// a. for
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// b. for of
for (let properties of fruits) {
    console.log(properties);
}

// c. forEach
fruits.forEach((fruit) => console.log(fruit));

// Addiction, deletion, copy
// push : add an item to the end
fruits.push('berry', 'peach');
console.log(fruits);

// pop : remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging
fruits.unshift('berry', 'lemon');
console.log(fruits);

// shift: remove an item from the benigging
fruits.shift();
fruits.shift();
console.log(fruits);

// note : shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push('berry', 'peach', 'lemon');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, 'melon', 'mango');
console.log(fruits);

// combine to arrays
const fruits2 = ['plum', 'blueberry'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find rhe index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.indexOf('melon'));
console.log(fruits.indexOf('plum'));

// includes 
console.log(fruits.includes('plum'));
console.log(fruits.includes('melon'));

// lastIndexOf
console.clear();
fruits.push('apple');
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.lastIndexOf('apple'));

console.log(fruits.toString());
console.log(fruits.toLocaleString());

let pops = fruits.pop();
console.log(pops);

console.log(fruits.join(' '));
console.log(fruits.reverse());
console.log(fruits.sort());

console.log(newFruits.filter(newFruits => newFruits.length > 5));
