function displayBoard(board, width) {
  let result = "";
  let line = "\n" + "-".repeat(4 * width - 1) + "\n";
  for (let i = 0; i < board.length; i++) {
    result += " " + board[i] + " " + "|";

    if ((i + 1) % width === 0) {
      if (i + 1 === board.length) {
        return result.slice(0, result.length - 1);
      }
      result = result.slice(0, result.length - 1) + line;
    }
  }

  return result;
}
