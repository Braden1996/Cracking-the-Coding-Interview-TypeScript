import each from 'jest-each';

import * as solutions from './index';

describe('Chapter 8 - 8.14 Boolean Evaluation', () => {
  Object.entries(solutions).forEach(([fnName, solution]) => {
    describe(`solution ${fnName}`, () => {
      each([
        ['1', true, 1],
        ['1', false, 0],
        ['1&0', false, 1],
        ['1&1', true, 1],
        ['1|0', true, 1],
        ['1|1', false, 0],
        ['1^0', true, 1],
        ['1^1', false, 1],
        ['1^0|0|1', false, 2],
      ]).test(
        'find that the number of parameterisations for expression "%s", that equal %p, is %i.',
        (expression: string, evaluateTo: boolean, expected: number) => {
          expect(solution(expression, evaluateTo)).toEqual(expected);
        },
      );
    });
  });
});
