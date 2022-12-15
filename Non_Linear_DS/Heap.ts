import { HeapIf } from "./interfaces";

export default class Heap<E> implements HeapIf<E> {
  private heap: number[] = [];
  private size: number = 0;
  private type: "min" | "max";

  constructor(type?: "min" | "max") {
    this.type = type ?? "min";
  }

  add(...values: number[]): number {
    for (let i in values) {
      let _this = this;

      this.heap.push(values[i]);
      (function heapify(current: number): void {
        if (current === 0) {
          return;
        }

        let parent = Math.floor(current / 2);
        let toSwap =
          _this.type === "min"
            ? _this.heap[current] > _this.heap[parent]
            : _this.heap[current] < _this.heap[parent];

        if (toSwap) {
          [_this.heap[parent], _this.heap[current]] = [
            _this.heap[current],
            _this.heap[parent],
          ];
          heapify(parent);
        }
      })(+i);
    }

    return this.heap.length;
  }

  delete(): number | undefined {
    let n: number = this.heap.length - 1;
    [this.heap[0], this.heap[n]] = [this.heap[n], this.heap[0]];
    let deletedNum: number | undefined = this.heap.pop();

    let _this = this;
    (function heapify(parent: number): void {
      let l: number = parent * 2 + 1;
      let r: number = l + 1;

      if (parent >= _this.heap.length) {
        return;
      }

      let maxVal: number = Math[_this.type === "min" ? "max" : "min"](
        _this.heap[l] ?? (_this.type === "min" ? -Infinity : Infinity),
        _this.heap[r] ?? (_this.type === "min" ? -Infinity : Infinity),
        _this.heap[parent]
      );

      if (maxVal === _this.heap[l]) {
        [_this.heap[l], _this.heap[parent]] = [
          _this.heap[parent],
          _this.heap[l],
        ];
        heapify(l);
      } else if (maxVal === _this.heap[r]) {
        [_this.heap[r], _this.heap[parent]] = [
          _this.heap[parent],
          _this.heap[r],
        ];
        heapify(r);
      }
    })(0);

    return deletedNum;
  }

  traverse(callback?: ((value: number) => unknown) | undefined): void {
    if (typeof callback === "function") {
      let n: number = this.heap.length;
      for (let i: number = 0; i < n; i++) {
        callback(this.heap[i]);
      }
    }
  }
}
