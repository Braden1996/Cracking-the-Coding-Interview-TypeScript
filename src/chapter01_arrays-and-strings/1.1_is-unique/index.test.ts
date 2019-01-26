import each from 'jest-each';

import * as solutions from './index';

describe('Chapter 1 - 1.1 Is Unique', () => {
  Object.entries(solutions).forEach(([fnName, solution]) => {
    describe(`solution ${fnName}`, () => {
      each([
        ['Hello', false],
        ['Hey', true],
        ['HelLo', true],
        ['', true],
        ['Howdy, pal!', true],
      ]).test('with "%s" returns %s', (testStr: string, expected: boolean) => {
        expect(solution(testStr)).toBe(expected);
      });
    });
  });
});
