import { majorityElement } from "../../../Algorithms/Leet Code";
import { majorityElement as data } from "../../data/Leet_code";

describe("Boyer-Moore Voting Algorithm", () => {
  data.forEach((value, index) => {
    const { label, input, output } = value;

    it(label ?? `test_case_${index}`, () => {
      expect(majorityElement(input)).toEqual(output);
    });
  });
});
