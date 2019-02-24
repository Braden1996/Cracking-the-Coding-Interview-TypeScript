import each from 'jest-each';

import * as solutions from './index';

describe('Chapter 5 - 5.7 Pairwise Swap', () => {
  Object.entries(solutions).forEach(([fnName, solution]) => {
    describe(`solution ${fnName}`, () => {
      each([['1010', '0101'], ['01001101', '10001110']]).test(
        'with %s pairswap to equal %s.',
        (bitStr: string, expectedBitStr: string) => {
          expect(solution(parseInt(bitStr, 2))).toBe(
            parseInt(expectedBitStr, 2),
          );
        },
      );
    });
  });
});
