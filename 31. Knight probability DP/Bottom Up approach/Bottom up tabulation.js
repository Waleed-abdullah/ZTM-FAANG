//Time: O(2n^2 * k * 8) -> O(n^2 * k) Space: O(n^2 * k)

const DIRECTIONS = [
  [-2, -1],
  [-2, 1],
  [-1, 2],
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2],
];

var knightProbability = function (N, K, r, c) {
  const dp = new Array(K + 1)
    .fill(0)
    .map(() => new Array(N).fill(0).map(() => new Array(N).fill(0)));

  dp[0][r][c] = 1;

  for (let step = 1; step <= K; step++) {
    for (let row = 0; row < N; row++) {
      for (let col = 0; col < N; col++) {
        for (let i = 0; i < DIRECTIONS.length; i++) {
          const dir = DIRECTIONS[i];
          const prevRow = row + dir[0];
          const prevCol = col + dir[1];
          if (prevRow >= 0 && prevRow < N && prevCol >= 0 && prevCol < N) {
            dp[step][row][col] += dp[step - 1][prevRow][prevCol] / 8;
          }
        }
      }
    }
  }
  let res = 0;
  for (let row = 0; row < N; row++) {
    for (let col = 0; col < N; col++) {
      res += dp[K][row][col];
    }
  }

  return res;
};
