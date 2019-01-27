import each from 'jest-each';

import * as solutions from './index';

describe('Chapter 1 - 1.6 String Compression', () => {
  Object.entries(solutions).forEach(([fnName, solution]) => {
    describe(`Solution ${fnName}`, () => {
      each([['aabcccccaaa', 'a2b1c5a3']]).test(
        'with "%s" return "%s"',
        (testStr: string, expected: string) => {
          expect(solution(testStr)).toBe(expected);
        },
      );
    });
  });
});
