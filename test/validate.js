const assert = require("assert");
const { expect } = require("chai");
const generate = require("../src/generate.js").generate;
const solve = require("../src/solve.js").solve;

function validate(array) {
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
    it("row", () => {
      array.forEach((row) => {
        expect(row.sort()).to.equal(sudokuArray);
      });
    });
    it("column", () => {
      column_array = [...Array(10)].map((x) => Array());
      array.forEach((row) => {
        row.forEach((element, index) => {
          column_array[index].push(element);
        });
      });
      column_array.forEach((column) => {
        expect(column.sort()).to.equal(sudokuArray);
      });
    });
    it("block", () => {
      block_array = [...Array(10)].map((x) => Array());
      array.forEach((row, i) => {
        row.forEach((element, j) => {
          block_array[Math.floor(i/3)*3 + Math.floor(j/3)].push(element);
        });
      });
      block_array.forEach((block) => {
        expect(block.sort()).to.equal(sudokuArray);
      });
    });
  });
}

// validate output

validate([
  [0, 1, 2, 3, 2, 0, 4, 9, 0],
  [0, 1, 2, 3, 2, 0, 4, 9, 0],
  [0, 1, 2, 3, 2, 0, 4, 9, 0],
  [0, 1, 2, 3, 2, 0, 4, 9, 0],
  [0, 1, 2, 3, 2, 0, 4, 9, 0],
  [0, 1, 2, 3, 2, 0, 4, 9, 0],
  [0, 1, 2, 3, 2, 0, 4, 9, 0],
  [0, 1, 2, 3, 2, 0, 4, 9, 0],
  [0, 1, 2, 3, 2, 0, 4, 9, 0],
]);
