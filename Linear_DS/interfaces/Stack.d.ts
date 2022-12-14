import { LLNode } from "../Linked List";

export default interface Stack<E> {
  // top: number | LLNode<E> | null;

  /**
   * Adds an element to the top of the stack.
   * @param item element
   * @return {number} The number of elements in this stack.
   */
  push(item: E): number;

  /**
   * Retrieves and removes the top of the stack.
   * @return {E} The element at the top of the stack. Returns undefined if
   *     this stack is empty.
   */
  pop(): E | undefined;

  /**
   * Retrieves and does not removes the top of the stack.
   * @return {E} The element at the top of the stack. Returns undefined if
   *     this stack is empty.
   */
  peek(): E | undefined;

  /**
   * Returns the number of elements in this stack.
   * @return {number} The number of elements in this stack.
   */
  get length(): number;

  /**
   * Returns true if this stack contains no elements
   * @return {boolean} true is this stack contains no elements
   */
  isEmpty(): boolean;
}
