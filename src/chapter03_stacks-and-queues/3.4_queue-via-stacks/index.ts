import { IQueue } from '@utils/Queue';
import Stack from '@utils/Stack';

export default class QueueViaStacks<T> implements IQueue<T> {
  static fromArray<T>(dataArr: T[]) {
    const queue = new QueueViaStacks<T>();
    dataArr
      .slice()
      .reverse()
      .forEach(d => queue.add(d));
    return queue;
  }

  static fromChars(characters: string) {
    return QueueViaStacks.fromArray(characters.split(''));
  }

  private headStack = new Stack<T>();
  private tailStack = new Stack<T>();

  toArray() {
    this.moveAllToTailStack();
    return this.tailStack.toArray();
  }

  toString() {
    return this.toArray().reduce(
      (str, n, i) => `${str}${i > 0 ? ' -> ' : ''}${n}`,
      '',
    );
  }

  add(data: T) {
    this.moveAllToTailStack();
    return this.tailStack.push(data);
  }

  remove() {
    this.moveAllToHeadStack();
    return this.headStack.pop();
  }

  peek() {
    this.moveAllToHeadStack();
    return this.headStack.peek();
  }

  isEmpty() {
    return this.tailStack.isEmpty() && this.headStack.isEmpty();
  }

  private moveAllBetweenStacks(from: Stack<T>, to: Stack<T>) {
    if (!to.isEmpty()) return false;
    while (!from.isEmpty()) to.push(from.pop()!);
    return true;
  }

  private moveAllToHeadStack = () =>
    this.moveAllBetweenStacks(this.tailStack, this.headStack);
  private moveAllToTailStack = () =>
    this.moveAllBetweenStacks(this.headStack, this.tailStack);
}
