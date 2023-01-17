import { minFlipsMonoIncr as data } from "../../data/Daily challanges";
import { minFlipsMonoIncr } from "../../../Algorithms/Leet Code/Daily Challenges";

describe("Selection Sort Test", () => {
  data.forEach((value, index) => {
    const { label, input, output } = value;

    it(label ?? `test_case_${index}`, () => {
      expect(minFlipsMonoIncr(input)).toEqual(output);
    });
  });
});
