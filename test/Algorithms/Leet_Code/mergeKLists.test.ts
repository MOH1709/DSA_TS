import { mergeKLists } from "../../../Algorithms/Leet Code";
import { mergeKLists as data } from "../../data/Leet_code";
import { ListNode, SinglyLL } from "../../../Linear_DS";

describe("Leet Code Add Two Numbers Algorithm", () => {
  type listnode = ListNode<number> | null;

  data.forEach((value, index) => {
    const { label, input, output } = value;

    let lists: listnode[] = [];
    for (let list of input) {
      const l1: SinglyLL<number> = new SinglyLL(...list);

      lists.push(l1.headNode);
    }

    it(label ?? `test_case_${index}`, () => {
      let result: number[] = [];
      for (
        let cur: listnode = mergeKLists(lists);
        cur !== null;
        cur = cur?.next
      ) {
        result.push(cur.value);
      }
      expect(result).toEqual(output);
    });
  });
});
