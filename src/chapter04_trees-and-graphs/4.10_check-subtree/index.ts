import BinaryTreeNode from '@utils/BinaryTree';

function compareTrees<T>(t1: BinaryTreeNode<T> | null, t2: typeof t1): boolean {
  if (t1 === null || t2 === null) return t1 === t2;
  if (t1.value !== t2.value) return false;
  const checkLeft = t1.left ? compareTrees(t1.left, t2.left) : true;
  if (!checkLeft) return false;
  const checkRight = t1.right ? compareTrees(t1.right, t2.right) : true;
  return checkRight;
}

export function checkSubtree<T>(t1: BinaryTreeNode<T>, t2: typeof t1) {
  let subt1 = t1;
  const queue: Array<typeof t1> = [subt1];
  while (queue.length > 0) {
    subt1 = queue.shift()!;
    if (subt1.value === t2.value && compareTrees(subt1, t2)) return true;
    queue.push(
      ...(subt1.left ? [subt1.left] : []),
      ...(subt1.right ? [subt1.right] : []),
    );
  }
  return false;
}
