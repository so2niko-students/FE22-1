//!map
//Формирование нового на базе старого (Обработка, оформление)
const inFoots = [1, 55, 3, 64, 4, 32, 7];
// const inM = map(inFoots, .3048);
// const inMM = map(inM, 1000);

// console.log(inM);

// function map(arr, multi){
//     const inM = [];
//     for(let i = 0; i < arr.length; i++){
//         const m = arr[i] * multi;
//         inM.push(m);
//     }
//     return inM;
// }

// const inM = inFoots.map((el, i, arr) => {
//     return el * .3048;
// });

const inM = inFoots.map(el => el * .3048);

//!filter
//Получить массив, каждый элемент которого соответствует условию
const averTempByMonth = [-10, -15, -5, 15, 23, 30, 33, 33, 28, 20, 17, 5];
// const tempBelowZero = [];
// for(let i = 0; i < averTempByMonth.length; i++){
//     if(averTempByMonth[i] < 0){
//         tempBelowZero.push(averTempByMonth[i]);
//     }
// }

// const tempBelowZero = averTempByMonth.filter((el, i, arr) => {
//     return el < 0;
// });

const tempBelowZero = averTempByMonth.filter(el => el < 0);

console.log(tempBelowZero);

//!find
//Находим в массиве элемент подходящий для наших условий

const neighbours = [-90, -200, -564, 111, -9000, -2300, 100];
// let firstMinus500 = 0;
// for(let i = 0; i < neighbours.length; i++){
//     console.log(i, neighbours[i])
//     if(neighbours[i] < -500){
//         firstMinus500 = neighbours[i];
//         break;
//     }
// }

//если не нашел в массиве возращает undefined
const firstMinus500 = neighbours.find((el, i) => {
    console.log(i, el);
    return el < -500;
});
//!findIndex
//если не нашел в массиве возращает -1
const firstMinus500Index = neighbours.findIndex(el => el < -500);

//!fill
// console.log(neighbours.fill(33));//Все элементы
// console.log(neighbours.fill(33, 3));//С третьего
// console.log(neighbours.fill(33, 1, 3));//с 1 по 3 не включительно элементы

//!some vs every
//some - хотя-бы 1 элемент массива соблюдает условию
//останавливается на первому true

//every - все элементы массива должны соблюдать условию
//останавливается на первом false

const nums = [123, 565, 44, 11, 68787, 443, 21, 676, 787, 4.3, 546, 7.7, .8];

//Все ли числа целые?
// let isAllInt = true;
// for(let i = 0; i < nums.length; i++){
    //// if(nums[i] % 1){
//     if(!Number.isInteger(nums[i])){
//         isAllInt = false;
//         break;
//     }
// }

const isAllInt = nums.every(el => !(el % 1));
const isOneFloat = nums.some(el => !(el % 1));

console.log('All elements is integer : ', isAllInt);