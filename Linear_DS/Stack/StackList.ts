import { StackIf } from "../interfaces";
import { LLNode, SinglyLL } from "../Linked List";

export default class StackList<E> extends SinglyLL<E> implements StackIf<E> {
  protected top: LLNode<E> | null = null;

  push(value: E): number {
    this.top = new LLNode(value);
    this.top.next = this.head;
    this.head = this.top;

    return ++this.size;
  }

  pop(): E | undefined {
    let poppedVal = this.top?.value;

    this.top = this.top?.next || null;
    return poppedVal;
  }

  peek(): E | undefined {
    return this.top?.value;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }
}
