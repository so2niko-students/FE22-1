//reduce
//Проходит по массиву и комбинирует(аккумулирует) результат по каждой итерации
//подсчет чисел(массив чисел), получение результирующего объекта при проходе по массиву любой конфигурации

function getR(from = 0, to = 10){
    return Math.floor(Math.random() * (to - from + 1) + from);
}

const users = Array(getR()).fill(1).map(o=> getR(0, 100));
const try1 = Array(getR(10, 100)).fill(getR);
const try2 = Array(getR(10, 100)).fill(getR(1, 100));
const try3 = Array(getR(10, 100)).map(_ => getR(1, 100));
// console.log(users);
// console.log(try1);
// console.log(try2);
// console.log(try3);

// console.log('even: ', users.reduce((acc, el) => {
//     return acc + (el + 1) % 2;
// }, 0));

const wallet = {
    owner : 'Nick',
    total : 1000
};



// function Wallet(){
//     return {
//         owner : getR(65535, 1023243545).toString(16),
//         total : getR(1, 10000)
//     };
// }

function Wallet(){//!Функция конструктор
    this.owner = getR(65535, 1023243545).toString(16);
    this.total = getR(1, 10000);
}

class WalletLeather{
    constructor(){
        this.owner = getR(65535, 1023243545).toString(16);
        this.total = getR(1, 10000);
    }
}

const wallets = [];

for(let i = 0; i < 10; i++){
    const w = new WalletLeather();
    wallets.push(w);
}

console.log(wallets)