export default interface Tree<E> {
  // root: TreeNode<E> | null;

  /**
   * Insert new values in the tree
   * @param values rest parameters
   * @return {void}
   */
  insert(...values: number[]): void;

  /**
   * Delete a value from the tree
   * @param value number want to delete feom the tree
   * @return {boolean} count of total number of elements in list
   */
  delete(value: number): boolean;

  /**
   * print all the elements of List
   * @param callback callback function, iterate over values of list
   * @return {void}
   */
  traverse(callback?: (value: number) => E, method?: string): void;
}
