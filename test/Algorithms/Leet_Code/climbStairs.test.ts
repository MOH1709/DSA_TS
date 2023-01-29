import { climbStairs } from "../../../Algorithms/Leet Code";
import { climbStairs as data } from "../../data/Leet_code";

describe("Leet Code Climbing Stairs Algorithm", () => {
  data.forEach((value, index) => {
    const { label, input, output } = value;

    it(label ?? `test_case_${index}`, () => {
      expect(climbStairs(input)).toEqual(output);
    });
  });
});
