//Floyd's tortoise and hare algorithm

//Time : O(n) Space O(1)

var detectCycle = function (head) {
  if (!head) return null;

  let hare = head;
  let tort = head;

  while (true) {
    hare = hare.next;
    tort = tort.next;

    if (hare === null || hare.next === null) return null;
    else hare = hare.next;

    if (hare === tort) break;
  }

  let p1 = head;
  let p2 = tort;

  while (p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
  }

  return p2;
};
