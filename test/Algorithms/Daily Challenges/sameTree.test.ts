import { isSameTree as data } from "../../data/Daily challanges";
import { isSameTree } from "../../../Algorithms/Leet Code/Daily Challenges";
import { BinaryTree } from "../../../Non_Linear_DS";

describe("Selection Sort Test", () => {
  data.forEach((value, index) => {
    const { label, input, output } = value;
    let p: BinaryTree<number> = new BinaryTree();
    let q: BinaryTree<number> = new BinaryTree();

    p.insert(...input.p);
    q.insert(...input.q);

    it(label ?? `test_case_${index}`, () => {
      expect(isSameTree(p.rootNode, q.rootNode)).toEqual(output);
    });
  });
});
