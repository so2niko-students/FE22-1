mocha.setup('bdd');
const ass = chai.assert;

const sum = (...nums) => {
    return nums.reduce((acc, el) => +acc + +el, 0);
}

//TESTS
describe('SUM', () => {
    it('2 + 2 = 4', () => { ass.equal(sum(2, 2), 4); });
    it('0 + 0 = 0', () => { ass.equal(sum(0, 0), 0); });
    it('0 + 1 = 1', () => { ass.equal(sum(0, 1), 1); });
    it('-1 + 0 = -1', () => { ass.equal(sum(-1, 0), -1); });
    it('2 + 2 + 3 = 7', () => { ass.equal(sum(2, 2, 3), 7); });
    it('2 = 2', () => { ass.equal(sum(2), 2); });
    it('0 + 3 + (-2) + 11 = 12', () => { ass.equal(sum(0, 3, -2, 11), 12); });
    it('no arg = 0', () => { ass.equal(sum(), 0); });
    it('"2" + "2" = 4', () => { ass.equal(sum("2", "2"), 4); });
    it('1 + 1 + 1 + 1 + 1 = 5', () => { ass.equal(sum(1, 1, 1, 1, 1), 5); });
});

mocha.run();

