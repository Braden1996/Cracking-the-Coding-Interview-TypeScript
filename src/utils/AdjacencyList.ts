interface INodeJSON<T> {
  node: T;
  children?: Array<INodeJSON<T>>;
}

export class Node<T> {
  children: Array<Node<T>> = [];
  constructor(graph: Graph<T>, public data: T) {
    graph.addNode(this);
  }

  toString() {
    return `${this.data}`;
  }

  toJSON(): INodeJSON<T> {
    return {
      node: this.data,
      ...(this.children.length === 0
        ? {}
        : { children: this.children.map(child => child.toJSON()) }),
    };
  }

  findEdges = () => Array.from(this.children);

  hasEdge = (otherNode: Node<T>) => this.children.indexOf(otherNode) !== -1;

  addEdge(otherNode: Node<T>) {
    if (this.hasEdge(otherNode)) {
      throw new Error(`Edge '${this}' -> '${otherNode}' already exists!`);
    }
    this.children.push(otherNode);
  }

  removeEdge(otherNode: Node<T>) {
    if (!this.hasEdge(otherNode)) {
      throw new Error(`Edge '${this}' -> '${otherNode}' does not exist!`);
    }
    this.children = this.children.filter(n => n !== otherNode);
  }

  isBinarySearchTree(min: T | null = null, max: T | null = null): boolean {
    if (max !== null && this.data > max) return false;
    if (min !== null && this.data < min) return false;

    switch (this.children.length) {
      case 2:
        if (!this.children[1].isBinarySearchTree(this.data, max)) return false;
      case 1:
        if (!this.children[0].isBinarySearchTree(min, this.data)) return false;
      case 0:
        return true;
      default:
        return false;
    }
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
