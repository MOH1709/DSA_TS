import { addTwoNumbers } from "../../../Algorithms/Leet Code";
import { addTwoNumbers as data } from "../../data/Leet_code";
import { ListNode, SinglyLL } from "../../../Linear_DS";

describe("Leet Code Add Two Numbers Algorithm", () => {
  type listnode = ListNode<number> | null;

  data.forEach((value, index) => {
    const { label, input, output } = value;
    const l1: SinglyLL<number> = new SinglyLL(...input.l1);
    const l2: SinglyLL<number> = new SinglyLL(...input.l2);

    it(label ?? `test_case_${index}`, () => {
      let result: number[] = [];
      for (
        let cur: listnode = addTwoNumbers(l1.headNode, l2.headNode);
        cur !== null;
        cur = cur?.next
      ) {
        result.push(cur.value);
      }
      expect(result).toEqual(output);
    });
  });
});
