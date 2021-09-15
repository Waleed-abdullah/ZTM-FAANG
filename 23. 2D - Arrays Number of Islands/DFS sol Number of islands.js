const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

var numIslands = function (grid) {
  if (!grid.length) return 0;

  let islands = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === '1') {
        islands++;
        DFS(grid, row, col);
      }
    }
  }

  return islands;
};

const DFS = function (grid, row, col) {
  if (row < 0 || row === grid.length || col < 0 || col === grid[row].length) {
    return;
  }
  if (grid[row][col] === '0') {
    return;
  }

  grid[row][col] = '0';

  for (let i = 0; i < directions.length; i++) {
    const vertical = directions[i][0] + row;
    const horizontal = directions[i][1] + col;

    DFS(grid, vertical, horizontal);
  }
};
