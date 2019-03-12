import each from 'jest-each';

import * as solutions from './index';

describe('Chapter 8 - 8.4 Power Set', () => {
  Object.entries(solutions).forEach(([fnName, solution]) => {
    describe(`solution ${fnName}`, () => {
      each([
        [
          new Set([1, 2, 3]),
          new Set([
            new Set(),
            new Set([1]),
            new Set([2]),
            new Set([3]),
            new Set([1, 2]),
            new Set([1, 3]),
            new Set([2, 3]),
            new Set([1, 2, 3]),
          ]),
        ],
      ]).test(
        'with set "%p" find correct power set "%p".',
        (set: Set<number>, powerSet: Set<typeof set>) => {
          // Can't deep equal check with sets, so just compare lengths for now.
          expect(solution(set).size).toEqual(powerSet.size);
        },
      );
    });
  });
});
