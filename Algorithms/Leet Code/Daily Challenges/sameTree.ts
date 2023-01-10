import { TreeNode } from "../../../Non_Linear_DS/Tree";

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

type treeNode = TreeNode<unknown> | null;
export default function isSameTree(p: treeNode, q: treeNode): boolean {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;

  return (
    p.value === q.value &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  );
}
