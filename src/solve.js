const { displayHorizontally } = require("./display");
let problemArray;

const solve = (arr) => {
  problemArray = arr;
  let resultArray = JSON.parse(JSON.stringify(arr));
  dfs(resultArray);
  return resultArray;
};

const dfs = (arr) => {
  displayHorizontally([
    { name: "Sudoku Problem", array: problemArray },
    { name: "Sudoku Result", array: arr },
  ]);

  const [isFull, [i, j]] = checkFull(arr);
  if (isFull) return;
  const candidates = getCandidates(arr, i, j);
  for (const candidate of candidates) {
    arr[i][j] = candidate;
    dfs(arr);
    if (checkFull(arr)[0]) return;
  }
  arr[i][j] = 0;
};

const checkFull = (arr) => {
  for (const [i, row] of arr.entries()) {
    for (const [j, element] of row.entries()) {
      if (element === 0) {
        return [false, [i, j]];
      }
    }
  }
  return [true, [-1, -1]];
};

const getCandidates = (arr, x, y) => {
  const sudokuArray = Array.from({ length: 9 }, (_, i) => i + 1); // 1~9
  const includedArray = new Array();
  for (const [i, row] of arr.entries()) {
    for (const [j, element] of row.entries()) {
      if (
        x === i ||
        y === j ||
        calculateBlockNumber(x, y) === calculateBlockNumber(i, j)
      ) {
        includedArray.push(element);
      }
    }
  }

  return sudokuArray.filter((n) => !includedArray.includes(n));
};

const calculateBlockNumber = (i, j) => {
  return Math.floor(i / 3) * 3 + Math.floor(j / 3);
};

module.exports = { solve };
