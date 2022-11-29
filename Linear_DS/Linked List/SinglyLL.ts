import { LinkedListIf } from "../interfaces";
import LLNode from "./LLNode";

export class SinglyLL<E> implements LinkedListIf<E> {
  private size: number = 0;
  head: LLNode<E> | null = null;
  tail: LLNode<E> | null = null;

  constructor(...values: E[]) {
    this.insert(...values);
  }

  insert(...values: E[]) {
    for (let value of values) {
      if (this.tail === null) {
        this.tail = new LLNode(value);
        this.head = this.tail;
      } else {
        this.tail.next = new LLNode(value);
        this.tail = this.tail.next;
      }

      this.size++;
    }

    return this.size;
  }

  delete(value: E) {
    let current = this.head;
    let prev = null;

    while (current !== null && current.value !== value) {
      prev = current;
      current = current.next;
    }

    if (current?.value === value && prev) {
      prev.next = current?.next || null;
    } else if (prev?.value === value) {
      this.head = this.head?.next || null;
    } else {
      return false;
    }

    return true;
  }

  traverse() {
    for (let i = this.head; i !== null; i = i.next) {
      console.log(i.value);
    }
  }

  get length() {
    return this.size;
  }

  clear(): void {
    this.head = this.tail = null;
    this.size = 0;
  }
}