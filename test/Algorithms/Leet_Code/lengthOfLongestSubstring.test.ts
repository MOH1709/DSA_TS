import { lengthOfLongestSubstring } from "../../../Algorithms/Leet Code";
import { lengthOfLongestSubstring as data } from "../../data/Leet_code";

describe("Leet Code Two Sum Algorithm", () => {
  data.forEach((value, index) => {
    const { label, input, output } = value;

    it(label ?? `test_case_${index}`, () => {
      expect(lengthOfLongestSubstring(input.s)).toEqual(output);
    });
  });
});
