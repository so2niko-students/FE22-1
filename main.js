// alert('In main JS file');

a = 435353;
console.log(a);

// $_vasya_$Petya22 = 44;
// console.log($_vasya_$Petya22);

var a = 3;
let $_vasya_$Petya22 = 'Василий Петров';//Объявление и инициализация переменной
const YEAR = 2022;

//Именование переменных и констант
// camelCase, uefa, keyboard, blackFriday
// UPPER_CASE, UEFA, KEYBOARD, BLACK_FRIDAY
// snake_case, uefa, keyboard, black_friday
// PascalCase, Uefa, Keyboard, BlackFriday
// kebab-style, uefa, keybord, black-friday

//! Типы данных
// Строка - String
// Число - Number
// Логичекий - Boolean (ДА/НЕТ -true/false)
// Неопределено - Undefined
// Ничего - Null
// Symbol
// BigInt
//? Object

// let conf = confirm('Are you shure?');
// console.log(conf);

// prompt('Enter something');

//! Операторы
//a, 4 - операнды
// = - оператор
// операция - присваивание
a = 4 == 4;
//? по количеству операндов
// с одним операндом
a++; // a = a + 1;
a--; // a = a - 1;
++a; // a = a + 1;
--a; // a = a - 1;
+a; // a
-a; // a
!a; // false
~a; // -5
typeof a; // Number

// с двумя операндами
a = 4;
a + 4;
a - 4;
a * 4;
a += 4; // a = a + 4;
a ** 4;
//и дальше

// с тремя операндами
// тернарное выражение
a == 4 ? console.log('Yes, it is 4') : console.log('No, it is not 4');
// (Условие) ? Действие_Да : Действие_Нет

let budget = 1000;
let bill = Number(prompt('What`s the price?'));
budget -= bill;
const outputTxt = 'You have ' + budget;
alert(outputTxt);