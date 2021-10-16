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

  describe.only("Distinctiveness of Numbers", () => {
    const sudokuArray = Array.from({ length: 9 }, (_, i) => i + 1); // 1~9
    // it("row", (done) => {
    //   const arr = [...array];
    //   for(const row of arr) {
    //     expect(row.sort()).to.equal(sudokuArray);
    //   }
    //   done();
    // });
    it("column", (done) => {
      column_array = [...Array(10)].map((x) => Array());
      arr = [...array];
      for(const row of arr) {
        for(const [j, element] of row.entries()) {
          column_array[j].push(element);
        }
      }
      for(const column of column_array) {
        console.log(column);
        expect(column.sort()).to.equal(sudokuArray);
      }
      done();
    });
    it("block", (done) => {
      block_array = [...Array(10)].map((x) => Array());
      for(const [i, row] of array.entries()) {
        for(const [j, element] of row.entries()) {
          console.log(element);
          block_array[Math.floor(i / 3) * 3 + Math.floor(j / 3)].push(element);
        }
      }
      for(const block of block_array) {
        console.log(block);
        expect(block.sort()).to.equal(sudokuArray);
      }
      done();
    });
  });
};

// validate output

validate(
  solve([
    [9, 0, 0, 6, 0, 0, 0, 2, 0],
    [0, 0, 5, 0, 0, 0, 3, 0, 1],
    [0, 6, 0, 0, 0, 5, 0, 8, 0],
    [3, 0, 0, 0, 9, 0, 2, 0, 6],
    [0, 8, 0, 1, 0, 2, 0, 9, 0],
    [7, 0, 9, 0, 5, 0, 0, 0, 4],
    [0, 7, 0, 5, 0, 0, 0, 3, 0],
    [6, 0, 3, 0, 0, 0, 1, 0, 0],
    [0, 5, 0, 0, 0, 3, 0, 0, 2],
  ])
);
