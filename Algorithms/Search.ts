export default class Search<E> {
  linear(values: E[]): E[] {
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
}
