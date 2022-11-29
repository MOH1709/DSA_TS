export default interface LinkedList<E> {
  /**
   * Insert new values in the list
   * @param values rest parameters
   * @return {number} count of total number of elements in list
   */
  insert(...values: E[]): number;

  /**
   * Deletes an element from the list
   * @return {boolean} true if the value found in the list
   */
  delete(value: E): boolean;

  /**
   * print all the elements of List
   * @param callback callback function, iterate over values of list
   * @return {void}
   */
  traverse(callback?: (value: E) => unknown): void;

  /**
   * Returns the number of elements in List
   * @return {number} count of total number of elements in list
   */
  get length(): number;

  /**
   * Returns true if this List contains no elements
   * @return {boolean} answering if this List contain elements
   */
  isEmpty?(): boolean;
}
