import BinaryTreeNode from '@utils/BinaryTree';

function findRouteUsingDFS<T>(
  startNode: BinaryTreeNode<T> | null,
  destinationData: T,
): T[] | false {
  if (startNode === null) return false;

  if (startNode.value === destinationData) return [destinationData];

  const foundDownLeft = findRouteUsingDFS(startNode.left, destinationData);
  if (foundDownLeft) return [startNode.value, ...foundDownLeft];

  const foundDownRight = findRouteUsingDFS(startNode.right, destinationData);
  if (foundDownRight) return [startNode.value, ...foundDownRight];

  return false;
}

export function dfsIntersection<T>(rootNode: BinaryTreeNode<T>, a: T, b: T) {
  const aRoute = findRouteUsingDFS(rootNode, a);
  const bRoute = findRouteUsingDFS(rootNode, b);

  if (!aRoute || !bRoute) return null;
  while (aRoute.length > 1 && bRoute.length > 1 && aRoute[1] === bRoute[1]) {
    aRoute.shift();
    bRoute.shift();
  }

  return aRoute[0];
}
