//
// This is only a SKELETON file for the 'Minesweeper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const annotate = (input) => {
  // Check if the input is null, undefined, or an empty array
  if (!input || input.length === 0) {
    return [];
  }

  const rows = input.length;
  const cols = input[0].length;
  const result = [];

  // Function to check if a cell is a mine ('*')
  const isMine = (row, col) => input[row][col] === '*';

  // Function to count the number of adjacent mines for a given cell
  const countAdjacentMines = (row, col) => {
    let count = 0;
    for (let dr = -1; dr <= 1; dr++) {
      for (let dc = -1; dc <= 1; dc++) {
        if (dr === 0 && dc === 0) continue; // Skip the cell itself
        const newRow = row + dr;
        const newCol = col + dc;
        if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
          if (isMine(newRow, newCol)) count++;
        }
      }
    }
    return count;
  };

  // Map through each row and cell in the board
  return input.map((row, rowIndex) => {
    return row
      .split('')
      .map((cell, colIndex) => {
        if (cell === ' ') {
          // For each empty cell, count the number of adjacent mines
          const adjacentMines = countAdjacentMines(rowIndex, colIndex);
          return adjacentMines === 0 ? ' ' : adjacentMines.toString();
        }
        return cell;
      })
      .join('');
  });
};
