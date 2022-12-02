import { QueueIf } from "../interfaces";
import { DoublyLL, LLNode } from "../Linked List";

export default class Deque<E> extends DoublyLL<E> implements QueueIf<E> {
  enqueue(...values: E[]): number {
    for (let value of values) {
      let new_node = new LLNode(value);

      if (this.tail) {
        this.tail.next = new_node;
        new_node.prev = this.tail;
        this.tail = new_node;
      } else {
        this.head = this.tail = new_node;
      }
    }

    return this.size;
  }

  unshift(...values: E[]): number {
    for (let value of values) {
      let new_node = new LLNode(value);

      if (this.head) {
        new_node.next = this.head;
        this.head.prev = new_node;
        this.head = new_node;
      } else {
        this.head = new_node;
      }

      this.size++;
    }

    return this.size;
  }

  dequeue(): E | undefined {
    let servedValue = this.head?.value;
    this.head = this.head?.next ?? null;
    if (this.head) {
      this.head.prev = null;
    }

    return servedValue;
  }

  pop(): E | undefined {
    let servedValue = this.tail?.value;
    this.tail = this.tail?.prev ?? null;
    if (this.tail) {
      this.tail.next = null;
    }

    return servedValue;
  }

  peek(): E | undefined {
    return this.tail?.value;
  }
}
