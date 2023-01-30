import { tribonacci } from "../../../Algorithms/Leet Code/Daily Challenges";
import { tribonacci as data } from "../../data/Daily challanges";

describe("Leet Code tribonacci Algorithm", () => {
  data.forEach((value, index) => {
    const { label, input, output } = value;

    it(label ?? `test_case_${index}`, () => {
      expect(tribonacci(input)).toEqual(output);
    });
  });
});
