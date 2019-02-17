import each from 'jest-each';

import BinaryTree, { InitialData } from '@utils/BinaryTree';
import * as solutions from './index';

describe('Chapter 4 - 4.8 First Common Ancestor', () => {
  Object.entries(solutions).forEach(([fnName, solution]) => {
    describe(`solution ${fnName}`, () => {
      each([
        [[[6, 4, 3], [4, 5, 6], [3, 1, 2], [2, null, 9]], 1, 9, 3],
        [[[6, 4, 3], [4, 5, 6], [3, 1, 2], [2, null, 9]], 1, 6, 6],
        [[[6, 4, 3], [4, 5, 6], [3, 1, 2], [2, null, 9]], 1, -1, null],
        [[[20, 10, 30], [10, 5, 15], [5, 3, 7], [15, null, 17]], 7, 17, 10],
      ]).test(
        'with Binary Tree %j find first common ancestor between "%s" and "%s" to be "%s" ',
        (
          initialData: InitialData<number>,
          a: number,
          b: number,
          expected: number,
        ) => {
          const tree = BinaryTree.build(initialData)!;
          expect(solution(tree, a, b)).toBe(expected);
        },
      );
    });
  });
});
