import Edge from './Edge';

interface INodeJSON<T> {
  node: T;
  children?: Array<INodeJSON<T>>;
}

export default class Node<T> {
  edges: ReadonlyArray<Edge<T, Node<T>>> = [];

  constructor(public data: T) {}

  get neighbors(): Array<Node<T>> {
    return this.edges.map(e => (e.start === this ? e.end : e.start));
  }

  get degree() {
    return this.edges.length;
  }

  toString = () => `${this.data}`;

  toJSON: () => INodeJSON<T> = () => ({
    node: this.data,
    ...(this.neighbors.length === 0
      ? {}
      : { neighbors: this.neighbors.map(child => child.toJSON()) }),
  });

  addEdge(edge: this['edges'][0]) {
    this.edges = this.edges.concat([edge]);

    return this;
  }

  deleteEdge(edge: this['edges'][0]) {
    this.edges = this.edges.filter(e => e !== edge);
  }

  hasEdge = (edge: this['edges'][0]) => this.edges.some(e => e === edge);

  hasNeighbor = (node: Node<T>) => this.neighbors.some(n => n === node);
}
