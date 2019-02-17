export default class Edge<T, NodeT extends { data: T }> {
  static getKey = (start: unknown, end: unknown) => `${start}->${end}`;

  constructor(
    readonly start: NodeT,
    readonly end: NodeT,
    readonly weight: number = 0,
  ) {}

  get key() {
    return Edge.getKey(this.start.data, this.end.data);
  }

  toString = () => Edge.getKey(this.start, this.end);
}
