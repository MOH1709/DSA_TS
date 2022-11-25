/**
 * StackArray
 * This file provide the implementation of a Stack using Array
 */

import { StackIf } from "./interfaces";

// TODO: do you understand Stack generic Item? 表示一致
export default class StackArray<Type> implements StackIf<Type> {
  private items: Type[];
  private len: number = 0;

  constructor(iterable?: Iterable<Type>) {
    let inputArr: Type[] = iterable ? [...iterable] : [];

    this.len = inputArr.length;
    this.items = inputArr;
  }

  push(item: Type): number {
    this.items[this.len++] = item;
    return this.len;
  }

  pop(): Type | undefined {
    return this.len === 0 ? undefined : this.items[--this.len];
  }

  peek(): Type | undefined {
    return this.items[this.len - 1];
  }

  isEmpty(): boolean {
    return this.len === 0;
  }

  clear(): void {
    this.items = [];
  }

  get length(): number {
    return this.len;
  }
}
