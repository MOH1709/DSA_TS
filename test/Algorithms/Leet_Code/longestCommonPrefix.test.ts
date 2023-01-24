import { longestCommonPrefix } from "../../../Algorithms/Leet Code";
import { longestCommonPrefix as data } from "../../data/Leet_code";

describe("Leet Code Two Sum Algorithm", () => {
  data.forEach((value, index) => {
    const { label, input, output } = value;

    it(label ?? `test_case_${index}`, () => {
      expect(longestCommonPrefix(input)).toEqual(output);
    });
  });
});
