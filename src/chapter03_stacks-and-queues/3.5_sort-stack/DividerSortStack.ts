import Stack from '@utils/Stack';
import SortableStack from './base';

export default class DividerSortStack<T> extends SortableStack<T> {
  static fromArray<T>(dataArr: T[]) {
    const stack = new DividerSortStack<T>();
    dataArr.forEach(d => stack.push(d));
    return stack;
  }

  private static findMinInStack<T>(
    stackToPop: Stack<T>,
    stackToPush: Stack<T>,
  ) {
    let curMin: T | null = null;
    while (stackToPop.peek() !== null) {
      const popped = stackToPop.pop()!;
      if (curMin === null || popped < curMin) {
        if (curMin !== null) stackToPush.push(curMin);
        curMin = popped;
      } else {
        stackToPush.push(popped);
      }
    }
    return curMin;
  }

  sort() {
    const sortedStack = new Stack<T | null>();
    let nextMin: T | null = null;
    let sortedDivider: null = null;
    while (!this.isEmpty()) {
      const curMin = DividerSortStack.findMinInStack(this, sortedStack)!;
      nextMin = DividerSortStack.findMinInStack(sortedStack, this);

      if (!sortedStack.isEmpty()) {
        sortedDivider = sortedStack.pop() as null;
      }
      sortedStack.push(curMin);
      if (nextMin !== null) sortedStack.push(nextMin);
      sortedStack.push(sortedDivider);
    }

    sortedDivider = sortedStack.pop() as null;
    while (!sortedStack.isEmpty()) this.push(sortedStack.pop()!);

    return this;
  }
}
