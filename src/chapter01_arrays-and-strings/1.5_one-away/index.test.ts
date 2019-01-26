import each from 'jest-each';

import * as solutions from './index';

describe('Chapter 1 - 1.5 One Away', () => {
  Object.entries(solutions).forEach(([fnName, solution]) => {
    describe(`Solution ${fnName}`, () => {
      each([
        ['pale', 'ple', true],
        ['pales', 'pale', true],
        ['pale', 'bale', true],
        ['pale', 'bake', false],
      ]).test(
        'with "%s" against "%s" return %s',
        (testStr: string, againstStr: string, expected: boolean) => {
          expect(solution(testStr, againstStr)).toBe(expected);
        },
      );
    });
  });
});
