import each from 'jest-each';

import * as solutions from './index';
import testData from './testData';

describe('Chapter 8 - 8.12 Eight Queens', () => {
  Object.entries(solutions).forEach(([fnName, solution]) => {
    describe(`solution ${fnName}`, () => {
      each(testData).test(
        'correctly find all safe queen positions in chessboard of size %i.',
        (gridSize: number, expectedSolutions: Array<Array<Array<0 | 1>>>) => {
          expect(solution(gridSize)).toEqual(expectedSolutions);
        },
      );
    });
  });
});
