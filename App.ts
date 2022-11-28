import { Parent, Global } from "./TS/Basics";
import { Stack, SinglyLL } from "./Linear_DS";

// implements is use to implement interface in class
// in class interface declared variable must be there else extra can be added
class Index extends Parent implements Global {
  log(): void {
    console.log(this.name);
  }
  extra: boolean = true;
}

let testArr: unknown[] = [true, 2, 3, 4, "5"];

let Test = new Index("Index");
// Test.log();

//-----------------> Testing Linked List
let LL1 = new SinglyLL();
LL1.insert(...testArr);
LL1.delete(true);
LL1.traverse();
