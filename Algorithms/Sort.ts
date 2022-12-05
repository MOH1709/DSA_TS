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
    let max = Math.max(...values, values.length);
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
}

export default new Sort();
