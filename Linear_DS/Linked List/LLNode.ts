import { LLNodeIf } from "../interfaces";

export default class LLNode<E> implements LLNodeIf<E> {
  value: E;
  next: LLNode<E> | null;
  prev: LLNode<E> | null;

  constructor(value: E, next?: LLNode<E> | null) {
    this.value = value;
    this.next = next ?? null;
    this.prev = null;
  }
}
