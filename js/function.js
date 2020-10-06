'use strict';

// Function
// - funamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2){ body ... return }
// one function === one thing
// naming : doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// funtcion is object in JS

// 쓸모가 그리 없는 함수. Hello만 출력
function printHello() {
    console.log('Hello');
}
printHello();

function log(message){
    console.log(message);
}
log('hi');

// 2. parameters
// premitive parameters : passed by value
// object parameter: passed by reference
function changeName(obj){
    obj.name = 'coder';
}
const ellie = { name: 'ellie'};
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unkown'){
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
// 배열 형태로 전달됨
function printAll(...args){
    for (let i = 0; i < args.length; i++){
        console.log(args[i]);
    }

    for (const arg of args){
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

// 6. Local scope
let globalName = 'global'; //전역 변수
function printMessage(){
    let message = 'hello'; //지역 변수. 안에서만 출력 가능.
    console.log(message);
    console.log(globalName);
    function printAnother(){
        console.log(message);
        let childMessage = 'hello';
    }
}
printMessage();

// 7. Return a value
function sum(a, b){
    return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1,2)}`);

// 8. Early return, early exit
// bad
function upgadeUser(user){
    if(user.point > 10){
        // long upgrde logic
    }
}

//good
function upgadeUser(user){
    if(user.point <= 10){
       return;
    }
    //long upgrade logic
}

//functions are treated like any other variable
// can be assigned as a value to variable.
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Fuction expression
// a function declaration can be earlier than it is defined (hoisted)
// a function expression is created when the execution reaches it.
const print = function() { //anonymous function
    console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if( answer === 'love you' ){
        printYes();
    } else {
        printNo();
    }
}

//anonymous function
const printYes = function() {
    console.log('yes');
}

// named function
// better debugging in debugger's stack treces
// recursions
const printNo = function print(){
    console.log('no');
}

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = () => console.log('simplePrint');
const add = (a, b) => {
    return a + b;
};

// IIFE : Immediately Invoked Function Expression
(function hello(){
    console.log('IIFE');
})();

// function calculate(command, a, b)
// command : add, substract, divide, multiply, remainder

const calculate = (command, a, b) => {
    switch(command){
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unkown command');
    }
}

console.log(calculate('remainder', 4, 4));