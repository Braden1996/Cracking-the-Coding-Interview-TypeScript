import BinaryTreeNode from '@utils/BinaryTree';

abstract class GetRandomNode<T> extends BinaryTreeNode<T> {
  abstract getRandomNode(): T;
}

export default GetRandomNode;
