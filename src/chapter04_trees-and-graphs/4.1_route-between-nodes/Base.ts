import Graph from '@utils/Graph';

abstract class RouteBetween<T> extends Graph<T> {
  abstract isRouteBetween(
    startNode: T,
    destinationNode: typeof startNode,
  ): boolean;
}

export default RouteBetween;
