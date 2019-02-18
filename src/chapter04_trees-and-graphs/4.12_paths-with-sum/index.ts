import BinaryTreeNode from '@utils/BinaryTree';

function checkInPath(path: Array<BinaryTreeNode<number>>, searchSum: number) {
  let sum = 0;
  const curPath: typeof path = [];
  const foundPaths: Array<typeof path> = [];
  for (const node of path.slice().reverse()) {
    sum += node.value;
    curPath.unshift(node);
    if (sum === searchSum) foundPaths.push(curPath);
  }
  return foundPaths;
}

export function pathsWithSam(
  node: BinaryTreeNode<number>,
  searchSum: number,
  lastPath: Array<typeof node> = [],
) {
  const curPath = lastPath.concat([node]);
  const foundPaths = checkInPath(curPath, searchSum);
  if (node.left) {
    foundPaths.push(...pathsWithSam(node.left, searchSum, curPath));
  }
  if (node.right) {
    foundPaths.push(...pathsWithSam(node.right, searchSum, curPath));
  }
  return foundPaths;
}
