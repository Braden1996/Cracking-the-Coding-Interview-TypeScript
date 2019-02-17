import each from 'jest-each';

import BinaryTree, { InitialData } from '@utils/BinaryTree';
import * as solutions from './index';

describe('Chapter 4 - 4.10 Check Subtree', () => {
  Object.entries(solutions).forEach(([fnName, solution]) => {
    describe(`solution ${fnName}`, () => {
      each([
        [
          [
            [50, 20, 60],
            [20, 10, 25],
            [60, null, 70],
            [10, 5, 15],
            [70, 65, 80],
          ],
          [
            [50, 20, 60],
            [20, 10, 25],
            [60, null, 70],
            [10, 5, 15],
            [70, 65, 80],
          ],
          true,
        ],
        [
          [
            [50, 20, 60],
            [20, 10, 25],
            [60, null, 70],
            [10, 5, 15],
            [70, 65, 80],
          ],
          [[70, 65, 80]],
          true,
        ],
        [
          [
            [50, 20, 60],
            [20, 10, 25],
            [60, null, 70],
            [10, 5, 15],
            [70, 65, 80],
          ],
          [[20, 10, 25], [10, 5, 15]],
          true,
        ],
        [
          [
            [50, 20, 60],
            [20, 10, 25],
            [60, null, 70],
            [10, 5, 15],
            [70, 65, 80],
          ],
          [[20, 10, 25], [10, 5, null]],
          false,
        ],
        [
          [
            [50, 20, 60],
            [20, 10, 25],
            [60, null, 70],
            [10, 5, 15],
            [70, 65, 80],
          ],
          [[20, 10, 25], [10, 5, -15]],
          false,
        ],
      ]).test(
        'with Binary Trees %j and %j return %s to indicate if latter if subtree of former',
        (
          treeData1: InitialData<number>,
          treeData2: typeof treeData1,
          expected: boolean,
        ) => {
          const tree1 = BinaryTree.build(treeData1)!;
          const tree2 = BinaryTree.build(treeData2)!;
          expect(solution(tree1, tree2)).toBe(expected);
        },
      );
    });
  });
});
