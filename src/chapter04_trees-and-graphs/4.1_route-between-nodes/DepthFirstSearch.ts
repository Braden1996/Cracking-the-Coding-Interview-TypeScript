import RouteBetween from './Base';

export default class DepthFirstSearch<T> extends RouteBetween<T> {
  isRouteBetween(startNode: T, destinationNode: typeof startNode) {
    const visited = new Set<typeof startNode>();
    return this._isRouteBetween(startNode, destinationNode, visited);
  }

  private _isRouteBetween(
    startNode: T,
    destinationNode: typeof startNode,
    visited: Set<typeof startNode>,
  ): boolean {
    if (startNode === destinationNode) return true;
    return [...this.getOutgoing(startNode)]
      .filter(n => !visited.has(n))
      .some(child => {
        visited.add(child);
        return this._isRouteBetween(child, destinationNode, visited);
      });
  }
}
