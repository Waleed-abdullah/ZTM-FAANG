//Time Complexity O(h^2) or O(log^2 N) Space O(1)
var countNodes = function (root) {
  if (!root) return 0;

  const height = getTreeHeight(root); // O(h)

  if (height === 0) return 1;

  const upperPart = 2 ** height - 1;

  let left = 0,
    right = upperPart;
  while (left < right) {
    //O(h) --> with inner nodeExists function O(h^2)
    const idxToFind = Math.ceil((left + right) / 2);
    if (nodeExists(idxToFind, height, root)) {
      left = idxToFind;
    } else {
      right = idxToFind - 1;
    }
  }

  return upperPart + left + 1;
}; // Total complexity O(h^2 + h) --> O(h^2)

const getTreeHeight = (node) => {
  let count = 0;
  while (node.left) {
    count++;
    node = node.left;
  }
  return count;
};

const nodeExists = (idxToFind, height, node) => {
  let left = 0,
    right = 2 ** height - 1,
    count = 0;

  while (count < height) {
    const mid = Math.ceil((left + right) / 2);
    if (idxToFind >= mid) {
      node = node.right;
      left = mid;
    } else {
      node = node.left;
      right = mid - 1;
    }

    count++;
  }
  return node !== null;
};
