import each from 'jest-each';

import testData from './dataset';
import * as solutions from './index';
import { Image } from './types';

describe('Chapter 1 - 1.7 Rotate Matrix', () => {
  Object.entries(solutions).forEach(([fnName, solution]) => {
    describe(`Solution ${fnName}`, () => {
      each(
        testData.map(({ in: i, out: o }) => [`${i.length}x${i.length}`, i, o]),
      ).test(
        'with %s rotate by 90deg correctly',
        (_: string, imageMatrix: Image, expected: Image) => {
          expect(solution(imageMatrix)).toEqual(expected);
        },
      );
    });
  });
});
