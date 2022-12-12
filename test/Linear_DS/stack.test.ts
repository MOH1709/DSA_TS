import { StackArray, StackList } from "../../Linear_DS";
import { linear as data } from "../data";

describe("Stack Operations", () => {
  let array: StackArray<number>;
  let list: StackList<number>;

  beforeAll(() => {
    array = new StackArray();
    list = new StackList();
  });

  it("check adding data in stacks", () => {
    data.forEach((obj) => {
      expect(array.isEmpty()).toEqual(true);
      expect(list.isEmpty()).toEqual(true);

      obj.input.forEach((value, index) => {
        expect(array.push(value)).toEqual(index + 1);
        expect(list.push(value)).toEqual(index + 1);
      });
    });
  });

  it("check popping data from stacks", () => {
    data.forEach((obj) => {
      // check pop operations
      var popped = obj.input.pop();
      expect(array.pop()).toEqual(popped);
      expect(list.pop()).toEqual(popped);

      var popped = obj.input.pop();
      expect(array.pop()).toEqual(popped);
      expect(list.pop()).toEqual(popped);

      expect(array.isEmpty()).toEqual(false);
      expect(list.isEmpty()).toEqual(false);
    });
  });

  it("check read only properties of stack", () => {
    data.forEach((obj) => {
      // check peek operation
      expect(array.peek()).toEqual(obj.input[obj.input.length - 1]);
      expect(list.peek()).toEqual(obj.input[obj.input.length - 1]);

      // check length
      expect(array.length).toEqual(obj.input.length);
      expect(list.length).toEqual(obj.input.length);

      // check if the stack is empty
      expect(array.isEmpty()).toEqual(false);
      expect(list.isEmpty()).toEqual(false);
    });
  });
});
