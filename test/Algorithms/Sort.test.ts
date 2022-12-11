import { Sort } from "../../Algorithms";
import { sorting as data } from "../data";

// let unsorted: number[] = [2, 1, 4, 2, 5, 6];
// let sorted: number[] = [1, 2, 2, 4, 5, 6];

describe("Selection Sort Test", () => {
  data.forEach((value, index) => {
    it(value?.label ?? `test_${index}`, () => {
      expect(Sort.selection(value.input)).toEqual(value.output);
    });
  });
});

describe("Bubble Sort Test", () => {
  data.forEach((value, index) => {
    it(value?.label ?? `test_${index}`, () => {
      expect(Sort.bubble(value.input)).toEqual(value.output);
    });
  });
});

describe("Insertion Sort Test", () => {
  data.forEach((value, index) => {
    it(value?.label ?? `test_${index}`, () => {
      expect(Sort.insertion(value.input)).toEqual(value.output);
    });
  });
});

describe("Counting Sort Test", () => {
  data.forEach((value, index) => {
    it(value?.label ?? `test_${index}`, () => {
      expect(Sort.counting(value.input)).toEqual(value.output);
    });
  });
});

describe("Merge Sort Test", () => {
  data.forEach((value, index) => {
    it(value?.label ?? `test_${index}`, () => {
      expect(Sort.merge(value.input)).toEqual(value.output);
    });
  });
});

describe("Quick Sort Test", () => {
  data.forEach((value, index) => {
    it(value?.label ?? `test_${index}`, () => {
      expect(Sort.quick(value.input)).toEqual(value.output);
    });
  });
});
