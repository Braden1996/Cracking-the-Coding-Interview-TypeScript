import each from 'jest-each';

import * as solutions from './index';

describe('Chapter 1 - 1.3 URLify', () => {
  Object.entries(solutions).forEach(([fnName, solution]) => {
    describe(`Solution ${fnName}`, () => {
      each([['Mr John Smith    ', 13, 'Mr%20John%20Smith']]).test(
        'with "%s" and the provided output length of "%i" returns %s',
        (testStr: string, trueLength: number, expected: string) => {
          expect(solution(testStr, trueLength)).toBe(expected);
        },
      );
    });
  });
});
