import { Node } from '@utils/AdjacencyList';

abstract class IsBalanced<T> extends Node<T> {
  abstract isBalanced(): boolean;
}

export default IsBalanced;
