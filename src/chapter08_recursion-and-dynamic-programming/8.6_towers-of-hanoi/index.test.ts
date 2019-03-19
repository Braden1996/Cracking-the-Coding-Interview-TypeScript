import each from 'jest-each';

import Stack from '@utils/Stack';
import * as solutions from './index';

describe('Chapter 8 - 8.6 Towers of Hanoi', () => {
  Object.entries(solutions).forEach(([fnName, solution]) => {
    describe(`solution ${fnName}`, () => {
      each([[1], [2], [3], [4], [10]]).test(
        'correctly move tower of %i elements.',
        (a: number) => {
          const range = Array(a)
            .fill(1)
            .map((_, i) => i);
          const sourceStack = Stack.fromArray(range);
          const bufferStack = new Stack();
          const destinationStack = new Stack();

          solution(sourceStack, bufferStack, destinationStack);
          expect(sourceStack.isEmpty()).toBe(true);
          expect(bufferStack.isEmpty()).toBe(true);
          expect(destinationStack.toArray().reverse()).toEqual(range);
        },
      );
    });
  });
});
