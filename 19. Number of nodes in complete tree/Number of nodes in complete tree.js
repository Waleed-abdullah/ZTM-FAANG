/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  if (!root) return 0;

  const height = getTreeHeight(root);

  if (height === 0) return 1;

  const upperPart = 2 ** height - 1;

  let left = 0,
    right = upperPart;
  while (left < right) {
    const idxToFind = Math.ceil((left + right) / 2);
    if (nodeExists(idxToFind, height, root)) {
      left = idxToFind;
    } else {
      right = idxToFind - 1;
    }
  }

  return upperPart + left + 1;
};

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
