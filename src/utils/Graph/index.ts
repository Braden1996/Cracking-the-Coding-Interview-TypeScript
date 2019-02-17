import Edge from './Edge';
import Node from './Node';

export type InitialData<T> = Array<[T, T?, Edge<T, Node<T>>['weight']?]>;

export default class Graph<T> {
  private readonly nodes: Map<T, Node<T>> = new Map();
  private readonly edges: Map<
    ReturnType<typeof Edge['getKey']>,
    Edge<T, Node<T>>
  > = new Map();

  constructor(initialData: InitialData<T> = []) {
    for (const [start, end, weight] of initialData) {
      if (!this.hasNode(start)) this.addNode(start);
      if (end) {
        if (!this.hasNode(end)) this.addNode(end);
        this.addEdge(start, end, weight);
      }
    }
  }

  addNodes = (arr: T[]) => arr.forEach(data => this.addNode(data));

  addEdges = (
    arr: Array<[T, T]>,
    weights: Array<Edge<T, Node<T>>['weight']> = [],
  ) => arr.forEach(([start, end], i) => this.addEdge(start, end, weights[i]));

  findNodes = () => Array.from(this.nodes.keys());

  hasNode = (data: T) => this.nodes.has(data);

  addNode(data: T) {
    if (this.hasNode(data)) {
      throw new Error(`Node '${data}' already exists in graph!`);
    }
    this.nodes.set(data, new Node(data));
    return this;
  }

  removeNode(data: T) {
    if (!this.hasNode(data)) {
      throw new Error(`Node '${data}' does not exist in graph!`);
    }
    this.nodes.delete(data);
    return this;
  }

  findEdges = () =>
    Array.from(this.edges.values()).map(
      e => [e.start.data, e.end.data] as [T, T],
    );

  hasEdge = (start: T, end: T) => this.edges.has(Edge.getKey(start, end));

  addEdge(start: T, end: T, weight?: Edge<T, Node<T>>['weight']) {
    const [startNode, endNode] = this.getNodesOtherwiseError(start, end);
    const edge = new Edge<T, Node<T>>(startNode, endNode, weight);

    edge.start.addEdge(edge);
    edge.end.addEdge(edge);
    this.edges.set(edge.key, edge);

    return this;
  }

  removeEdge(start: T, end: T) {
    const [startNode, endNode] = this.getNodesOtherwiseError(start, end);

    const edge = this.edges.get(Edge.getKey(start, end));
    if (edge === undefined) {
      const edgeStr = new Edge<T, Node<T>>(startNode, endNode).toString();
      throw new Error(`Edge '${edgeStr}' does not exist in graph!`);
    }

    edge.start.deleteEdge(edge);
    edge.end.deleteEdge(edge);
    this.edges.delete(edge.key);

    return this;
  }

  getNeighbors = (data: T) =>
    this.getNodesOtherwiseError(data)[0].neighbors.map(d => d.data);

  hasNeighbor = (a: T, b: T) => {
    const [aNode, bNode] = this.getNodesOtherwiseError(a, b);
    return aNode.hasNeighbor(bNode);
  };

  getOutgoing = (data: T) =>
    this.getNeighbors(data).filter(d => this.hasEdge(data, d));

  getIncoming = (data: T) =>
    this.getNeighbors(data).filter(d => this.hasEdge(d, data));

  getDegree = (data: T) => this.getNodesOtherwiseError(data)[0].degree;

  private getNodesOtherwiseError = (...nodes: T[]) => {
    const unknownNode = nodes.find(n => !this.hasNode(n));
    if (unknownNode) {
      throw new Error(`Node ${unknownNode} does not exist in graph!`);
    }
    return nodes.map(n => this.nodes.get(n)!);
  };
}
