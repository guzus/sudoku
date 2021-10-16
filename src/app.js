const { generate } = require("./generate.js");
const { solve } = require("./solve.js");

const app = async () => {
  const problemArr = generate();
  const resultArray = solve(problemArr);
};

app();
