import each from 'jest-each';

import BinaryTree, { InitialData } from '@utils/BinaryTree';
import * as solutions from './index';

describe('Chapter 4 - 4.9 BST Sequences', () => {
  Object.entries(solutions).forEach(([fnName, solution]) => {
    describe(`solution ${fnName}`, () => {
      each([
        [[[1]], [[1]]],
        [[[2, 1, 3]], [[2, 1, 3], [2, 3, 1]]],
        [
          [[2, 1, 4], [4, 3, 5]],
          [
            [2, 1, 4, 3, 5],
            [2, 1, 4, 5, 3],
            [2, 4, 1, 3, 5],
            [2, 4, 1, 5, 3],
            [2, 4, 3, 1, 5],
            [2, 4, 3, 5, 1],
            [2, 4, 5, 1, 3],
            [2, 4, 5, 3, 1],
          ],
        ],
      ]).test(
        'with Binary Tree %j find all potential input sequences',
        (initialData: InitialData<number>, expected: number[][]) => {
          const tree = BinaryTree.build(initialData)!;
          expect(solution(tree).sort()).toEqual(expected.sort());
        },
      );
    });
  });
});
