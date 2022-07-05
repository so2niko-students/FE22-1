const RUN_ARRAY = [{surname: 'Evans   ', run1: 50, run2: 52, run3: 4,},
                {surname: 'Joyner  ', run1: 51, run2: 48, run3: 52,},
                {surname: 'Christen', run1: 47, run2: 48, run3: 49,},
                {surname: 'Owens   ', run1: 52, run2: 47, run3: 46,},
                {surname: 'Lewis   ', run1: 49, run2: 52, run3: 55,},
                {surname: 'Felix   ', run1: 154, run2: 50, run3: 51,},];


const RUN_WITH_TOTAL = runArray.map(item => ({
        ... item, //деструктуризация объекта item - разбивка на все его свойства
        totalRun: +((item.run1 + item.run2 + item.run3) / 3).toFixed(2),
    }));

// самый медленный спортсмен

function getFastSlowRunner(runners, type = 'fast'){
    const FUNC = {
        fast : 'min',
        slow : 'max'
    };
    const maxMin = FUNC[type];

    const mostValue = Math[maxMin].apply(Math, runners.map(item => item.totalRun));

    return runners.find(runner => runner.totalRun === mostValue).surname;
}

console.log(`Самый медленный спортсмен: ${getFastSlowRunner(RUN_WITH_TOTAL, 'slow')}`);
console.log(`Самый быстрый спортсмен: ${getFastSlowRunner(RUN_WITH_TOTAL)}`);


const val = 'speed';

const o = {
    name : '34343',
    speed : 1000,
    'Blue notebook' : 120000,
    '&9rwe432lkfg sdflk gjsdflg34 t934____+f++f 5t4' : true
};

console.log('val: ', o[val]);

//Object.keys
//Object.values
//Objest.entries