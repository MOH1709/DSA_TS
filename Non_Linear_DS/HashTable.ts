import { HashTableIf } from "./interfaces";

export default class HashTable<E> implements HashTableIf<E> {
  private map: E[][];
  private size: number;
  private hashFunction(value: number): number {
    return value % this.size;
  }

  constructor(size: number = 10) {
    this.size = size;
    this.map = new Array(size).fill(null);
  }

  set(key: number, value: E): E {
    let pos: number = this.hashFunction(key);

    if (this.map[pos] === null) {
      this.map[pos] = [value];
    } else {
      this.map[pos].push(value);
    }

    return value;
  }

  get(key: number): E[] | null {
    let pos: number = this.hashFunction(key);

    return this.map[pos];
  }

  has(value: E): boolean {
    return this.map.some((values) => values?.includes(value));
  }

  delete(key: number): E[] {
    let pos: number = this.hashFunction(key);
    let deletedValues = this.map[pos];
    this.map[pos] = [];

    return deletedValues;
  }
}
