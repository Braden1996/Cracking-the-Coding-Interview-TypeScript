import Stack from '@utils/Stack';

export class MinStack<T> extends Stack<T> {
  private minReignCache: Array<{ value: T; count: number }> = [];

  get min() {
    const min = this.minReignCache[this.minReignCache.length - 1];
    return min ? min.value : null;
  }

  push(value: T) {
    super.push(value);
    if (this.min === null || value < this.min) {
      this.minReignCache.push({ value, count: 0 });
    }
    this.minReignCache[this.minReignCache.length - 1].count++;
  }

  pop() {
    const rtnValue = super.pop();
    if (rtnValue !== null) {
      this.minReignCache[this.minReignCache.length - 1].count--;
      if (this.minReignCache[this.minReignCache.length - 1].count === 0) {
        this.minReignCache.pop();
      }
    }
    return rtnValue;
  }
}
