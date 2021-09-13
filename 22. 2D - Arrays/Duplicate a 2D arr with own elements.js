// This code is used to duplicate a 2d array with false elements for DFS
const arr2d = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];

const newArr = new Array(arr2d.length)
  .fill(0)
  .map(() => new Array(arr2d[0].length).fill(false));
console.log(newArr);
