import LinkedList from './LinkedList';

export default class TestFriendlyLinkedList<T> extends LinkedList<T> {
  find(checkFn: (curNode: LinkedList<T>) => boolean) {
    return super.find(checkFn);
  }
}
