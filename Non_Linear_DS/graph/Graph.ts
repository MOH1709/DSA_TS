import { GraphIf } from "../interfaces";
import { SinglyLL } from "../../Linear_DS/Linked List";
import { StackArray, SimpleQ } from "../../Linear_DS";

export default class Graph<E> implements GraphIf<E> {
  private map: Map<unknown, SinglyLL<unknown>> = new Map();

  constructor(nodes: E[]) {
    for (let value of nodes) {
      this.map.set(value, new SinglyLL(value));
    }
  }

  connect(value: unknown, connects: unknown[]): SinglyLL<unknown> | null {
    if (this.map.has(value) === false) {
      console.log("Node with value", value, "Does not exist");
      return null;
    }

    let list = this.map.get(value);
    for (let node of connects) {
      if (this.map.has(node) === false) {
        console.log("Node with value", node, "Does not exist to connect");
      }

      list?.insert(node);
    }

    return list ?? null;
  }

  delete(value: unknown): boolean {
    let delList = this.map.get(value);

    if (delList !== undefined) {
      delList.traverse((nodeVal) => {
        this.map.get(nodeVal)?.delete(value);
      });
    }

    return this.map.delete(value);
  }

  traverse(
    from: unknown,
    callback?: (value: unknown) => unknown,
    method: "BFS" | "DFS" = "BFS"
  ): void {
    if (typeof callback === "function") {
      if (this.map.has(from)) {
        this[method](from, callback);
      } else {
        console.log("node with value", from, "does not exist");
      }
    }
  }

  BFS(from: unknown, callback?: (value: unknown) => unknown): void {
    if (typeof callback === "function") {
      let q = new SimpleQ();
      let visited: Map<unknown, boolean> = new Map();
      let startList = this.map.get(from);

      visited.set(from, true);
      q.enqueue(from);

      while (q.isEmpty() === false) {
        startList?.traverse((value) => {
          let curList = this.map.get(value);

          curList?.traverse((node) => {
            if (visited.has(node) === false) {
              visited.set(node, true);
              q.enqueue(node);
            }
          });

          from = q.dequeue();
          if (from !== undefined) {
            callback(from);
          }
        });
      }
    }
  }

  DFS(from: unknown, callback?: (value: unknown) => unknown): void {
    if (typeof callback === "function") {
      let stack = new StackArray();
    }
  }
}
