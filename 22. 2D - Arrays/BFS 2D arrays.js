//BFS traversal Time: O(n) Space: O(n)

const directions = [
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1], //left
];

const matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];

const traversalBFS = function (matrix) {
  const seen = new Array(matrix.length)
    .fill(0)
    .map(() => new Array(matrix[0].length).fill(false));

  const values = [];
  const queue = [];
  queue.push([0, 0]);

  while (queue.length > 0) {
    const currentLoc = queue.shift();
    const row = currentLoc[0];
    const col = currentLoc[1];

    if (!seen[row][col]) {
      values.push(matrix[row][col]);
      seen[row][col] = true;
    }

    for (let i = 0; i < directions.length; i++) {
      const vertical = row + directions[i][0];
      const horizontal = col + directions[i][1];

      if (
        seen[vertical] === undefined ||
        seen[vertical][horizontal] === undefined ||
        seen[vertical][horizontal]
      )
        continue;

      queue.push([vertical, horizontal]);
      values.push(matrix[vertical][horizontal]);
      seen[vertical][horizontal] = true;
    }
  }

  return values;
};

const traversalBFS2 = function (matrix) {
  const seen = new Array(matrix.length)
    .fill(0)
    .map(() => new Array(matrix[0].length).fill(false));

  const values = [];

  const queue = [[0, 0]];

  while (queue.length) {
    const currentPos = queue.shift();
    const row = currentPos[0];
    const col = currentPos[1];

    if (
      row < 0 ||
      row >= matrix.length ||
      col < 0 ||
      col >= matrix[0].length ||
      seen[row][col]
    ) {
      continue;
    }

    seen[row][col] = true;
    values.push(matrix[row][col]);

    for (let i = 0; i < directions.length; i++) {
      const currentDir = directions[i];
      queue.push([row + currentDir[0], col + currentDir[1]]);
    }
  }

  return values;
};

console.log(traversalBFS2(matrix));
