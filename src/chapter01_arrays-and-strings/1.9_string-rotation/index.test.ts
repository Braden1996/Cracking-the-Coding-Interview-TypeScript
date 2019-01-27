import each from 'jest-each';

import * as solutions from './index';

describe('Chapter 1 - 1.9 String Rotation', () => {
  Object.entries(solutions).forEach(([fnName, solution]) => {
    describe(`solution ${fnName}`, () => {
      each([
        ['waterbottle', 'erbottlewat', true],
        ['wwwaterbottle', 'waterbottleww', true],
        ['waterbottleww', 'wwwaterbottle', true],
        ['waterr', 'water', false],
        ['water', 'waterr', false],
      ]).test(
        'with "%s" against "%s" return %s',
        (testStr: string, againstStr: string, expected: boolean) => {
          expect(solution(testStr, againstStr)).toBe(expected);
        },
      );
    });
  });
});
