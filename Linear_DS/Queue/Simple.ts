import { QueueIf } from "../interfaces";

export default class Simple<E> implements QueueIf<E> {
  private maxLength: number;
  private queue: E[] = [];
  protected front: number = -1;
  protected rear: number = -1;

  constructor(length?: number) {
    this.maxLength = (length ?? 10) - 1;
  }

  enqueue(...values: E[]): number {
    for (let value of values) {
      if (this.rear >= this.maxLength) break;

      this.rear++;
      if (this.front === -1) {
        this.front = this.rear;
      }

      this.queue[this.rear] = value;
    }

    return this.rear;
  }

  dequeue(): E {
    if (this.front === this.rear) {
      this.front = this.rear = -1;
      this.queue = [];
    } else this.front++;

    return this.queue[this.front];
  }

  peek(): E {
    return this.queue[this.front];
  }

  traverse(callback?: ((value: E) => unknown) | undefined): void {
    if (this.isEmpty()) return;

    for (let i = this.front; i <= this.rear; i++) {
      if (typeof callback === "function") {
        callback(this.queue[i]);
      }
    }
  }

  isFull(): boolean {
    return this.rear >= this.maxLength;
  }

  isEmpty(): boolean {
    return this.front === -1;
  }
}
