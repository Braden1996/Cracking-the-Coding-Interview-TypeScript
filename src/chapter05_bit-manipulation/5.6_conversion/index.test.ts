import each from 'jest-each';

import * as solutions from './index';

describe('Chapter 5 - 5.6 Conversion', () => {
  Object.entries(solutions).forEach(([fnName, solution]) => {
    describe(`solution ${fnName}`, () => {
      each([
        [0b0010, 0b0010, 0],
        [0b0010, 0b0011, 1],
        [0b0010, 0b1111, 3],
        [0b0010, 0b1101, 4],
        [0b11101, 0b01111, 2],
      ]).test(
        'identify that the number of bit flips to go from %i to %i is %i.',
        (a: number, b: number, expected: boolean) => {
          expect(solution(a, b)).toBe(expected);
        },
      );
    });
  });
});
