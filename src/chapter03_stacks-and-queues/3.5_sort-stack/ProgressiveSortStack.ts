import Stack from '@utils/Stack';
import SortableStack from './base';

export default class ProgressiveSortStack<T> extends SortableStack<T> {
  static fromArray<T>(dataArr: T[]) {
    const stack = new ProgressiveSortStack<T>();
    dataArr.forEach(d => stack.push(d));
    return stack;
  }

  sort() {
    const tempStack = new Stack<T>();
    while (!this.isEmpty()) {
      const tmp = this.pop()!;
      while (!tempStack.isEmpty() && tempStack.peek()! > tmp) {
        this.push(tempStack.pop()!);
      }
      tempStack.push(tmp);
    }

    while (!tempStack.isEmpty()) this.push(tempStack.pop()!);

    return this;
  }
}
