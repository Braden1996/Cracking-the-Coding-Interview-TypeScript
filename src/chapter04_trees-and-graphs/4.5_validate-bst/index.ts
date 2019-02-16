import IsBinarySearchTree from './Base';

export class RecursiveCheck<T> extends IsBinarySearchTree<T> {
  isBinarySearchTree(min: T | null = null, max: T | null = null): boolean {
    if (max !== null && this.data > max) return false;
    if (min !== null && this.data < min) return false;

    switch (this.children.length) {
      case 2:
        if (!this.children[1].isBinarySearchTree(this.data, max)) return false;
      case 1:
        if (!this.children[0].isBinarySearchTree(min, this.data)) return false;
      case 0:
        return true;
      default:
        return false;
    }
  }
}
