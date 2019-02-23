import each from 'jest-each';

import * as solutions from './index';

describe('Chapter 5 - 5.1 Insertion', () => {
  Object.entries(solutions).forEach(([fnName, solution]) => {
    describe(`solution ${fnName}`, () => {
      each([
        ['10000000000', '10011', 2, 6, '10001001100'],
        ['10000000000', '10011', 0, 4, '10000010011']
      ]).test(
        'with "%s" insert %s from %i to %i and get %s',
        (n: string, m: string, i: number, j: number, expected: string) => {
          expect(solution(n, m, i, j)).toBe(expected);
        },
      );
    });
  });
});
