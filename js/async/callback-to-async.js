

class UserStorage {

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async loginUser(id, password) {
        //클래스 내부 참조 : this
        await this.delay(1000);
        if(
            (id === 'ellie' && password === 'dream') ||
            (id === 'coder' && password === 'academy')
        ) {
            return id;
        } else {
            return console.log(new Error('not found'));
        }
    }

    async getRoles(id) {
        await this.delay(2000);
        if ( id === 'ellie') {
            return {name: 'ellie', role: 'admin'};
        } else {
            return console.log(new Error('no access'));
        }
    }


    // loginUser(id, password) {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             if(
    //                 (id ==={'ellie' && password === 'dream') ||
    //                 (id === 'coder' && password === 'academy')
    //             ) {
    //                 resolve(id);
    //             } else {
    //                 reject(new Error('not found'));
    //             }
    //         }, 1000);
    //     })
    // }

    // getRoles(id) {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             if ( id === 'ellie') {
    //                 resolve({name: 'ellie', role: 'admin'});
    //             } else {
    //                 reject(new Error('no access'));
    //             }
    //         }, 2000);
    //     })
    // }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

// async function userCheck() {
//     const login = await userStorage.loginUser(id, password);
//     const user = await userStorage.getRoles(id);
    
//     return alert(`Hello ${user.name}, you have a ${user.role} role`);
// }

async function userCheck() {
    return Promise.all([userStorage.loginUser(id, password), userStorage.getRoles(id)])
    .then(users => alert(`Hello ${users[1].name}, you have a ${users[1].role} role`))
}

userCheck().catch(console.log);
