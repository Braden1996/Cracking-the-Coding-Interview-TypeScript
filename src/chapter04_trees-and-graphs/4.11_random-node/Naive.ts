import { InitialData } from '@utils/BinaryTree';
import GetRandomNode from './Base';

export default class NaiveRandomNode<T> extends GetRandomNode<T> {
  static build<T>(initialData: InitialData<T>) {
    if (initialData.length === 0) return null;

    let rootNode;
    const nodes = new Map<T, NaiveRandomNode<T>>();
    for (const [node, left, right] of initialData) {
      if (!nodes.has(node)) {
        nodes.set(node, new NaiveRandomNode(node));
        if (!rootNode) rootNode = nodes.get(node);
      }

      if (left != null && !nodes.has(left)) {
        nodes.set(left, new NaiveRandomNode(left));
        nodes.get(node)!.setLeft(nodes.get(left)!);
      }

      if (right != null && !nodes.has(right)) {
        nodes.set(right, new NaiveRandomNode(right));
        nodes.get(node)!.setRight(nodes.get(right)!);
      }
    }

    return rootNode;
  }

  getRandomNode() {
    const nodes = this.traverseInOrder();
    return nodes[Math.round(Math.random() * (nodes.length - 1))];
  }
}
