export default interface Node<E> {
  value: E;
  next: Node<E> | null;
  prev?: Node<E> | null;
}
