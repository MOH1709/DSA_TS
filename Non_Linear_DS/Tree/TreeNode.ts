import { TreeNodeIf } from "../interfaces";

export default class TreeNode<E> implements TreeNodeIf<E> {
  left: TreeNodeIf<E> | null;
  right: TreeNodeIf<E> | null;
  value: number;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
