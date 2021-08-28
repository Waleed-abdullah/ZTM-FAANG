function reverseLinkedList(head) {
  if (head === null) return null;
  if (head.next === null) return head;

  let currentNode = head;
  let previous = null;
  while (currentNode) {
    const next = currentNode.next;
    currentNode.next = previous;
    previous = currentNode;
    currentNode = next;
  }
  head = previous;
  return head;
}

reverseLinkedList({ value: 4, next: { value: 5, next: null } });
