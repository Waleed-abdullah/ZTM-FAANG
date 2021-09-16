/**
 * @param {number[][]} grid
 * @return {number}
 */

const directions = [
  [1, 0], //up
  [0, 1], //right
  [-1, 0], //down
  [0, -1], //left
];

const orangesRotting = function (grid) {
  if (grid.length === 0 || grid[0].length === 0) return 0;

  let minutes = 0;
  let rottenOranges = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === 2) {
        rottenOranges++;
        minutes += rot(grid, row, col);
      }
      if (rottenOranges > 0 && grid[row][col] === 1) {
        return -1;
      }
    }
  }

  if (rottenOranges === 0) return 0;
  return minutes;
};

const rot = function (grid, row, col) {
  let count = 0;

  for (let i = 0; i < directions.length; i++) {
    const vertical = row + directions[i][0];
    const horizontal = col + directions[i][1];

    if (
      vertical < 0 ||
      vertical >= grid.length ||
      horizontal < 0 ||
      horizontal >= grid[row].length ||
      grid[vertical][horizontal] === 0
    )
      continue;

    if (grid[vertical][horizontal] === 1) {
      grid[vertical][horizontal] = 2;
      count++;
    }
  }

  if (count > 0) return 1;
  else return 0;
};
