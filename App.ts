import LinearDS from "./Linear_DS";
import { Sort } from "./Algorithms";
import { BinaryTree } from "./Non_Linear_DS";

let testArr: number[] = [2, 5, 3, 4, 1];
// let sortedArr: unknown[] = Sort.linear([...testArr]);

//-----------------> Testing
let { PriorityQ } = LinearDS;
let test1 = new BinaryTree();
test1.insert(...testArr);
// test1.dequeue();
// console.log("Sorted Array", sortedArr);
test1.traverse((val) => {
  console.log("test", val);
}, "inorder");

// -------------> Testing Stack List
// let sl1 = new StackList();
// sl1.push(10);
// sl1.push(20);
// console.log(sl1.pop());
// console.log(sl1.peek());
