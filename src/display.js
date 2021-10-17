const MODE = {
  BLANK: 0, // display blank space with blank
  ZERO: 1, // display blank space with zero
  DOT: 2, // display blank space with dot
};
const DISPLAY_BLANK_SPACE = {
    0: " ",
    1: "0",
    2: ".",
};
const DISPLAY_MODE = MODE.DOT;
const DISPLAY_LINE = 12;
const DISPLAY_FPS = 1000;
const TEST_MODE_DISPLAY_FPS = 1000;

// elements : Array of sudoku
const displayHorizontally = (element) => {
  let displayString = "";
  let sudokuStrings = [];

  element.sudokus.forEach((sudoku) => {
    sudokuStrings.push(
      getStringFromSudoku(sudoku.name, sudoku.array).split("\n")
    );
  });

  displayString += element.status + "\n\n";
  for (let i = 0; i < DISPLAY_LINE; i++) {
    for (const sudokuString of sudokuStrings) {
      displayString += sudokuString[i] + "   ";
    }
    displayString += "\n";
  }
  console.clear();
  console.log(displayString);
  sleep(1000 / DISPLAY_FPS);
};

const getStringFromSudoku = (name, arr) => {
  let displayString = "";
  displayString += name + "    \n\n";
  arr.forEach((row) => {
    row.forEach((element) => {
      if (element === 0) {
        displayString += DISPLAY_BLANK_SPACE[DISPLAY_MODE] + " ";
      }
      else displayString += element + " ";
    });
    displayString += "\n";
  });
  displayString += "\n";
  return displayString;
};

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
}

module.exports = { displayHorizontally };
