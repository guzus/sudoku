const { generate } = require("./generate.js");
const { solve } = require("./solve.js");

const app = () => {
  const problemArr = generate();
  const resultArray = solve(problemArr);
};

app();
