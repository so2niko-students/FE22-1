const applesCount = 200;
const applesColor = 'green';
const applesTaste = 'tasty';

// console.log('>', applesCount > 10);
// console.log('>=', applesCount >= 10);
// console.log('<', applesCount < 10);
// console.log('<=', applesCount <= 10);
// console.log('==', applesCount == '200');
// console.log('===', applesCount === '200');
// console.log('!=', applesCount != 10);

//Логические операторы
//! && - оператор И
/*
A B && 
1 1 1
1 0 0
0 1 0
0 0 0
*/
// console.log('> 10 И <1000', applesCount > 10 && applesCount < 100);
//! || - оператор ИЛИ 
// console.log('> 1000 ИЛИ они зеленые', applesCount > 1000 || applesColor == 'green');
/*
A B ||
1 1 1
1 0 1
0 1 1
0 0 0
 */

// true && console.log('test AND');
// false && console.log('test AND - false');

// true || console.log('test OR');
// false || console.log('test OR - false');

//!Преобразование в строку
const applesCountStr = applesCount + '';
const applesCountStr2 = String(applesCount);
// console.log(typeof applesCountStr2);

//!Преобразование в число
const applesCountN = Number(applesCountStr);
const applesCountN2 = +applesCountStr;
const applesCountN3 = 1 * applesCountStr;
const applesCountN4 = applesCountStr / 1;
const applesCountN5 = applesCountStr - 0;
const applesCountN8 = ~~applesCountStr;


const applesCountN6 = Number.parseInt(applesCountStr);
const applesCountN7 = Number.parseFloat(applesCountStr);

// console.log(typeof applesCountN8, applesCountN8);

//!Преобразование в логический тип Boolean
console.log('green', Boolean('green'));
console.log('space', Boolean(' '));
console.log('-Infinity', Boolean(-Infinity));
console.log('{}', Boolean({}));


// будет false
console.log('empty string', Boolean(''));
console.log('0', Boolean(0));
console.log('NaN', Boolean(NaN));
console.log('0n', Boolean(0n));
console.log('null', Boolean(null));
console.log('undefined', Boolean(undefined));
console.log('false', Boolean(false));

//! Условные операторы
const creditCard = prompt('Enter your credit card number, please');
// if(creditCard.length != 16){
//     alert('You must enter all 16 symbols');
// }else{
//     alert('Thank you');
// }

if(creditCard.length == 16){
    alert('Thank you');
}

if(creditCard.length == 16){ alert('Thank you');}
if(creditCard.length == 16) alert('Thank you');
creditCard.length == 16 ? alert('Thank you') : null;
creditCard.length == 16 && alert('Thank you');

// creditCard.length != 16 ? alert('You must enter all 16 symbols') : alert('Thank you');

// alert(creditCard.length != 16 ? 'You must enter all 16 symbols' : 'Thank you');