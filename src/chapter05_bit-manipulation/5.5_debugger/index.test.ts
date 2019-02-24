import each from 'jest-each';

import * as solutions from './index';

describe('Chapter 5 - 5.5 Debugger', () => {
  Object.entries(solutions).forEach(([fnName, solution]) => {
    describe(`solution ${fnName}`, () => {
      each([
        [1, true],
        [2, true],
        [3, false],
        [4, true],
        [5, false],
        [6, false],
      ]).test(
        'with %i identify %p meaning it is a power of 2.',
        (num: number, expected: boolean) => {
          expect(solution(num)).toBe(expected);
        },
      );
    });
  });
});
