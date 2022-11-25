// to export class of variable
export { Basics, Parent, Global };

interface Global {
  log: () => void;
  name?: string;
}

class Parent {
  name: string;

  constructor(str: string) {
    this.name = str;
  }
}

// inheritance
class Basics extends Parent {
  fullName: string = "this is child variable";

  // this is called by default
  constructor(lastName?: string) {
    super("Mohit");
    this.fullName = this.name + " " + lastName;
  }

  getParentName(): string {
    this.fullName = "local full name";

    let arrowFun: () => string = () => {
      this.fullName = "Arrow child";

      return this.fullName;
    };

    // let normalFun = function (): string {
    //   this.fullName = "Normal child";

    //   return this.fullName;
    // };

    console.log("arrow function this: ", arrowFun());

    return this.name;
  }

  log() {
    console.log("testing in progress");
  }
  declaration() {
    let str: string = "this is string";
    let weight: number | string = 12 || "12kg"; // accept only number or string value
    let user_defined_enum: 12 | "ss"; // accept only number or string value
    let notKnown: unknown = "sa"; // cannot assign to other data type
    // to assign we can set condition for that type
    str = typeof notKnown === "string" ? notKnown : ""; // no Error !!

    type numStr = number | string;

    let arr = [10, 20, "asd"]; // array that only accept string and number type data only
    let numArr: numStr[] = []; // array that only accept number or string type data
    let tuple: [number, boolean?, string?] = [10, , ""]; // arr with specified types at index
    // thows error Argument of type 'string' is not assignable to parameter of type 'number'
    // numArr.push("");

    // function with resturn type string
    // without ?: the parameter is compulsary
    // A cumpulsary parameter cannot comes after optional parameter
    let fun1: (num1: number, optional?: string) => string;
    let fun2: () => undefined;
    // fun2 = function(val){} // error parameters are not allowed
    fun2 = () => undefined; // throws error of return type number

    let fun3 = function <T>(param: T, num: number): T {
      return param;
    }; // Generic Function
    // generic function: return type depened on argument type
    fun3("", 1);

    enum days {
      Sunday = 1,
      Monday = 4,
      Tuesday,
      Wednesday,
      Thursday,
      Friday,
      Saturday,
    }
    console.log("enum", days); // 5 as output (Prev + index)

    // let fun#: function(num:number):string;
  }
  object() {
    // defining type for object
    interface user {
      name: string;
      age: number;
      eligible: boolean;
      weight: any; // all data type
      getName: () => string;
    }

    // must have all property of interface and not extra too
    let User1: user = {
      name: "Mohit",
      age: 21,
      eligible: true,
      weight: 54 || "54kg",
      getName: function () {
        return this.name;
      },
    };
    console.log(User1.getName());

    // strictly accept only default type
    let User2: object = {
      name: "test",
    };
    // did not allow to add new property in object
    // User2.email = "test@mail.com"; // thows error

    // default js object
    let User3: any = {
      name: true,
      age: "15",
      eligible: 0,
    };
  }
}

let Test1 = new Basics("Ahirwal");
// console.log(Test1.declaration());

// console.log(Test1.fullName);
