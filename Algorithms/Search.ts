export default class Search<E> {
  private values: E[];

  constructor(array: E[] = []) {
    this.values = array;
  }

  // use if the array is not sorted
  linear(value: E): number {
    let index = 0;
    for (let val of this.values) {
      if (val === value) {
        return index;
      }

      index++;
    }

    return -1;
  }

  // use if the array is sorted
  binary(value: E): number {
    let start: number = 0,
      end: number = this.values.length - 1;

    do {
      let mid: number = Math.floor((start + end) / 2);
      let val: E = this.values[mid];

      if (val === value) {
        return mid;
      } else if (value > val) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    } while (start <= end);

    return -1;
  }

  // use if the array is sorted and uniformly distributed -> [2, 4, 6, 8]
  interpolation(value: number): number {
    let low = 0,
      high = this.values.length - 1;

    do {
      let lowVal: number = +this.values[low],
        highVal: number = +this.values[high];
      let pos = Math.round(
        low + ((value - lowVal) / (highVal - lowVal)) * (high - low)
      );

      let val = this.values[pos];
      if (val === value) {
        return pos;
      } else if (value > val) {
        low = pos + 1;
      } else {
        high = pos - 1;
      }
    } while (
      low <= high &&
      value < this.values[low] &&
      value > this.values[high]
    );

    return -1;
  }
}
