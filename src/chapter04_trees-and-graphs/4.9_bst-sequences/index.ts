import BinaryTreeNode from '@utils/BinaryTree';

function weaveLists<T>(first: T[], second: T[], prefix: T[], sequences: T[][]) {
  if (first.length && second.length) {
    prefix.push(first.shift()!);
    weaveLists(first, second, prefix, sequences);
    first.unshift(prefix.pop()!);

    prefix.push(second.shift()!);
    weaveLists(first, second, prefix, sequences);
    second.unshift(prefix.pop()!);
  } else {
    sequences.push([...prefix, ...first, ...second]);
  }
}

export function getAllSequences<T>(node: BinaryTreeNode<T> | null): T[][] {
  if (node === null) return [[]];

  const prefix = [node.value];

  const leftSeq = getAllSequences(node.left);
  const rightSeq = getAllSequences(node.right);

  const result: T[][] = [];
  for (const left of leftSeq) {
    for (const right of rightSeq) {
      const weaved: T[][] = [];
      weaveLists(left, right, prefix, weaved);
      result.push(...weaved);
    }
  }

  return result;
}
