export default interface LinkedList<E> {
  insert(...values: E[]): number;

  delete(values: E): boolean;

  traverse(): void;

  get length(): number;

  isEmpty?(): boolean;
}