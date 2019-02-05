import each from 'jest-each';

import * as solutions from './index';

describe('Chapter 3 - 3.5 Sort Stack', () => {
  Object.entries(solutions).forEach(([fnName, solution]) => {
    describe(`solution ${fnName}`, () => {
      each([[[4, 2, 1, 3]], [[4, 23, 7, 39, 19, 0, 9, 14, -20]]]).test(
        'sort "%p"',
        (unsortedData: number[]) =>
          expect(
            solution
              .fromArray(unsortedData)
              .sort()
              .toArray(),
          ).toEqual(unsortedData.sort((a, b) => (a > b ? 1 : -1))),
      );
    });
  });
});
