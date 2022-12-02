import LinearDS from "./Linear_DS";

let testArr: unknown[] = [2, "5", 3, 4, true];

//-----------------> Testing
let { PriorityQ } = LinearDS;
let test1 = new PriorityQ();
test1.enqueue(...testArr);
test1.dequeue();
test1.traverse((val) => {
  console.log(val);
});

// ------------> Testing Stack List
// let sl1 = new StackList();
// sl1.push(10);
// sl1.push(20);
// console.log(sl1.pop());
// console.log(sl1.peek());
