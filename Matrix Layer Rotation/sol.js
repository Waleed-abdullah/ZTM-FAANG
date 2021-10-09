//Time: O(l*r*(2(r+c)))

const matrix = [
  [1, 2, 3, 4],
  [12, 1, 2, 5],
  [11, 4, 3, 6],
  [10, 9, 8, 7],
];

const matrixRotation = function (matrix, r) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const layers = Math.min(rows, cols) / 2;

  for (let i = 0; i < layers; i++) {
    //optimization for 360 degree rotations
    const numRotations = r % (2 * (rows + cols - 4 * i) - 4);
    for (let rotations = 0; rotations < numRotations; rotations++) {
      let holder = 0;
      //rotate the left col
      for (let idx = i; idx < rows - i; idx++) {
        let tempVal = matrix[idx][i];
        matrix[idx][i] = holder;
        holder = tempVal;
      }
      //rotate bottom row
      for (let idx = i + 1; idx < cols - i - 1; idx++) {
        let tempVal = matrix[rows - i - 1][idx];
        matrix[rows - i - 1][idx] = holder;
        holder = tempVal;
      }
      //rotate right col
      for (let idx = rows - i - 1; idx > i; idx--) {
        let tempVal = matrix[idx][cols - i - 1];
        matrix[idx][cols - i - 1] = holder;
        holder = tempVal;
      }
      //rotate top row
      for (let idx = cols - i - 1; idx >= i; idx--) {
        let tempVal = matrix[i][idx];
        matrix[i][idx] = holder;
        holder = tempVal;
      }
    }
  }
  return matrix;
};

console.log(matrixRotation(matrix, 1));
