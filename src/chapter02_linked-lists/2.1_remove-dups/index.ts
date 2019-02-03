import LinkedList from '@utils/LinkedList';

export function removeDups(list: LinkedList<string>) {
  let lastNode = list;
  const encounteredString = new Map<string, boolean>([[lastNode.data, true]]);

  let curNode = list.next;
  while (curNode !== null) {
    if (encounteredString.get(curNode.data)) {
      lastNode.next = curNode.next;
    } else {
      encounteredString.set(curNode.data, true);
      lastNode = curNode;
    }
    curNode = curNode.next;
  }
  return list;
}

export function removeDups2(list: LinkedList<string>) {
  let curNode: typeof list['next'] = list;
  while (curNode !== null) {
    let runnerNode = curNode;
    while (runnerNode.next !== null) {
      if (runnerNode.next.data === curNode.data) {
        runnerNode.next = runnerNode.next.next;
      } else {
        runnerNode = runnerNode.next;
      }
    }
    curNode = curNode.next;
  }
  return list;
}
