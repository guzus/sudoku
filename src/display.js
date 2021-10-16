const MODE = {
  BLANK: 0, // display blank space with blank
  ZERO: 1, // display blank space with zero
};
const DISPLAY_MODE = MODE.BLANK;
const DISPLAY_LINE = 12;
const DISPLAY_FPS = 1000;
const TEST_MODE_DISPLAY_FPS = 1000;

// elements : Array of sudoku
const displayHorizontally = (sudokus) => {
  let displayString = "";
  let sudokuStrings = [];
  for (const sudoku of sudokus) {
    sudokuStrings.push(getStringFromSudoku(sudoku.name, sudoku.array).split("\n"));
  }

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
  for (const row of arr) {
    for (const element of row) {
      if (DISPLAY_MODE == MODE.BLANK && element === 0) {
        displayString += "  ";
      } else displayString += element + " ";
    }
    displayString += "\n";
  }
  displayString += "\n";
  return displayString;
};

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
}

module.exports = { displayHorizontally };