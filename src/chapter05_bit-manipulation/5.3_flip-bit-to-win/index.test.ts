import each from 'jest-each';

import * as solutions from './index';

describe('Chapter 5 - 5.3 Flip Bit to Win', () => {
  Object.entries(solutions).forEach(([fnName, solution]) => {
    describe(`solution ${fnName}`, () => {
      each([[1775, 8], [0, 0], [3, 3], [5, 3], [9, 2]]).test(
        'identify longest sequence of 1s in %f (allowing 1 flip) to be %i.',
        (realNumber: number, expected: string) => {
          expect(solution(realNumber)).toBe(expected);
        },
      );
    });
  });
});
