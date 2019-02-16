import { Node } from '@utils/AdjacencyList';

abstract class IsBinarySearchTree<T> extends Node<T> {
  abstract isBinarySearchTree(): boolean;
}

export default IsBinarySearchTree;
