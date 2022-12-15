import { Sort } from "../../Algorithms";
import { sorting as data } from "../data";

// let unsorted: number[] = [2, 1, 4, 2, 5, 6];
// let sorted: number[] = [1, 2, 2, 4, 5, 6];

describe("Selection Sort Test", () => {
  data.forEach((value, index) => {
    const { label, input, output } = value;

    it(label ?? `test_case_${index}`, () => {
      expect(Sort.selection(input)).toEqual(output);
    });
  });
});

describe("Bubble Sort Test", () => {
  data.forEach((value, index) => {
    const { label, input, output } = value;

    it(label ?? `test_case_${index}`, () => {
      expect(Sort.bubble(input)).toEqual(output);
    });
  });
});

describe("Insertion Sort Test", () => {
  data.forEach((value, index) => {
    const { label, input, output } = value;

    it(label ?? `test_case_${index}`, () => {
      expect(Sort.insertion(input)).toEqual(output);
    });
  });
});

describe("Counting Sort Test", () => {
  data.forEach((value, index) => {
    const { label, input, output } = value;

    it(label ?? `test_case_${index}`, () => {
      expect(Sort.counting(input)).toEqual(output);
    });
  });
});

describe("Merge Sort Test", () => {
  data.forEach((value, index) => {
    const { label, input, output } = value;

    it(label ?? `test_case_${index}`, () => {
      expect(Sort.merge(input)).toEqual(output);
    });
  });
});

describe("Quick Sort Test", () => {
  data.forEach((value, index) => {
    const { label, input, output } = value;

    it(label ?? `test_case_${index}`, () => {
      expect(Sort.quick(input)).toEqual(output);
    });
  });
});

describe("Heap Sort Test", () => {
  data.forEach((value, index) => {
    const { label, input, output } = value;

    it(label ?? `test_case_${index}`, () => {
      expect(Sort.heap(input)).toEqual(output);
    });
  });
});
