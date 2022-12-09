import { SinglyLL } from "../../Linear_DS/interfaces/Linked List";

export default interface Graph<E> {
  /**
   * create a new node in graph
   * @param value number to access the node
   * @param connects array to which the node have to connect
   * @return {SinglyLL|null}
   */
  connect(node: unknown, connects: unknown[]): SinglyLL<unknown> | null;

  /**
   * delete the node
   * @param value node value to delete the node
   * @return value to be deleted exist or not
   */
  delete(value: unknown): boolean;

  /**
   * print all the elements of List
   * @param callback callback function, iterate over values of list
   * @return {void}
   */
  traverse(
    from: unknown,
    callback?: (value: unknown) => unknown,
    method: "BFS" | "DFS"
  ): void;
}
