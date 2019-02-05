import Stack from '@utils/Stack';

abstract class SortableStack<T> extends Stack<T> {
  abstract sort(): SortableStack<T>;
}

export default SortableStack;
