function findNum(firstNum, secondNum) {    
    if(isNaN(firstNum) || isNaN(secondNum) || firstNum >= secondNum) {
        console.warn('Ошибка входных данных');
        return false;
    }

    let start = Math.trunc(firstNum/10);
    let end   = Math.trunc(secondNum/10);
    let check = firstNum%10;

    
    if(start < check && check != 0) {
        start ++;
    }
    
    check = secondNum%10;
    if(end > check || check == 0) {
        end --;
    }

    let anw = ''; 
    for (let i = start; i<=end; i++){
        anw += `${i}${i}`;
        if(i<end){
          anw += ', '; 
        }
    }
    return anw;
}

console.log('11 - 99 ==> ', findNum(11, 99));
console.log('27 - 63 ==> ', findNum(27, 63));
console.log('-6 - 60 ==> ', findNum(-6, 60));
console.log('90 - 96 ==> ', findNum(90, 96));
console.log('70 - 22 ==> ', findNum(70, 22));
console.log('1 - 123 ==> ', findNum(1, 123));