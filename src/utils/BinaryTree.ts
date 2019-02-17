export type InitialData<T> = Array<[T, T | null, T | null]>;

export default class BinaryTreeNode<T> {
  static build<T>(initialData: InitialData<T>) {
    if (initialData.length === 0) return null;

    let rootNode;
    const nodes = new Map<T, BinaryTreeNode<T>>();
    for (const [node, left, right] of initialData) {
      if (!nodes.has(node)) {
        nodes.set(node, new BinaryTreeNode(node));
        if (!rootNode) rootNode = nodes.get(node);
      }

      if (left != null && !nodes.has(left)) {
        nodes.set(left, new BinaryTreeNode(left));
        nodes.get(node)!.setLeft(nodes.get(left)!);
      }

      if (right != null && !nodes.has(right)) {
        nodes.set(right, new BinaryTreeNode(right));
        nodes.get(node)!.setRight(nodes.get(right)!);
      }
    }

    return rootNode;
  }

  get leftHeight() {
    return this.left ? this.left.height : 0;
  }

  get rightHeight() {
    return this.right ? this.right.height : 0;
  }

  get height(): number {
    return Math.max(this.leftHeight, this.rightHeight);
  }

  get balanceFactor() {
    return this.leftHeight - this.rightHeight;
  }

  get uncle() {
    if (!this.parent) return undefined;
    if (!this.parent.parent) return undefined;
    if (!this.parent.parent.left || !this.parent.parent.right) return undefined;
    return this.parent === this.parent.parent.left
      ? this.parent.parent.right
      : this.parent.parent.left;
  }

  constructor(
    readonly value: T,
    public parent: BinaryTreeNode<T> | null = null,
    public left: BinaryTreeNode<T> | null = null,
    public right: BinaryTreeNode<T> | null = null,
  ) {}

  setLeft(node: BinaryTreeNode<T> | null) {
    if (this.left) this.left.parent = null;
    this.left = node;
    if (this.left) this.left.parent = this;
    return this;
  }

  setRight(node: BinaryTreeNode<T> | null) {
    if (this.right) this.right.parent = null;
    this.right = node;
    if (this.right) this.right.parent = this;
    return this;
  }

  removeChild = (nodeToRemove: BinaryTreeNode<T>) =>
    this.replaceChild(nodeToRemove, null);

  replaceChild(
    nodeToReplace: BinaryTreeNode<T>,
    replacementNode: BinaryTreeNode<T> | null,
  ) {
    switch (nodeToReplace) {
      case this.left:
        this.setLeft(replacementNode);
        return true;
      case this.right:
        this.setRight(replacementNode);
        return true;
      default:
        return false;
    }
  }

  traverseInOrder() {
    let traverse: T[] = [];
    if (this.left) traverse = traverse.concat(this.left.traverseInOrder());
    traverse.push(this.value);
    if (this.right) traverse = traverse.concat(this.right.traverseInOrder());
    return traverse;
  }

  traversePreOrder() {
    let traverse: T[] = [];
    traverse.push(this.value);
    if (this.left) traverse = traverse.concat(this.left.traverseInOrder());
    if (this.right) traverse = traverse.concat(this.right.traverseInOrder());
    return traverse;
  }

  traversePostOrder() {
    let traverse: T[] = [];
    if (this.left) traverse = traverse.concat(this.left.traverseInOrder());
    if (this.right) traverse = traverse.concat(this.right.traverseInOrder());
    traverse.push(this.value);
    return traverse;
  }

  toString = () => this.traverseInOrder().toString();
}
