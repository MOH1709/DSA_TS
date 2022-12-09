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
    callback?: (value: unknown) => unknown,
    method: "BFS" | "DFS" = "BFS"
  ): void {
    if (typeof callback === "function") {
      this[method](callback);
    }
  }

  BFS(callback?: (value: unknown) => unknown): void {
    if (typeof callback === "function") {
      let q = new SimpleQ();
    }
  }

  DFS(callback?: (value: unknown) => unknown): void {
    if (typeof callback === "function") {
      let stack = new StackArray();
    }
  }
}
