//Time complexity: O(n) Space complexity: O(n)

const directions = [
  [1, 0], //up
  [0, 1], //right
  [-1, 0], //down
  [0, -1], //left
];

const orangesRotting = function (grid) {
  if (grid.length === 0 || grid[0].length === 0) return 0;

  let minutes = 0;
  let freshOranges = 0;
  const rottenOranges = []; //queue for BFS

  freshOranges = countOranges(grid, rottenOranges);

  while (rottenOranges.length) {
    const length = rottenOranges.length;
    let count = 0;

    for (let i = 0; i < length; i++) {
      const [row, col] = rottenOranges.shift();

      for (let j = 0; j < directions.length; j++) {
        const currRow = row + directions[j][0];
        const currCol = col + directions[j][1];

        if (
          currRow < 0 ||
          currRow >= grid.length ||
          currCol < 0 ||
          currCol >= grid[currRow].length
        )
          continue;

        if (grid[currRow][currCol] === 1) {
          grid[currRow][currCol] = 2;
          rottenOranges.push([currRow, currCol]);
          freshOranges--;
          count++;
        }
      }
    }

    if (count > 0) minutes++;
  }

  if (freshOranges > 0) return -1;
  else return minutes;
};

const countOranges = function (grid, rottenOranges) {
  let freshOranges = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === 2) rottenOranges.push([row, col]);
      else if (grid[row][col] === 1) freshOranges++;
    }
  }
  return freshOranges;
};

//another way to solve
const directions = [
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1], //left
];

const ROTTEN = 2;
const FRESH = 1;
const EMPTY = 0;

const orangesRotting2 = function (matrix) {
  if (matrix.length === 0) return 0;

  const queue = [];
  let freshOranges = 0;

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === ROTTEN) {
        queue.push([row, col]);
      }

      if (matrix[row][col] === FRESH) {
        freshOranges++;
      }
    }
  }

  let minutes = 0;
  let currentQueueSize = queue.length;

  while (queue.length > 0) {
    if (currentQueueSize === 0) {
      currentQueueSize = queue.length;
      minutes++;
    }

    const currentOrange = queue.shift();
    currentQueueSize--;
    const row = currentOrange[0];
    const col = currentOrange[1];

    for (let i = 0; i < directions.length; i++) {
      const currentDir = directions[i];
      const nextRow = row + currentDir[0];
      const nextCol = col + currentDir[1];

      if (
        nextRow < 0 ||
        nextRow >= matrix.length ||
        nextCol < 0 ||
        nextCol >= matrix[0].length
      ) {
        continue;
      }

      if (matrix[nextRow][nextCol] === FRESH) {
        matrix[nextRow][nextCol] = 2;
        freshOranges--;
        queue.push([nextRow, nextCol]);
      }
    }
  }

  if (freshOranges !== 0) {
    return -1;
  }

  return minutes;
};
