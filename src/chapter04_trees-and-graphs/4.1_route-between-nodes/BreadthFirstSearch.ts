import { Node } from '@utils/AdjacencyList';
import Queue from '@utils/Queue';
import RouteBetween from './Base';

export default class BreadthFirstSearch<T> extends RouteBetween<T> {
  isRouteBetween(startNode: Node<T>, destinationNode: typeof startNode) {
    const queue = new Queue<typeof startNode>();
    const visited = new Set<typeof startNode>();

    const enqueue = (n: typeof startNode) => {
      queue.add(n);
      visited.add(n);
    };
    enqueue(startNode);

    while (!queue.isEmpty()) {
      const node = queue.remove();
      if (node === destinationNode) return true;
      if (node !== null) {
        [...node.children].filter(n => !visited.has(n)).forEach(enqueue);
      }
    }

    return false;
  }
}
