//Naive approach time O(n) space O(n)
var detectCycle = function (head) {
  if (!head) return null;

  let currentNode = head;
  const seenNodes = new Set();

  while (!seenNodes.has(currentNode)) {
    if (currentNode.next === null) return null;
    seenNodes.add(currentNode);
    currentNode = currentNode.next;
  }
  return currentNode;
};
