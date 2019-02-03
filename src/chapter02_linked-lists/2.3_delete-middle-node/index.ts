import LinkedList from '@utils/LinkedList';

function recursivelyReplaceNodeWithNext<T>(node: LinkedList<T>) {
  if (node.next === null) return null;
  const nextValue = recursivelyReplaceNodeWithNext(node.next);
  const lastValue = node.data;
  if (nextValue === null) {
    node.data = node.next.data;
    node.next = null;
  } else {
    node.data = nextValue;
  }
  return lastValue;
}

export function deleteMiddleNode<T>(node: LinkedList<T>) {
  if (node.next === null) {
    throw new Error('Unable to delete last node with this approach.');
  }
  recursivelyReplaceNodeWithNext(node);
}
