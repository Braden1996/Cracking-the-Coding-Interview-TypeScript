import each from 'jest-each';

import * as solutions from './index';

describe('Chapter 8 - 8.2 Robot in a Grid', () => {
  Object.entries(solutions).forEach(([fnName, solution]) => {
    describe(`solution ${fnName}`, () => {
      each([
        [
          [
            [false, false, false, false, false, false],
            [true, true, true, true, true, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
          ],
          [
            [0, 0],
            [1, 0],
            [2, 0],
            [3, 0],
            [4, 0],
            [5, 0],
            [5, 1],
            [5, 2],
            [5, 3],
            [5, 4],
          ],
        ],
        [
          [
            [false, false, true, false, false, false],
            [true, false, false, false, false, false],
            [false, false, true, true, true, true],
            [false, false, false, false, false, true],
            [false, false, true, true, false, false],
          ],
          [
            [0, 0],
            [1, 0],
            [1, 1],
            [1, 2],
            [1, 3],
            [2, 3],
            [3, 3],
            [4, 3],
            [4, 4],
            [5, 4],
          ],
        ],
      ]).test(
        'with test case %# find correct path.',
        (grid: boolean[][], path: Array<[number, number]>) => {
          expect(solution(grid)).toEqual(path);
        },
      );
    });
  });
});
