import each from 'jest-each';

import * as solutions from './index';

describe('Chapter 1 - 1.8 Zero Matrix', () => {
  Object.entries(solutions).forEach(([fnName, solution]) => {
    describe(`Solution ${fnName}`, () => {
      each([
        [
          [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 0, 1], [2, 3, 4, 5]],
          [[0, 0, 0, 0], [0, 5, 0, 7], [0, 0, 0, 0], [0, 3, 0, 5]],
        ],
      ]).test(
        'with %p return %p',
        (testMatrix: number[][], expected: number[][]) => {
          expect(solution(testMatrix)).toEqual(expected);
        },
      );
    });
  });
});
