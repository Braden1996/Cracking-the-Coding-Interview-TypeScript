import LinkedList from './LinkedList';

export interface IStack<T> {
  toArray: () => T[];
  toString: () => string;
  push: (data: T) => void;
  pop: () => T | null;
  peek: () => T | null;
  isEmpty: () => boolean;
}

export default class Stack<T> implements IStack<T> {
  static fromArray<T>(dataArr: T[]) {
    const stack = new Stack<T>();
    dataArr.forEach(d => stack.push(d));
    return stack;
  }

  static fromChars(characters: string) {
    return Stack.fromArray(characters.split(''));
  }

  private top: LinkedList<T> | null = null;

  toArray() {
    return this.top ? this.top.toArray() : [];
  }

  toString() {
    return this.top ? this.top.toString() : '';
  }

  push(data: T) {
    const node = new LinkedList(data);
    node.next = this.top;
    this.top = node;
  }

  pop() {
    const popped = this.top;
    if (!popped) return null;
    this.top = popped.next;
    return popped.data;
  }

  peek() {
    return this.isEmpty() ? null : this.top!.data;
  }

  isEmpty() {
    return this.top === null;
  }
}
