const swapPairs = (head) => {
  const dHead = new ListNode(0, head);
  let cur = dHead;
  while (cur.next && cur.next.next) {
    let first = cur.next;
    let second = cur.next.next;
    let temp = cur.next.next.next;
    cur.next = second;
    second.next = first;
    first.next = temp;
    cur = first;
  }
  return dHead.next;
};