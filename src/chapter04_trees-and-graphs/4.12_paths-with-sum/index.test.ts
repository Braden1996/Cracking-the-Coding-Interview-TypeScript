import each from 'jest-each';

import BinaryTree, { InitialData } from '@utils/BinaryTree';
import * as solutions from './index';

describe('Chapter 4 - 4.12 Paths with Sum', () => {
  Object.entries(solutions).forEach(([fnName, solution]) => {
    describe(`solution ${fnName}`, () => {
      each([
        [
          [[12, 8, 4], [8, 14, 3], [14, 6, null], [4, 7, null]],
          23,
          [[12, 4, 7], [12, 8, 3]],
        ],
        [
          [
            [10, 5, -3],
            [5, 3, 1],
            [-3, null, 11],
            [3, null, -2],
            [1, null, 2],
            [-2, 12, null],
          ],
          18,
          [[10, -3, 11], [10, 5, 1, 2], [10, 5, 3], [10, 5, 3, -2, 12]],
        ],
      ]).test(
        'with Binary Trees %j and %j return %s to indicate if latter if subtree of former',
        (
          treeData: InitialData<number>,
          searchForSum: number,
          expected: number[][],
        ) => {
          const tree = BinaryTree.build(treeData)!;
          const paths = solution(tree, searchForSum)
            .map(path => path.map(node => node.value))
            .sort();
          expect(paths).toEqual(expected.sort());
        },
      );
    });
  });
});
