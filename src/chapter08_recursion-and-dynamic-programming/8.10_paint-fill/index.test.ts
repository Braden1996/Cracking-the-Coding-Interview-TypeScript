import each from 'jest-each';

import * as solutions from './index';

describe('Chapter 8 - 8.10 Paint Fill', () => {
  Object.entries(solutions).forEach(([fnName, solution]) => {
    describe(`solution ${fnName}`, () => {
      // prettier-ignore
      const grid = [
        [1, 1, 3, 3],
        [1, 1, 2, 3],
        [2, 1, 3, 1],
        [1, 1, 1, 3]
      ];

      each([
        // prettier-ignore
        [[0, 0], 2, [
          [2, 2, 3, 3],
          [2, 2, 2, 3],
          [2, 2, 3, 1],
          [2, 2, 2, 3]
        ]],
        // prettier-ignore
        [[3, 2], 2, [
          [1, 1, 3, 3],
          [1, 1, 2, 3],
          [2, 1, 3, 2],
          [1, 1, 1, 3]
        ]],
        // prettier-ignore
        [[3, 1], 1, [
          [1, 1, 1, 1],
          [1, 1, 2, 1],
          [2, 1, 3, 1],
          [1, 1, 1, 3]
        ]],
      ]).test(
        'correctly fill-paint coord %p to %i within grid.',
        (
          paintCoord: [number, number],
          fillValue: number,
          expectedGrid: typeof grid,
        ) => {
          expect(solution(grid, paintCoord, fillValue)).toEqual(expectedGrid);
        },
      );
    });
  });
});
