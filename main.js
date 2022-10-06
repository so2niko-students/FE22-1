//В консоли показывало описание теста, и галочку - РАБОТАЕТ/ПОЛОМАЛОСЬ

const test = (descr, func , arg = [], answer) => {
    const GOOD = '😄';
    const BAD = '😡';
    const funcAnswer = func(...arg);
    const isRight = funcAnswer === answer;
    const consStr = `${ descr } : ${ isRight ? GOOD : BAD }`;
    console.log(consStr);
}

const sum = (...nums) => {
    return nums.reduce((acc, el) => +acc + +el, 0);
}

test('2 + 2 = 4', sum, [2, 2], 4);
test('0 + 0 = 0', sum, [0, 0], 0);
test('0 + 1 = 1', sum, [0, 1], 1);
test('-1 + 0 = -1', sum, [-1, 0], -1);
test('2 + 2 + 3 = 7', sum, [2, 2, 3], 7);
test('2 = 2', sum, [2], 2);
test('0 + 3 + (-2) + 11 = 12', sum, [0, 3, -2, 11], 12);
test('no arg = 0', sum, [], 0);
test('"2" + "2" = 4', sum, ["2", "2"], 4);
test('1 + 1 + 1 + 1 + 1 = 5', sum, [1, 1, 1, 1, 1], 5);