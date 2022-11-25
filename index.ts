import { Parent, Global } from "./TS/Basics";
import { Stack } from "./Linear_DS";

// implements is use to implement interface in class
// in class interface declared variable must be there else extra can be added
class Index extends Parent implements Global {
  log(): void {
    console.log(this.name);
  }
  extra: boolean = true;
}

let Test = new Index("Index");
// Test.log();

let stack1 = new Stack();
