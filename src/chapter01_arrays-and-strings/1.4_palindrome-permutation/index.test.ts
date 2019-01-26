import each from 'jest-each';

import * as solutions from './index';

describe('Chapter 1 - 1.4 Palindrome Permutation', () => {
  Object.entries(solutions).forEach(([fnName, solution]) => {
    describe(`Solution ${fnName}`, () => {
      each([['Tact Coa', true], ['Hello world!', false]]).test(
        'with "%s" return %s',
        (testStr: string, expected: boolean) => {
          expect(solution(testStr)).toBe(expected);
        },
      );
    });
  });
});
