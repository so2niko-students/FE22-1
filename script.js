// let i = 0;

// while(i < 10){
//     console.log('i', i);
//     i++;
// }

// //for
// let j = 10;
// for(;j--;){
//     console.log('j', j);
// }

// for(let j = 0, k = 3434, y = true, z = { name : 'Nick' }; j < 10 || j > 123 ; j++, k -= 44){
//     console.log('j', j);
// }

// console.log(i);

// do{
//     i = prompt('Введите i < 100');
// }while(i > 99);

//не нарушать ПДД = isBreakingRules
//правильно вести авто = isRightDriving
//быть в трезвом уме и памяти = isClearMind

const isBreakingRules = confirm('нарушать ПДД');
const fails = 1;
const isRightDriving = confirm('правильно вести авто');
const isClearMind = confirm('быть в трезвом уме и памяти');
const averageSpeed = +prompt('Средняя скорость', 50);

if(isClearMind && isRightDriving && (!isBreakingRules || fails <= 2) && averageSpeed <= 50){
    console.log('Вы сдали');
}else{
    console.log('Вы не сдали');
}


