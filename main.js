//Функции

//function declaration
function sum(a, b){//аргументы
    console.log(arguments);
    const sum = a + b; //тело функции
    return sum; //Возвращаемое значение

    //не рабочий код
}

//function expression
const multi = function(a, b){
    return a * b;
}

//function expression, arrow function
const circleSq = (r) => {
    console.log(arguments);
    const sq = r ** 2 * Math.PI;
    return sq;
}

const pow = (a, b) => a ** b;
const cube = a => a ** 3;


// for(let i = 0; i < 100; i += 1){
//     if(i % 2){
//         continue;
//     }

//     console.log(i);
// }

console.log(sum(1111,32));
// console.log(multi);
// circleSq(3);

//this - контекст выполнения(исполнения)

//рекурсия

function powR(x, n) {
    if (n == 1) {
      return x;
    } else {
      return x * powR(x, n - 1);
    }
  }
  
// console.log('Pow', powR(2, 8980) );

//Методы и свойства
const dog = {
    name : 'Убийца демонов',//свойства объекта
    age : 1200,
    voice : function(){//метод
        console.log(this.name, '--> Auf!');
        console.log(this);
    }
}

dog.voice();

function voice(){//метод
    console.log(this.name, '--> Auf!');
    console.log(this);
}

voice();