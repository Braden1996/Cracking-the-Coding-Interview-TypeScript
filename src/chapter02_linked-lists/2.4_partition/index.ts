import LinkedList from '@utils/LinkedList';

export function partition(list: LinkedList<number>, pivot: number) {
  let leftListFirst: typeof list['next'] = null;
  let leftListLast: typeof list['next'] = null;
  let rightListFirst: typeof list['next'] = null;
  let rightListLast: typeof list['next'] = null;

  let curNode: typeof list['next'] = list;
  while (curNode !== null) {
    const nextNode: typeof curNode['next'] = curNode.next;
    if (curNode.data < pivot) {
      if (leftListFirst === null) {
        leftListLast = curNode;
      } else {
        curNode.next = leftListFirst;
      }
      leftListFirst = curNode;
    } else {
      if (rightListLast === null) {
        rightListFirst = curNode;
      } else {
        rightListLast.next = curNode;
      }
      rightListLast = curNode;
    }
    curNode = nextNode;
  }

  if (rightListLast !== null) rightListLast.next = null;
  if (leftListLast === null) return rightListFirst;

  leftListLast.next = rightListFirst;
  return leftListFirst;
}
