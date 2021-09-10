// Time: O(n) Space: O(n)
var isValidBST = function (node, low = null, high = null) {
  if (!node) return true;
  //check with the boundaries
  if (
    (high !== null && node.val >= high) ||
    (low !== null && node.val <= low)
  ) {
    return false;
  }
  //validate right and left nodes of each subtree according to the boundries given
  return (
    isValidBST(node.left, low, node.val) &&
    isValidBST(node.right, node.val, high)
  );
};
