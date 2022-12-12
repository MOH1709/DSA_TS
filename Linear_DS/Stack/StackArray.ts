/**
 * StackArray
 * This file provide the implementation of a Stack using Array
 */

import { StackIf } from "../interfaces";

export default class StackArray<Type> implements StackIf<Type> {
  private items: Type[];
  protected top: number = -1;

  constructor(iterable?: Iterable<Type>) {
    let inputArr: Type[] = iterable ? [...iterable] : [];

    this.top = inputArr.length - 1;
    this.items = inputArr;
  }

  push(item: Type): number {
    this.items[++this.top] = item;
    return this.top + 1;
  }

  pop(): Type | undefined {
    return this.top === -1 ? undefined : this.items[this.top--];
  }

  peek(): Type | undefined {
    return this.items[this.top];
  }

  isEmpty(): boolean {
    return this.top === -1;
  }

  clear(): void {
    this.items = [];
  }

  get length(): number {
    return this.top + 1;
  }
}
