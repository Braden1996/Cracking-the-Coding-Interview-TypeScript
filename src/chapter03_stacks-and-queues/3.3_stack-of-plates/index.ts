import Stack, { IStack } from '@utils/Stack';

export class SetOfStacks<T> implements IStack<T> {
  static fromArray<T>(capacity: number, dataArr: T[]) {
    const stack = new SetOfStacks<T>(capacity);
    dataArr.forEach(d => stack.push(d));
    return stack;
  }

  static fromChars(characters: string) {
    return Stack.fromArray(characters.split(''));
  }

  private stacks: Array<Stack<T>> = [];
  private stackLengths: number[] = [];

  constructor(readonly stackCapacity: number) {
    this.createStackSet();
  }

  toArray() {
    return this.stacks.reduce(
      (acc, cur) => cur.toArray().concat(acc),
      [] as T[],
    );
  }

  toString() {
    return this.stacks.reduce(
      (acc, cur) => `${cur.toString()}${acc.length > 0 ? ' --> ' : ''}${acc}`,
      '',
    );
  }

  push(data: T) {
    if (this.stackLengths[this.stacks.length - 1] === this.stackCapacity) {
      this.createStackSet();
    }
    this.stacks[this.stacks.length - 1].push(data);
    this.stackLengths[this.stackLengths.length - 1]++;
  }

  pop() {
    const popped = this.stacks[this.stacks.length - 1].pop();
    this.stackLengths[this.stackLengths.length - 1]--;
    if (this.stackLengths[this.stacks.length - 1] === 0) {
      this.deleteStackSet();
    }
    return popped;
  }

  popAt(stackIdx: number) {
    if (stackIdx > this.stackLengths.length - 1) {
      return null;
    } else if (stackIdx === this.stackLengths.length - 1) {
      return this.pop();
    } else {
      const popped = this.stacks[stackIdx].pop()!;

      let shiftStackIdx = stackIdx;
      while (shiftStackIdx + 1 <= this.stacks.length - 1) {
        const nextStack = this.stacks[shiftStackIdx + 1].toArray();
        this.stacks[shiftStackIdx].push(nextStack.pop()!);
        this.stacks[shiftStackIdx + 1] = Stack.fromArray(nextStack.reverse());
        shiftStackIdx++;
      }

      return popped;
    }
  }

  peek() {
    return this.stacks[this.stacks.length - 1].peek();
  }

  isEmpty() {
    return this.stacks[this.stacks.length - 1].isEmpty();
  }

  private createStackSet() {
    this.stacks.push(new Stack());
    this.stackLengths.push(0);
  }

  private deleteStackSet() {
    if (this.stacks.length === 0) return false;

    this.stacks.pop();
    this.stackLengths.pop();
    return true;
  }
}
