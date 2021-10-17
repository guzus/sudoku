const assert = require("assert");
const { expect } = require("chai");
const { generate } = require("../src/generate.js");
const { solve } = require("../src/solve.js");

const validate = (array) => {
  describe("Size of Array", () => {
    it("should be 9*9", () => {
      expect(array.length).equal(9);
      array.forEach((element) => {
        expect(element.length).equal(9);
      });
    });
  });

  describe("Range of Numbers", () => {
    it("should be belong to [1,9]", () => {
      array.forEach((row) => {
        row.forEach((element) => {
          expect(element).to.be.a("number");
          expect(element).to.within(1, 9);
        });
      });
    });
  });

  describe("Distinctiveness of Numbers", () => {
    const sudokuArray = Array.from({ length: 9 }, (_, i) => i + 1); // 1~9
    it("row", (done) => {
      array.forEach((row) => {
        expect(row).to.have.members(sudokuArray);
      });
      done();
    });
    it("column", (done) => {
      let column_array = [...Array(9)].map((x) => Array());
      array.forEach((row) => {
        row.forEach((element, j) => {
          column_array[j].push(element);
        });
      });
      column_array.forEach((column) => {
        expect(column).to.have.members(sudokuArray);
      });
      done();
    });
    it("block", (done) => {
      let block_array = [...Array(9)].map((x) => Array());
      array.forEach((row, i) => {
        row.forEach((element, j) => {
          block_array[Math.floor(i / 3) * 3 + Math.floor(j / 3)].push(element);
        });
      });
      block_array.forEach((block) => {
        expect(block).to.have.members(sudokuArray);
      });
      done();
    });
  });
};

// bring set of sudoku from sample_sudoku
// or generate new one via generate.js


// validate(
//   solve([
//     [9, 0, 0, 6, 0, 0, 0, 2, 0],
//     [0, 0, 5, 0, 0, 0, 3, 0, 1],
//     [0, 6, 0, 0, 0, 5, 0, 8, 0],
//     [3, 0, 0, 0, 9, 0, 2, 0, 6],
//     [0, 8, 0, 1, 0, 2, 0, 9, 0],
//     [7, 0, 9, 0, 5, 0, 0, 0, 4],
//     [0, 7, 0, 5, 0, 0, 0, 3, 0],
//     [6, 0, 3, 0, 0, 0, 1, 0, 0],
//     [0, 5, 0, 0, 0, 3, 0, 0, 2],
//   ])
// );
