export class Node<T> {
  children: Set<Node<T>> = new Set();
  constructor(graph: Graph<T>, public data: T) {
    graph.addNode(this);
  }

  findEdges = () => Array.from(this.children);

  hasEdge = (otherNode: Node<T>) => this.children.has(otherNode);

  addEdge(otherNode: Node<T>) {
    if (this.hasEdge(otherNode)) {
      throw new Error(`Edge '${this}' -> '${otherNode}' already exists!`);
    }
    this.children.add(otherNode);
  }

  removeEdge(otherNode: Node<T>) {
    if (!this.hasEdge(otherNode)) {
      throw new Error(`Edge '${this}' -> '${otherNode}' does not exist!`);
    }
    this.children.delete(otherNode);
  }
}

export default class Graph<T> {
  private readonly nodes: Set<Node<T>> = new Set();

  nodesFromArray: (arr: T[]) => Array<Node<T>> = arr =>
    arr.map(value => new Node(this, value));

  findNodes = () => Array.from(this.nodes);

  hasNode = (node: Node<T>) => this.nodes.has(node);

  addNode(node: Node<T>) {
    if (this.hasNode(node)) {
      throw new Error(`Node '${node}' already exists in graph!`);
    }
    this.nodes.add(node);
    return this;
  }

  removeNode(node: Node<T>) {
    if (!this.hasNode(node)) {
      throw new Error(`Node '${node}' does not exist in graph!`);
    }
    this.nodes.add(node);
    return this;
  }
}
