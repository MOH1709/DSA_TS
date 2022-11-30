import LLNode from "./LLNode";
import { LinkedListIf } from "../interfaces";
import SinglyLL from "./SinglyLL";

export default class DoublyLL<E>
  extends SinglyLL<E>
  implements LinkedListIf<E>
{
  insert(...values: E[]): number {
    for (let value of values) {
      if (this.tail === null) {
        this.head = new LLNode(value);
        this.tail = this.head;
      } else {
        this.tail.next = new LLNode(value);
        this.tail.next.prev = this.tail;
        this.tail = this.tail.next;
      }

      this.size++;
    }

    return this.size;
  }

  // Traverse in Reverse Order
  reverse(callback?: ((value: E) => unknown) | undefined): void {
    for (let i = this.tail; i !== null; i = i.prev ?? null) {
      if (typeof callback === "function") {
        callback(i.value);
      }
    }
  }
}
