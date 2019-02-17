import { InitialData } from '@utils/BinaryTree';
import GetRandomNode from './Base';

export default class StoreSizeRandomNode<T> extends GetRandomNode<T> {
  static build<T>(initialData: InitialData<T>) {
    if (initialData.length === 0) return null;

    let rootNode;
    const nodes = new Map<T, StoreSizeRandomNode<T>>();
    for (const [node, left, right] of initialData) {
      if (!nodes.has(node)) {
        nodes.set(node, new StoreSizeRandomNode(node));
        if (!rootNode) rootNode = nodes.get(node);
      }

      if (left != null && !nodes.has(left)) {
        nodes.set(left, new StoreSizeRandomNode(left));
        nodes.get(node)!.setLeft(nodes.get(left)!);
      }

      if (right != null && !nodes.has(right)) {
        nodes.set(right, new StoreSizeRandomNode(right));
        nodes.get(node)!.setRight(nodes.get(right)!);
      }
    }

    return rootNode;
  }

  private size = 1;
  constructor(
    readonly value: T,
    public parent: StoreSizeRandomNode<T> | null = null,
    public left: StoreSizeRandomNode<T> | null = null,
    public right: StoreSizeRandomNode<T> | null = null,
  ) {
    super(value, parent, left, right);
  }

  setLeft(node: StoreSizeRandomNode<T> | null) {
    if (this.left) this.left.parent = null;
    this.left = node;
    if (this.left) this.left.parent = this;
    this.recalibrateSize();
    return this;
  }

  setRight(node: StoreSizeRandomNode<T> | null) {
    if (this.right) this.right.parent = null;
    this.right = node;
    if (this.right) this.right.parent = this;
    this.recalibrateSize();
    return this;
  }

  getRandomNode(): T {
    const leftSize = this.left === null ? 0 : this.left.size;
    const idx = Math.floor(Math.random() * this.size - Number.MIN_VALUE);
    if (idx < leftSize) {
      return this.left!.getRandomNode();
    } else if (idx === leftSize) {
      return this.value;
    } else {
      return this.right!.getRandomNode();
    }
  }

  private recalibrateSize = () => {
    const oldSize = this.size;
    const leftSize = this.left ? this.left.size : 0;
    const rightSize = this.right ? this.right.size : 0;
    this.size = leftSize + rightSize + 1;
    if (this.size !== oldSize && this.parent) this.parent.recalibrateSize();
  };
}
