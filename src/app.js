const { generate } = require("./generate.js");
const { solve } = require("./solve.js");

const app = () => {
  const problemArr = generate();
  solve(problemArr);
};

app();
