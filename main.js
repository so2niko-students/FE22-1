const rooms = {
    0 : 'kitchen',
    1 : 'restroom',
    2 : 'main room',
    3 : 'bedroom',
    4 : 'master bedroom'
};

const roomsArr = ['kitchen','restroom','main room','bedroom', 'master bedroom'];

for(let i = 0; i < 5; i += 1){
    console.log(rooms[i]);
}

console.log(rooms);
console.log(roomsArr);

//!CREATE

const arr1 = [1,2,4,'cat',45654];//литеральный
const arr2 = new Array(123, 'dog', true);//объектный

const arr3 = new Array(10);
console.log('arr3', arr3);

const arr4 = new Array(arr1);
console.log('arr4', arr4);

//!READ

// console.log('arr1[2]', arr1[2]);

//!UPDATE
arr1[99] = 'Девяносто девятый';
arr1[2] = 'Fox';
arr1[-11] = 'Pirate';
arr1[3.14] = 'Pi';
arr1['London'] = 'is a capital';


console.log(arr1.London);
//TODO: add another update methods

//!DELETE

delete arr1[1];
arr1.length = 5000;


console.log('arr1', arr1);