import { TreeIf } from "../interfaces";
import TreeNode from "./TreeNode";

export default class BinaryTree<E> implements TreeIf<E> {
  private root: TreeNode<E> | null = null;

  insert(...values: number[]): void {
    for (let value of values) {
      let prev: TreeNode<E> | null = this.root;
      let cur: TreeNode<E> | null = this.root;
      let new_node = new TreeNode(value);

      if (prev === null) {
        this.root = new_node;
        continue;
      }

      while (cur !== null) {
        prev = cur;
        if (value < cur.value) {
          cur = cur.left;
        } else {
          cur = cur.right;
        }
      }

      if (value < prev.value) {
        prev.left = new_node;
      } else {
        prev.right = new_node;
      }
    }
  }

  delete(value: number): boolean {
    return false;
  }

  traverse(
    callback?: ((value: number) => E) | undefined,
    method: "inorder" | "postorder" | "preorder" = "inorder"
  ): void {
    if (typeof callback === "function") {
      this[method](callback);
    }
  }

  // traversal methods
  private inorder(
    callback: (value: number) => E,
    cur: TreeNode<E> | null = this.root
  ): void {
    if (cur) {
      if (cur.left !== null) {
        this.inorder(callback, cur.left);
      }

      callback(cur.value);

      if (cur.right !== null) {
        this.inorder(callback, cur.right);
      }
    }
  }

  private postorder(
    callback: (value: number) => E,
    cur: TreeNode<E> | null = this.root
  ): void {
    if (cur) {
      if (cur.left !== null) {
        this.postorder(callback, cur.left);
      }

      if (cur.right !== null) {
        this.postorder(callback, cur.right);
      }

      callback(cur.value);
    }
  }

  private preorder(
    callback: (value: number) => E,
    cur: TreeNode<E> | null = this.root
  ): void {
    if (cur) {
      callback(cur.value);

      if (cur.left !== null) {
        this.preorder(callback, cur.left);
      }

      if (cur.right !== null) {
        this.preorder(callback, cur.right);
      }
    }
  }
}
