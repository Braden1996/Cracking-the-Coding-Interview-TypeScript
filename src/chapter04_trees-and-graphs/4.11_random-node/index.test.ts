import each from 'jest-each';

import { InitialData } from '@utils/BinaryTree';
import * as solutions from './index';

describe('Chapter 4 - 4.11 Random Node', () => {
  Object.entries(solutions).forEach(([fnName, Solution]) => {
    describe(`solution ${fnName}`, () => {
      each([
        [
          [
            [20, 10, 30],
            [10, 5, 15],
            [30, null, 35],
            [5, 3, 7],
            [15, null, 17],
          ],
        ],
      ]).test(
        'with Binary Trees %j and %j return %s to indicate if latter if subtree of former',
        async (treeData: InitialData<number>) => {
          const tree = Solution.build(treeData)!;

          const nodes = tree.traverseInOrder();

          // Each node should be hit once.
          // This will probably break one day...
          const hitCount = nodes.length * 500;
          const hits = new Array(hitCount)
            .fill(1)
            .map(_ => tree.getRandomNode())
            .reduce(
              (acc, data) => ({ ...acc, [data]: (acc[data] || 0) + 1 }),
              {} as {
                [data: number]: number;
              },
            );

          expect(Object.entries(hits)).toHaveLength(nodes.length);
        },
      );
    });
  });
});
