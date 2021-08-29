/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
  if (!head) return null;
  if (!head.child && !head.next) return head;

  let currentNode = head;

  while (currentNode) {
    if (currentNode.child) {
      const child = currentNode.child;
      const tail = currentNode.next;
      currentNode.next = child;
      child.prev = currentNode;
      currentNode.child = null;

      if (tail) {
        let childList = child;
        let childTail = null;

        while (childList) {
          if (childList.next === null) {
            childTail = childList;
          }
          childList = childList.next;
        }
        childTail.next = tail;
        tail.prev = childTail;
      }
    }
    currentNode = currentNode.next;
  }
  return head;
};
