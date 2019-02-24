import each from 'jest-each';

import * as solutions from './index';

describe('Chapter 5 - 5.4 Next Number', () => {
  Object.entries(solutions).forEach(([fnName, solution]) => {
    describe(`solution ${fnName}`, () => {
      each([[18, 20, 17]]).test(
        'identify larger and smaller numbers (with same bit ratio) of %f as being %f and %f respectively.',
        (num: number, expectedLarger: number, expectedSmaller: number) => {
          expect(solution.larger(num)).toBe(expectedLarger);
          expect(solution.smaller(num)).toBe(expectedSmaller);
        },
      );
    });
  });
});
