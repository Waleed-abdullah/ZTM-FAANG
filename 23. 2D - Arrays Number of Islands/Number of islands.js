const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

var numIslands = function (grid) {
  if (!grid.length) return 0;

  const seen = new Array(grid.length)
    .fill(0)
    .map((el, index) => new Array(grid[index].length).fill(false));

  let islands = 0;

  islands = DFS(grid, 0, 0, seen, islands);

  return islands;
};

const DFS = function (grid, row, col, seen, islands) {
  if (
    row < 0 ||
    row > grid.length ||
    col > grid[row].length ||
    col < 0 ||
    (grid[row][col] === '1' && !seen[row][col])
  ) {
    if (grid[row][col] !== undefined && grid[row][col] === '1')
      seen[row][col] = true;
    return true;
  }

  if (seen[row] === undefined || seen[row][col] === undefined || seen[row][col])
    return false;

  for (let i = 0; i < directions.length; i++) {
    const vertical = directions[i][0] + row;
    const horizontal = directions[i][0] + col;

    if (DFS(grid, vertical, horizontal, seen, islands)) {
      islands++;
    }
  }

  return islands;
};
