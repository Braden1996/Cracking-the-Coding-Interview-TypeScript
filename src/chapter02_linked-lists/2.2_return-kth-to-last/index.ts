import LinkedList from '@utils/LinkedList';

export function getKthToLast(list: LinkedList<string>, k: number) {
  let fromLast: number;
  function recursiveGetKthToLast(
    head: typeof list['next'],
  ): typeof list['next'] {
    if (head === null) return null;
    const node = recursiveGetKthToLast(head.next);
    fromLast = (fromLast || 0) + 1;
    if (fromLast === k) return head;
    return node;
  }
  return recursiveGetKthToLast(list);
}
