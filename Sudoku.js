function doneOrNot(board) {
  // Check all rows
  if (!checkRows(board)) {
    return "Try again!";
  }

  // Check all columns
  if (!checkColumns(board)) {
    return "Try again!";
  }

  // Check all regions
  if (!checkRegions(board)) {
    return "Try again!";
  }

  return "Finished!";
}

function checkRows(board) {
  let valid = true;
  board.forEach(line => {
    if (!checkLine(line)) {
      valid = false;
      return;
    }
  });
  return valid;
}

function checkColumns(board) {
  let arrayOfColumns = [];
  let valid = true;

  for (let i = 0; i <= 8; i++) {
    let column = [];
    for (let j = 0; j <= 8; j++) {
      column.push(board[j][i]);
    }
    arrayOfColumns.push(column);
  }

  arrayOfColumns.forEach(line => {
    if (!checkLine(line)) {
      valid = false;
      return;
    }
  });
  return valid;
}

function checkRegions(board) {
  let arrayOfRegions = [];
  let valid = true;

  for (let columnOffset = 0; columnOffset <= 6; columnOffset += 3) {
    for (let rowOffset = 0; rowOffset <= 6; rowOffset += 3) {
      let region = [];
      for (
        let column = 0 + columnOffset;
        column <= 2 + columnOffset;
        column++
      ) {
        for (let row = 0 + rowOffset; row <= 2 + rowOffset; row++) {
          region.push(board[row][column]);
        }
      }
      console.log(region);
      arrayOfRegions.push(region);
    }
  }

  arrayOfRegions.forEach(region => {
    if (!checkLine(region)) {
      valid = false;
      return;
    }
  });

  return valid;
}

function checkLine(line) {
  let valid = true;
  const foundNumbers = [];

  line.forEach(elem => {
    if (elem < 0 || elem > 9 || foundNumbers.includes(elem)) {
      valid = false;
      return;
    }
    foundNumbers.push(elem);
  });
  return valid;
}

const board = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

console.log(doneOrNot(board));
