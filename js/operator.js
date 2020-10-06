// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); //substract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(5 % 2); //remainder
console.log(2 ** 3); //exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, type: ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// 6. Logical operators : || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;

// || (or), finds the first truthy value
// heavy한 연산을 하는 함수를 제일 마지막에 배치하는 것이 효율적
console.log(`or: ${ value1 || value2 || check() }`);

// && (and), finds the first falsy value
// 마찬가지로 heavy한 연산을 하는 함수를 제일 마지막에 배치하는 것이 효율적
console.log(`and: ${value1 && value2 && check()}`)


// often used to compress long if-statement
// nullableObject && nullalbleObject.something

function check(){
    for (let i = 0; i < 10; i++){
        //wasting time
        console.log('outch!');
    }
    return true;
}

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
// 웬만하면 === 를 사용해서 검사
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;
console.log(ellie1 == ellie2); //ref 값이 다름, false
console.log(ellie1 === ellie2); // 똑같은 타입이든 아니든 ref 값이 다름, false
console.log(ellie1 === ellie3); // ellie1이 가지고 있는 ref value를 3으로 할당, true

// equality = puzzler
console.log(0 == false); //true
console.log(0 === false); //false
console.log('' == false); // true
console.log('' === false); // false : ''은 boolean 타입 아님
console.log(null == undefined); // false => true . 같은 타입으로 체크함
console.log(null === undefined); // false

// 8. Conditional operators : if
// if, else if, else
const name = 'df';
if(name === 'ellie') {
    console.log('welcome, Ellie');
} else if ( name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unknown'); 
}

// 9. Ternary operator : ?
// condition ? value1 : value2;
// 간단하게 검사할 때 쓰는 것을 추천
console.log(name === 'ellie' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for emum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love Firefox');
        break;
    default:
        console.log('same all');
        break;
}

// 11. loops
// while loop, while the condition is truethy.
// body code is executed.
let i = 3;
while (i > 0){
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condtion.
do {
    console.log(`do while: ${i}`);
    i--;
} while( i > 0 );

// for loop, for(begin; condition; step)
for ( i = 3; i > 0; i-- ){
    console.log(`for: ${i}`);
}

for ( let i = 3; i > 0; i = i - 2 ){
    console.log(`inline variable for: ${i}`);
}

// nested loops
for ( let i = 0 ; i < 10; i++){
    for( let j = 0; j < 10; j++){
        console.log(`i: ${i}, j: ${j}`);
    }
}

//break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for(let i = 0; i <= 10; i++){
    if(i % 2 === 0){
        console.log(i);
        continue;
    }

    //if(i % 2 !== 0){
    //    continue;
    //}
    //console.log(i);
}

//Q2. iterate from 0 to 10 and print numbers until reachging 8 (use break)

for(let i = 0; i <= 10; i++){
    console.log(i);
    if(i === 8){
        break;
    }

    //if(i > 8){
    //    break;
    //}
    //console.log(i);
}