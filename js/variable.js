//1. Use strict
// added in ES 5
// use this for Vanila Javascript.
'use strict';

//2. Variable : rw(read/write)
// let (added in ES6)

let globalName = 'global name';
//scope
{
    let name = 'haerim';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

// var
// var hoisting (move declaration from bottom to top)
// 어디에 선언했느냐는 상관 없이 항상 제일 위로 끌어올려주는 것
// has no block scope
{
    age = 4;
    var age;
}
console.log(age);

// name = 4;
// let name;

// 3. constance : r(read only)
// use const whenever possible
// only use let if variable needs to change
const dayinWeek = 7;
const maxNumber = 5;

//note
// Immutable data type : premitive types, frozen objects (i.e. object.freeze())
// Mutable data type : all objects by default are mutable in JS
// favor immutable data type always for a few reason:
// - security
// - thread safety
// - reduce human mistakes

// 4. Variable type   
// primitive, single item : number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

const count = 17; //integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values : infinity, -infinity, NaN
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number'/2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
// chrome 등에서만 추가됨
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53) ~ 2*53
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

//string 
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello'+brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`;
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false : 0, null, undefined, NaN, ''
// true : any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value : ${canRead}, type: ${typeof canRead}`);
console.log(`value : ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value : ${nothing}, type: ${typeof nothing}`);

// undefined
// 비었는지 값이 정의되지 않았는지 아직 알 수 없는 상태
let x;
console.log(`value : ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
console.log(`value : ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const ellie = { name: 'ellie', age: 20 };
console.log(ellie.age);
ellie.age = 21;
console.log(ellie.age);

// 5. Dynamic typing : dynamically typed language
let text = 'hello';
console.log(text.charAt(0));
console.log(`value : ${text}, type: ${typeof text}`);
text = 1;
console.log(`value : ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value : ${text}, type: ${typeof text}`);
text = '8'/ '2';
console.log(`value : ${text}, type: ${typeof text}`);
//console.log(text.charAt(0));