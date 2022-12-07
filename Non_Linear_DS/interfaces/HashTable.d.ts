export default interface HashTable<E> {
  /**
   * @number maximum number of element allowed in map
   */
  // size: number;

  /**
   * set value in a map
   * @param key number to access the value
   * @param value value to be store in table
   * @return void
   */
  set(key: number, value: E): E | undefined;

  /**
   * get value from the map
   * @param key number to access the values
   * @return {E[]} values stores in the input key
   */
  get(key: number): E[] | null;

  /**
   * delete the value related to key
   * @param key number to access the values
   * @return {E[]} values deleted from the map
   */
  delete(key: number): E[];

  /**
   * find the value in map
   * @param value to search in map
   * @return {Boolean} is the value exist in map
   */
  has(value: E): boolean;
}
