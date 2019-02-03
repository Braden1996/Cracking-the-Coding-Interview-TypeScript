class StackInfo<T> {
  size = 0;

  constructor(
    public start: number,
    public capacity: number,
    private multiStack: ExposedMultiStack<T>,
  ) {}

  isWithinStackCapacity(index: number) {
    if (index < 0 || index >= this.multiStack.values.length) {
      return false;
    }
    const contiguousIndex =
      index < this.start ? index + this.multiStack.values.length : index;
    const end = this.start + this.capacity;
    return this.start <= contiguousIndex && contiguousIndex < end;
  }

  lastCapacityIndex = () =>
    this.multiStack.adjustIndex(this.start + this.capacity - 1);
  lastElementIndex = () =>
    this.multiStack.adjustIndex(this.start + this.size - 1);
  isFull = () => this.size === this.capacity;
  isEmpty = () => this.size === 0;
}

class ExposedMultiStack<T> {
  constructor(
    readonly values: FlexibleMultiStack<T>['values'],
    readonly adjustIndex: FlexibleMultiStack<T>['adjustIndex'],
  ) {}
}

export default class FlexibleMultiStack<T = string> {
  private readonly info: Array<StackInfo<T>> = [];
  private readonly values: Array<T | undefined> = [];

  constructor(numberOfStacks: number, defaultSize: number) {
    const exposedMultiStack = new ExposedMultiStack(
      this.values,
      this.adjustIndex,
    );
    for (let i = 0; i < numberOfStacks; i++) {
      this.info.push(
        new StackInfo(defaultSize * i, defaultSize, exposedMultiStack),
      );
    }
    this.values = Array(numberOfStacks * defaultSize);
  }

  push(stackNumber: number, value: T) {
    if (this.allStacksAreFull()) {
      throw new Error('All stacks are full');
    }

    const stack = this.info[stackNumber];
    if (stack.isFull()) {
      this.expand(stackNumber);
    }

    stack.size++;
    this.values[stack.lastElementIndex()] = value;
  }

  pop(stackNumber: number) {
    const stack = this.info[stackNumber];
    if (stack.isEmpty()) {
      throw new Error(`Stack ${stackNumber} is empty.`);
    }

    const value = this.values[stack.lastElementIndex()];
    this.values[stack.lastElementIndex()] = undefined;
    stack.size--;
    return value;
  }

  readonly peek = (stackNumber: number) => {
    const stack = this.info[stackNumber];
    return stack.capacity === 0
      ? undefined
      : this.values[stack.lastElementIndex()];
  };

  readonly numberOfElements = () =>
    this.info.reduce((sum, si) => sum + si.size, 0);
  readonly allStacksAreFull = () =>
    this.numberOfElements() === this.values.length;

  private shift(stackNumber: number) {
    const stack = this.info[stackNumber];

    // Cannot (yet) shift this stack; try shift the next one.
    if (stack.size >= stack.capacity) {
      const nextStack = (stackNumber + 1) % this.info.length;
      this.shift(nextStack);
      stack.capacity++; // Claim freed space from next stack
    }

    // Shift each element in stack one to the right.
    let index = stack.lastElementIndex();
    while (stack.isWithinStackCapacity(index)) {
      this.values[index] = this.values[this.previousIndex(index)];
      index = this.previousIndex(index);
    }

    this.values[stack.start] = undefined;
    stack.start = this.nextIndex(stack.start);
    stack.capacity--;
  }
  private expand(stackNumber: number) {
    this.shift((stackNumber + 1) % this.info.length);
    this.info[stackNumber].capacity++;
  }
  private readonly adjustIndex = (index: number) =>
    ((index % this.values.length) + this.values.length) % this.values.length;
  private readonly nextIndex = (index: number) => this.adjustIndex(index + 1);
  private readonly previousIndex = (index: number) =>
    this.adjustIndex(index - 1);
}
