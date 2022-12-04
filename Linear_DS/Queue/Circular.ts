import { QueueIf } from "../interfaces";

export default class Circular<E> implements QueueIf<E> {
  private queue: E[] = [];
  private SIZE: number;
  private front: number = -1;
  private rear: number = -1;

  constructor(length?: number) {
    this.SIZE = length ?? 10;
  }

  test1 = () => {
    return this;
  };
  test2() {
    return this;
  }

  enqueue(...values: E[]): number {
    for (let value of values) {
      if (this.isFull()) break;

      if (this.front === -1) {
        this.front = 0;
      }

      this.rear = (this.rear + 1) % this.SIZE;
      this.queue[this.rear] = value;
    }

    return this.rear;
  }

  dequeue(): E {
    if (this.front !== this.rear) {
      this.front = (this.front + 1) % this.SIZE;
    } else {
      this.front = this.rear = -1;
    }

    return this.queue[this.front];
  }

  traverse(callback?: ((value: E) => unknown) | undefined): void {
    for (let i = this.front; i !== this.rear; i = (i + 1) % this.SIZE) {
      if (typeof callback === "function") {
        callback(this.queue[i]);
      }
    }
    if (typeof callback === "function") {
      callback(this.queue[this.rear]);
    }
  }

  peek(): E {
    return this.queue[this.front];
  }

  isEmpty(): boolean {
    return this.front === -1;
  }

  isFull(): boolean {
    if (this.front === 0 && this.rear === this.SIZE - 1) {
      return true;
    }
    if (this.front === this.rear + 1) {
      return true;
    }

    return false;
  }
}
