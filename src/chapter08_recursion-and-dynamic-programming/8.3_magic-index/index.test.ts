import each from 'jest-each';

import * as solutions from './index';

describe('Chapter 8 - 8.3 Magic Index', () => {
  Object.entries(solutions).forEach(([fnName, solution]) => {
    describe(`solution ${fnName}`, () => {
      each([
        [[-4, -2, 2, 4, 5, 6, 7], 2],
        [[-40, -20, -1, 1, 2, 3, 5, 7, 9, 12, 13], 7],
      ]).test(
        'with array "%p" find magic index %i.',
        (sortedArray: number[], index: number) => {
          expect(solution(sortedArray)).toEqual(index);
        },
      );
    });
  });
});
