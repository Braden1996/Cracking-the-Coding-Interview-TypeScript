import each from 'jest-each';

import Box from './Box';
import * as solutions from './index';

describe('Chapter 8 - 8.13 Stack of Boxes', () => {
  Object.entries(solutions).forEach(([fnName, solution]) => {
    describe(`solution ${fnName}`, () => {
      const b = (w: number, h: number, d: number) => new Box(w, h, d);
      each([
        [[b(1, 10, 1)], 10],
        [[b(1, 1, 1), b(2, 2, 2)], 3],
        [[b(1, 1, 1), b(2, 2, 2), b(3, 3, 3)], 6],
        [[b(3, 3, 3), b(1, 1, 1), b(2, 2, 2)], 6],
        [[b(3, 1, 1), b(1, 3, 1), b(1, 1, 3)], 3],
        [[b(50, 50, 50), b(20, 20, 20), b(25, 25, 25), b(12, 12, 12)], 107],
      ]).test(
        'with boxes %p find total possible stack height to be %i.',
        (boxes: Box[], expected: number) => {
          expect(solution(boxes)).toEqual(expected);
        },
      );
    });
  });
});
