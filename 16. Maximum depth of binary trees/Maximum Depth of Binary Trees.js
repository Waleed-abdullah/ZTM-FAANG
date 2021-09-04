// O(n)
var maxDepth = function (root, count = 0) {
  if (!root) return count;

  count++;

  return Math.max(maxDepth(root.left, count), maxDepth(root.right, count));
};
