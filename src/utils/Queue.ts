import LinkedList from './LinkedList';

export interface IQueue<T> {
  toArray: () => T[];
  toString: () => string;
  add: (data: T) => void;
  remove: () => T | null;
  peek: () => T | null;
  isEmpty: () => boolean;
}

export default class Queue<T> implements IQueue<T> {
  static fromArray<T>(dataArr: T[]) {
    const queue = new Queue<T>();
    dataArr.forEach(d => queue.add(d));
    return queue;
  }

  static fromChars(characters: string) {
    return LinkedList.fromArray(characters.split(''));
  }

  private first: LinkedList<T> | null = null;
  private last: LinkedList<T> | null = null;

  toArray() {
    return this.first ? this.first.toArray() : [];
  }

  toString() {
    return this.toArray().reduce(
      (str, n, i) => `${str}${i > 0 ? ' <- ' : ''}${n}`,
      '',
    );
  }

  add(data: T) {
    const node = new LinkedList(data);
    if (this.last !== null) this.last.next = node;
    this.last = node;
    if (this.first === null) this.first = this.last;
  }

  remove() {
    const popped = this.first;
    if (!popped) return null;
    this.first = popped.next;
    return popped.data;
  }

  peek() {
    return this.isEmpty() ? null : this.first!.data;
  }

  isEmpty() {
    return this.first === null;
  }
}
