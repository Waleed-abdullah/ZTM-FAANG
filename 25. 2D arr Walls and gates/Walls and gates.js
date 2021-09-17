//Time : O(n) Space: O(n)

const INF = Infinity;

const grid = [
  [INF, -1, 0, INF, INF],
  [INF, INF, INF, -1, -1],
  [INF, 0, -1, INF, -1],
  [0, -1, INF, -1, -1],
];

const testMatrix = [
  [INF, -1, 0, INF],
  [INF, INF, INF, 0],
  [INF, -1, INF, -1],
  [0, -1, INF, INF],
];

const WALL = -1;
const GATE = 0;
const EMPTY = Infinity;
const directions = [
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1], //left
];

const dfs = (grid, row, col, count) => {
  if (
    row < 0 ||
    row >= grid.length ||
    col < 0 ||
    col >= grid[row].length ||
    count > grid[row][col]
  )
    return;

  grid[row][col] = count;

  for (let i = 0; i < directions.length; i++) {
    const [nextRow, nextCol] = [directions[i][0] + row, directions[i][1] + col];

    dfs(grid, nextRow, nextCol, count + 1);
  }
};

const wallsAndGates = (rooms) => {
  for (let row = 0; row < rooms.length; row++) {
    for (let col = 0; col < rooms[row].length; col++) {
      if (rooms[row][col] === GATE) dfs(rooms, row, col, 0);
    }
  }
};

wallsAndGates(grid);

console.log(grid);
