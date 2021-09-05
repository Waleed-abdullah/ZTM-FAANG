// Breadth first search solution
var rightSideView = function (root) {
  if (!root) return [];

  const queue = [root];
  const result = [];
  while (queue.length) {
    const length = queue.length;
    const rightMost = queue[queue.length - 1].val;

    for (let count = 0; count < length; count++) {
      const currentNode = queue.shift();
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    result.push(rightMost);
  }
  return result;
};
