import { QueueIf } from "../interfaces";
import { LLNode, SinglyLL } from "../Linked List";

export default class Priority<E> extends SinglyLL<E> implements QueueIf<E> {
  callback(qVal: E, val: E): boolean {
    return qVal < val;
  }

  constructor(hasHigherPriority?: (queueValue: E, yourValue: E) => boolean) {
    super();
    if (hasHigherPriority) {
      this.callback = hasHigherPriority;
    }
  }

  enqueue(...values: E[]): number {
    for (let value of values) {
      let cur: LLNode<E> | null = this.head;
      let prev: LLNode<E> | null = null;

      while (cur && this.callback(cur.value, value)) {
        prev = cur;
        cur = cur.next;
      }

      const newNode = new LLNode(value);
      if (prev) {
        prev.next = newNode;
        prev.next.next = cur;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }

      this.size++;
    }

    return this.size;
  }

  dequeue(): E | undefined {
    const servedVal: E | undefined = this.head?.value;
    this.head = this.head?.next ?? null;

    return servedVal;
  }

  peek(): E | undefined {
    return this.head?.value;
  }
}
