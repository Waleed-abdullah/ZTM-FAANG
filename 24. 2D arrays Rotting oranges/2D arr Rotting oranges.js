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
