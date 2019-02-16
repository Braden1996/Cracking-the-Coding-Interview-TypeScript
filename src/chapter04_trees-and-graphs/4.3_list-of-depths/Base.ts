import { Node } from '@utils/AdjacencyList';
import LinkedList from '@utils/LinkedList';

abstract class ListOfDepths<T> extends Node<T> {
  abstract getListOfDepths(): Array<LinkedList<Node<T>>>;
}

export default ListOfDepths;
