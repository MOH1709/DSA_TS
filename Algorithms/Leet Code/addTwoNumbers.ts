import { ListNode } from "../../Linear_DS";

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

type listnode = ListNode<number> | null;
export default function addTwoNumbers(l1: listnode, l2: listnode): listnode {
  let sumHead: listnode = new ListNode(0, null),
    cur: listnode = sumHead,
    carry: number = 0;

  while (l1 || l2) {
    let val1: number = l1 ? l1.value : 0;
    let val2: number = l2 ? l2.value : 0;
    let sum: number = val1 + val2 + carry;

    // assigning the value of carry w.r.t sum
    carry = sum > 9 ? 1 : 0;
    cur = cur.next = new ListNode(sum % 10, null);

    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }

  // checking existance of carry after addition
  if (carry === 1) {
    cur.next = new ListNode(carry, null);
  }

  return sumHead.next;
}
