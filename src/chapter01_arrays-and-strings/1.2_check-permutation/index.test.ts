import each from 'jest-each';

import * as solutions from './index';

describe('Chapter 1 - 1.2 Check Permutations', () => {
  Object.entries(solutions).forEach(([fnName, solution]) => {
    describe(`Solution ${fnName}`, () => {
      each([
        ['god', 'dog', true],
        ['God', 'Dog', false],
        ['funeral', 'real fun', false],
        ['hello', 'world', false],
      ]).test(
        'with "%s" against "%s" returns %s',
        (testStr: string, againstStr: string, expected: boolean) => {
          expect(solution(testStr, againstStr)).toBe(expected);
        },
      );
    });
  });
});
