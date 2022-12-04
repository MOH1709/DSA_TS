import LinearDS from "./Linear_DS";
import { Sort } from "./Algorithms";

let testArr: unknown[] = [2, "5", 3, 4, true];
let sortedArr: unknown[] = Sort.linear(testArr);

//-----------------> Testing
let { PriorityQ } = LinearDS;
let test1 = new PriorityQ();
test1.enqueue(...sortedArr);
test1.dequeue();
console.log("Sorted Array", sortedArr);
test1.traverse((val) => {
  console.log("traverse", val);
});

// -------------> Testing Stack List
// let sl1 = new StackList();
// sl1.push(10);
// sl1.push(20);
// console.log(sl1.pop());
// console.log(sl1.peek());
