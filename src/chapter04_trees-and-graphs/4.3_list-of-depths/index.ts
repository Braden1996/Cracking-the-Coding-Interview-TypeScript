import { Node } from '@utils/AdjacencyList';
import LinkedList from '@utils/LinkedList';
import Queue from '@utils/Queue';
import ListOfDepths from './Base';

export class BreadthFirstSearch<T> extends ListOfDepths<T> {
  getListOfDepths() {
    const depthLists: Array<LinkedList<Node<T>>> = [];
    const depthListsTail: Array<LinkedList<Node<T>>> = [];
    const queue = new Queue<Node<T>>();
    queue.add(this);

    let currentDepth = 0;
    let nodesThisDepth = 1;
    let nodesNextDepth = 0;
    while (!queue.isEmpty()) {
      const node = queue.remove()!;
      nodesThisDepth--;

      const newLinkedListNode = new LinkedList(node);
      if (depthLists[currentDepth] === undefined) {
        depthLists[currentDepth] = newLinkedListNode;
        depthListsTail[currentDepth] = depthLists[currentDepth];
      } else {
        depthListsTail[currentDepth].next = newLinkedListNode;
        depthListsTail[currentDepth] = newLinkedListNode;
      }

      node.children.forEach(n => queue.add(n));
      nodesNextDepth += node.children.length;

      if (nodesThisDepth === 0) {
        currentDepth++;
        nodesThisDepth = nodesNextDepth;
        nodesNextDepth = 0;
      }
    }

    return depthLists;
  }
}
