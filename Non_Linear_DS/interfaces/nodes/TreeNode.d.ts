export default interface TreeNode<E> {
  left: TreeNode<E> | null;
  right: TreeNode<E> | null;
  value: number;
}
