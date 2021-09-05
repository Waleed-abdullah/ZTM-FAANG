//Time O(n) Space O(n)
var levelOrder = function (root) {
  if (!root) return [];

  const queue = [root];
  const list = [];

  while (queue.length) {
    const length = queue.length;
    const level = [];
    let i = 0;

    while (i < length) {
      const currentNode = queue.shift();

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);

      level.push(currentNode.val);
      i++;
    }

    list.push(level);
  }
  return list;
};
