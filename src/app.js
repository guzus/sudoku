const generate = require("./generate.js").generate;
const solve = require("./solve.js").solve;

const problem_arr = generate();
console.log(`problem: ${problem_arr}`);

const result_arr = solve(problem_arr);
console.log(`result: ${result_arr}`);
