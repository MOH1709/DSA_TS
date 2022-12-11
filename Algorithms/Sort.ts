class Sort<E> {
  selection(values: E[]): E[] {
    let minIndex: number = 0;

    for (let i: number = 0; i < values.length; i++) {
      minIndex = i;

      for (let j = i + 1; j < values.length; j++) {
        if (values[j] < values[minIndex]) {
          minIndex = j;
        }
      }

      // Swapping values of minimum value index and current index
      [values[i], values[minIndex]] = [values[minIndex], values[i]];
    }

    return values;
  }

  bubble(values: number[]): number[] {
    for (let i: number = 0; i < values.length; i++) {
      for (let j: number = 0; j < values.length - i; j++) {
        if (values[j] > values[j + 1]) {
          [values[j], values[j + 1]] = [values[j + 1], values[j]];
        }
      }
    }

    return values;
  }

  insertion(values: number[]): number[] {
    for (let i = 1; i < values.length; i++) {
      let j = i;
      while (j >= 0 && values[j] < values[j - 1]) {
        [values[j], values[j - 1]] = [values[j - 1], values[j]];
        j--;
      }
    }

    return values;
  }

  counting(values: number[]): number[] {
    let max = Math.max(...values, values.length) + 1;
    let counts: number[] = new Array(max).fill(0);

    for (let value of values) {
      counts[value]++;
    }

    for (let i: number = 1; i < counts.length; i++) {
      counts[i] += counts[i - 1];
    }

    let sortedArr: number[] = [];
    for (let value of values) {
      sortedArr[--counts[value]] = value;
    }

    return sortedArr;
  }

  merge(values: number[]): number[] {
    (function sort(start: number = 0, end: number = values.length - 1): void {
      if (start < end) {
        let mid = Math.floor((start + end) / 2);

        sort(start, mid);
        sort(mid + 1, end);

        mergeArray(start, mid, end);
      }
    })();

    function mergeArray(start: number, mid: number, end: number): void {
      let left: number = start,
        right: number = mid + 1,
        sortedArr: number[] = [];

      // loop to obtain merged sorted array
      while (left <= mid && right <= end) {
        sortedArr.push(
          values[left] < values[right] ? values[left++] : values[right++]
        );
      }

      while (left <= mid) {
        sortedArr.push(values[left++]);
      }

      while (right <= end) {
        sortedArr.push(values[right++]);
      }

      // loop to copy the element of sorted array in original array
      // for (let i = start, j = 0; i <= end; ) {
      //   values[i++] = sortedArr[j++];
      // }

      let count = sortedArr.length; // or we can use (end - start + 1)
      values.splice(start, count, ...sortedArr);
    }

    return values;
  }

  quick(values: number[]): number[] {
    (function sort(start: number = 0, end: number = values.length - 1) {
      if (start < end) {
        let pivotIndex: number = getPivotIndex(start, end);

        sort(start, pivotIndex - 1);
        sort(pivotIndex + 1, end);
      }
    })();

    function getPivotIndex(start: number, end: number): number {
      let intialIndex: number = start,
        pivot: number = values[intialIndex];

      while (start < end) {
        while (values[start] <= pivot) start++;
        while (values[end] > pivot) end--;

        if (start < end) {
          [values[start], values[end]] = [values[end], values[start]];
        }
      }

      [values[intialIndex], values[end]] = [values[end], values[intialIndex]];
      return end;
    }

    return values;
  }
}

export default new Sort();
