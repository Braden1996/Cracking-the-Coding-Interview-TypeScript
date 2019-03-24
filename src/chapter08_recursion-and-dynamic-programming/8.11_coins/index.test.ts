import each from 'jest-each';

import * as solutions from './index';

describe('Chapter 8 - 8.11 Coins', () => {
  Object.entries(solutions).forEach(([fnName, solution]) => {
    describe(`solution ${fnName}`, () => {
      each([[1, 1], [2, 1], [5, 2], [10, 4], [100, 242]]).test(
        'correctly find the number of ways to represent %i cents is %i.',
        (totalCents: number, expected: number) => {
          expect(solution(totalCents)).toBe(expected);
        },
      );
    });
  });
});
