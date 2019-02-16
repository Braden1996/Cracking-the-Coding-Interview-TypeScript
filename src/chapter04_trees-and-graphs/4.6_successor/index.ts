import { Node } from '@utils/AdjacencyList';

export class TwoCaseCheck<T> extends Node<T> {
  parent: TwoCaseCheck<T> | null = null;

  children: Array<TwoCaseCheck<T>> = [];

  addEdge(otherNode: TwoCaseCheck<T>) {
    super.addEdge(otherNode);
    otherNode.parent = this;
  }

  removeEdge(otherNode: TwoCaseCheck<T>) {
    super.removeEdge(otherNode);
    otherNode.parent = null;
  }

  findInOrderSuccessor(): TwoCaseCheck<T> | null {
    if (this.children[1]) return this.children[1].findLeftMostNode();

    let parent = this.parent;
    let curNode: typeof parent = this;
    while (parent && curNode !== parent.children[0]) {
      curNode = parent;
      parent = parent.parent;
    }

    return parent;
  }

  private findLeftMostNode(): TwoCaseCheck<T> {
    return this.children[0] ? this.children[0].findLeftMostNode() : this;
  }
}
