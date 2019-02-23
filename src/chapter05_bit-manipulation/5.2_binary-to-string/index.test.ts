import each from 'jest-each';

import * as solutions from './index';

describe('Chapter 5 - 5.2 Binary to String', () => {
  Object.entries(solutions).forEach(([fnName, solution]) => {
    describe(`solution ${fnName}`, () => {
      each([[0.625, '101'], [0.75, '11']]).test(
        'identify "%f" as being binary number "%s"',
        (realNumber: number, expected: string) => {
          expect(solution(realNumber)).toBe(expected);
        },
      );
    });
  });
});
