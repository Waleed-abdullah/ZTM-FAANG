// Time : O(n) Space: O(n) worst case for recursive function O(h) where h is the height of the tree
var rightSideView = function (root) {
  if (!root) return [];

  const result = [];
  DFS(root, 0, result);
  return result;
};

const DFS = (node, currentLevel = 0, result) => {
  if (!node) return;

  if (currentLevel >= result.length) {
    result.push(node.val);
  }

  if (node.right) DFS(node.right, currentLevel + 1, result);
  if (node.left) DFS(node.left, currentLevel + 1, result);
};
