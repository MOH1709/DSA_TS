/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

import { LLNodeIf } from "../../../Linear_DS/interfaces";

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

type listnode = LLNodeIf<number> | null;
export default function (head: listnode): listnode {
  let slwPtr = head;
  let fastPtr = head;
  let entry = head;

  while (fastPtr && fastPtr.next) {
    slwPtr = slwPtr?.next ?? null;
    fastPtr = fastPtr.next.next;
    if (slwPtr === fastPtr) {
      while (entry !== slwPtr) {
        entry = entry?.next ?? null;
        slwPtr = slwPtr?.next ?? null;
      }
      return slwPtr;
    }
  }
  return null;
}
