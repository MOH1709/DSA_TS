import { findJudge as data } from "../../data/Daily challanges";
import { findJudge } from "../../../Algorithms/Leet Code/Daily Challenges";

describe("Selection Sort Test", () => {
  data.forEach((value, index) => {
    const { label, input, output } = value;

    it(label ?? `test_case_${index}`, () => {
      expect(findJudge(input.n, input.trust)).toEqual(output);
    });
  });
});
