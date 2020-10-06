'use strict';

//async & await
// clear style of using promise;

// 1. async
// promise를 좀 더 간편하게 사용할 수 있는 syntactic sugar
async function fetchUser() {
    return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1000);
    return 'apple';
}

// 더 쉽고 직관적으로 이해
async function getBanana() {
    await delay(2000);
    return 'banana';
}

// function getBanana() {
//     return delay(3000)
//     .then(() => 'banana');
// }

async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}
pickFruits().then(console.log);

// 콜백 지옥과 같은 느낌
// function pickFruits() {
//     return getApple()
//     .then(apple => {
//         return getBanana().then(banana => `${apple} + ${banana}`);
//     });
// }


// 3. useufl Promise APIs
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + ')
    );
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);