const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];

const traversalDFS = function (matrix) {
  const seen = new Array(matrix.length)
    .fill(0)
    .map(() => new Array(matrix[0].length).fill(false));

  const values = [];

  dfs(matrix, 0, 0, seen, values);

  return values;
};

const dfs = function (matrix, row, col, seen, values) {
  if (seen[row] === undefined || seen[row][col] === undefined || seen[row][col])
    return;

  values.push(matrix[row][col]);
  seen[row][col] = true;

  for (let i = 0; i < directions.length; i++) {
    const vertical = directions[i][0];
    const horizontal = directions[i][1];

    dfs(matrix, row + vertical, col + horizontal, seen, values);
  }
};

console.log(traversalDFS(matrix));
