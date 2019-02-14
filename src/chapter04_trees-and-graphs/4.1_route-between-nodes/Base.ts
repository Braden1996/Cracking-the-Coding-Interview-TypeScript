import Graph, { Node } from '@utils/AdjacencyList';

abstract class RouteBetween<T> extends Graph<T> {
  abstract isRouteBetween(
    startNode: Node<T>,
    destinationNode: typeof startNode,
  ): boolean;
}

export default RouteBetween;
