import { ListNode } from "../../Linear_DS";
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */

type listnode = ListNode<number> | null;
export default function mergeKLists(lists: listnode[]): listnode {
  let n: number = lists.length - 1;
  for (let i: number = 0; i < n; i++) {
    lists[i + 1] = merge2List(lists[i], lists[i + 1]);
  }

  return n == -1 ? null : lists[n];
}

function merge2List(l1: listnode, l2: listnode) {
  let ptr: listnode = new ListNode<number>(-1);
  let head: listnode = ptr;

  while (l1 !== null && l2 !== null) {
    if (l1.value < l2.value) {
      ptr.next = l1;
      l1 = l1.next;
    } else {
      ptr.next = l2;
      l2 = l2.next;
    }
    ptr = ptr.next;
  }

  ptr.next = l1 != null ? l1 : l2;
  return head.next;
}
