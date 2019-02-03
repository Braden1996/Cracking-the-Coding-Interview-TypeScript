export default class LinkedList<T> {
  static fromArray<T>(dataArr: T[]) {
    const rootNode = new LinkedList<T>(dataArr[0]);
    dataArr.slice(1).forEach(d => rootNode.appendToTail(d));
    return rootNode;
  }

  static fromChars(characters: string) {
    return LinkedList.fromArray(characters.split(''));
  }

  next: LinkedList<T> | null = null;
  data: T;

  constructor(data: T) {
    this.data = data;
  }

  toArray() {
    const outArr: T[] = [];
    this.traverse(n => outArr.push(n.data));
    return outArr;
  }

  toString() {
    return this.toArray().reduce(
      (str, n, i) => `${str}${i > 0 ? ' -> ' : ''}${n}`,
      '',
    );
  }

  protected appendToTail(data: T) {
    const end = this.find(n => n.next === null)!;
    end.next = new LinkedList<T>(data);
    return end.next;
  }

  protected find(checkFn: (curNode: LinkedList<T>) => boolean) {
    let foundNode = null;
    this.traverse(n => checkFn(n) && (foundNode = n) && true);
    return foundNode as LinkedList<T> | null;
  }

  protected traverse(callback: (curNode: LinkedList<T>) => any) {
    let forceStop;
    let curNode: LinkedList<T> | null = this;
    do {
      forceStop = callback(curNode) === true;
      curNode = curNode.next;
    } while (!forceStop && curNode !== null);
  }
}
