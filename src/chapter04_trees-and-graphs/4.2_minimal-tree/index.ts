import Graph, { Node } from '@utils/AdjacencyList';

export function constructMinimalTree<T>(arr: T[]) {
  if (arr.length === 0) return null;

  const graph = new Graph<T>();
  function constructWithBinarySearch(startIdx = 0, endIdx = arr.length - 1) {
    const pivotIdx = Math.ceil((startIdx + endIdx) / 2);
    const node = new Node(graph, arr[pivotIdx]);
    if (pivotIdx > startIdx) {
      const leftChildNode = constructWithBinarySearch(startIdx, pivotIdx - 1);
      node.addEdge(leftChildNode);
      if (pivotIdx < endIdx) {
        const rightChildNode = constructWithBinarySearch(pivotIdx + 1, endIdx);
        node.addEdge(rightChildNode);
      }
    }

    return node;
  }

  return constructWithBinarySearch();
}
