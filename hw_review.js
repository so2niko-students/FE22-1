// Find a Chair
function meeting(x, need) {
  if (need === 0) {
    return "Game on!";
  }
  let counter = 0;
  let result = [];
  for (let i = 0; i < x.length; i++) {
    let temp = x[i][1] - x[i][0].length;
    if (temp < 0) {
      temp = 0;
    }
    if (counter + temp >= need) {
      temp = need - counter;
    }
    result[i] = temp;
    counter += temp;

    if (counter === need) {
      break;
    }
  }
  return counter < need ? "Not enough!" : result;
}
// console.log(meeting([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5))
// console.log(meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4))
// console.log(meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0))
// console.log(meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 10))

// console.log(meeting([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 8], ['XXX', 1]], 5));

//     if (action == '+') {
//         result = a + b
//     }
//     if (action == '-') {
//         result = a - b
//     }
//     if (action == '*') {
//         result = a * b
//     }
//     if (action == '/') {
//         result = a / b
//     }

let arr = [
  [2, 1, 0],
  [1, 1, 1],
  [1, 2, 1],
];

console.log(
  "Check [[2, 1, 0],[1, 1, 1],[1, 2, 1]], Winner: 1",
  checkBoard(arr) == 1
);

function checkBoard(array) {
  const arr1 = array.flat();
  const sum1 = arr1[0] * arr1[1] * arr1[2];
  const sum2 = arr1[3] * arr1[4] * arr1[5];
  const sum3 = arr1[6] * arr1[7] * arr1[8];
  const sum4 = arr1[0] * arr1[3] * arr1[6];
  const sum5 = arr1[1] * arr1[4] * arr1[7];
  const sum6 = arr1[2] * arr1[5] * arr1[8];
  const sum7 = arr1[0] * arr1[4] * arr1[8];
  const sum8 = arr1[2] * arr1[4] * arr1[6];
  const arr2 = [sum1, sum2, sum3, sum4, sum5, sum6, sum7, sum8];

  if (arr2.includes(1)) {
    return 1;
  }
  if (arr2.includes(8)) {
    return 2;
  }
  if (arr1.includes(0)) {
    return -1;
  }
  return 0;
}
