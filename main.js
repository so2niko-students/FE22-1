//Data types

/*
!Number
тупо числа
12
215245636256
3.443434
-0
Infinity
-Infinity
NaN -- Not a Number

!String
'Днепр'
"Днепр"
`Днепр`

!Boolean
true
false

!Undefined
undefined
!Null
null

!Object

BigInt
Symbol
*/

const pi = 3.1415489435938475943875984357435;
const tableLength = 3; // camelCase
const TableLength = 3; // PascalCase
const table_length = 3; //snake_case
// const table-length = 3; // kebab style - for CSS nice!
const TABLE_LENGTH = 3; //UPPER_CASE
const inf = 1 / 0.00000000000001;
const myNaN = 1 * 'ноутбук';

//?strings
const dn = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste asperiores qui delectus, quo repudiandae in recusandae sed quidem doloribus earum illum corporis, voluptates porro et eum exercitationem ullam voluptatibus provident!';
// console.log(dn[23] + dn[22]);
// console.log(dn.length);
const templStr = `11
                              111${ dn }2            22
22`;

console.log(templStr);

const isVacinated = true;
const isBlackTable = false;

const alex = {
    name : 'Oleksandr',
    surname : 'Rezantsev',
    height : 182,
    age : 32,
    isVacinated : false,
    parents : {
        mother : {

        },
        father : {

        }
    }
};

alex.footSize = 100;

console.log(Math);  


let ball1 = 3;
let ball2 = ball1;
ball1 = 5;
console.log(ball2);

let dog1 = { name : 'Шарик'};
let dog2 = dog1;
dog1.name = 'Шаридзе';
console.log(dog2);

//TODO: Операторы

//по типу действия (математические, логические, строковые и пр.)

//по количеству операндов
let i = 10;
console.log(i++);//10
console.log(i);//11