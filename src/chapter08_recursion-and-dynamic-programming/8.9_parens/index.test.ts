import each from 'jest-each';

import * as solutions from './index';

describe('Chapter 8 - 8.9 Parens', () => {
  Object.entries(solutions).forEach(([fnName, solution]) => {
    describe(`solution ${fnName}`, () => {
      each([
        [1, ['()']],
        [2, ['(())', '()()']],
        [3, ['((()))', '(()())', '(())()', '()(())', '()()()']],
      ]).test(
        'correctly find all valid %i pair(s) of paren combinations.',
        (parenCount: number, expected: string[]) => {
          expect(solution(parenCount).sort()).toEqual(expected.sort());
        },
      );
    });
  });
});
