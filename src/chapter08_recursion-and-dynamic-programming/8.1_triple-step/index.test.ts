import each from 'jest-each';

import * as solutions from './index';

describe('Chapter 8 - 8.1 Triple Step', () => {
  Object.entries(solutions).forEach(([fnName, solution]) => {
    describe(`solution ${fnName}`, () => {
      each([[0, 0], [1, 1], [2, 2], [3, 4], [4, 7], [10, 274]]).test(
        'with "%i" steps we can run up %i different ways.',
        (steps: number, expected: number) => {
          expect(solution(steps)).toBe(expected);
        },
      );
    });
  });
});
