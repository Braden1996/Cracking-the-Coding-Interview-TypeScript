import IsBalanced from './Base';

export class RecursiveHeight<T> extends IsBalanced<T> {
  children: Array<RecursiveHeight<T>> = [];

  isBalanced() {
    return this.checkBalancedHeight() !== Number.MIN_SAFE_INTEGER;
  }

  private checkBalancedHeight(): number {
    const leftHeight = this.children[0]
      ? this.children[0].checkBalancedHeight()
      : -1;
    const rightHeight = this.children[1]
      ? this.children[1].checkBalancedHeight()
      : -1;

    // Propagate after we've found an imbalance.
    if ([leftHeight, rightHeight].includes(Number.MIN_SAFE_INTEGER)) {
      return Number.MIN_SAFE_INTEGER;
    }

    if (Math.abs(leftHeight - rightHeight) > 1) return Number.MIN_SAFE_INTEGER;
    return Math.max(leftHeight, rightHeight) + 1;
  }
}
