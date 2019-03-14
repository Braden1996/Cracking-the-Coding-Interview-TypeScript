import each from 'jest-each';

import * as solutions from './index';

describe('Chapter 8 - 8.5 Recursive Multiply', () => {
  Object.entries(solutions).forEach(([fnName, solution]) => {
    describe(`solution ${fnName}`, () => {
      each([
        [13, 0],
        [13, 1],
        [13, 2],
        [13, 3],
        [13, 5],
        [13, 7],
        [13, 9],
        [13, 10],
      ]).test('correctly multiply %i and %i.', (a: number, b: number) => {
        expect(solution(a, b)).toEqual(a * b);
      });
    });
  });
});
