import { LLNode } from "../Linked List";

export default interface Queue<E> {
  // front: number | LLNode<E> | null;
  // rear: number | LLNode<E> | null;

  /**
   * Adds an element to the Queue
   * @param values values to be insert in Queue
   * @return {number} The number of elements in the Queue.
   */
  enqueue(...values: E[]): number;

  /**
   * delete the element fron the queue
   * @return {E} the value which is served by the queue.
   */
  dequeue(): E;

  /**
   * returns the element which is going to serve next in the Queue
   * @return {E} the element which is going to serve next.
   */
  peek(): E;

  /**
   * print all the elements of List
   * @param callback callback function, iterate over values of list
   * @return {void}
   */
  traverse(callback?: (value: E) => unknown): void;
}
