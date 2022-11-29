/**
 * StackArray
 * This file provide the implementation of a Stack using Array
 */

import { StackIf } from "./interfaces";

// TODO: do you understand Stack generic Item? 表示一致
export default class StackArray<Type> implements StackIf<Type> {
  private items: Type[];
  private top: number = 0;

  constructor(iterable?: Iterable<Type>) {
    let inputArr: Type[] = iterable ? [...iterable] : [];

    this.top = inputArr.length;
    this.items = inputArr;
  }

  push(item: Type): number {
    this.items[this.top++] = item;
    return this.top;
  }

  pop(): Type | undefined {
    return this.top === 0 ? undefined : this.items[--this.top];
  }

  peek(): Type | undefined {
    return this.items[this.top - 1];
  }

  isEmpty(): boolean {
    return this.top === 0;
  }

  clear(): void {
    this.items = [];
  }

  get length(): number {
    return this.top;
  }
}
