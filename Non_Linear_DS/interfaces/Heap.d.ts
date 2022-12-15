export default interface Heap<E> {
  /**
   * function to add values in heap
   * @param values rest parameter to add in heap
   * @return {number} return the length of heap
   */
  add(...values: number[]): number;

  /**
   * function to delete root values in heap
   * @return {number} return the deleted value
   */
  delete(): number | undefined;

  /**
   * print all the elements of heap
   * @param callback callback function, iterate over values of heap
   * @return {void}
   */
  traverse(callback?: (value: number) => unknown): void;
}
