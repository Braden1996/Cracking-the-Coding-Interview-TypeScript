import each from 'jest-each';

import * as solutions from './index';

describe('Chapter 5 - 5.8 Draw Line', () => {
  Object.entries(solutions).forEach(([fnName, solution]) => {
    const blankScreen = new Uint8Array(16).fill(0x0);

    describe(`solution ${fnName}`, () => {
      each([
        [
          4,
          0,
          7,
          1,
          // prettier-ignore
          Uint8Array.from([
            0x0, 0x0, 0x0, 0x0,
            0xFF, 0x0, 0x0, 0x0,
            0x0, 0x0, 0x0, 0x0,
            0x0, 0x0, 0x0, 0x0,
          ]),
        ],
        [
          4,
          0,
          15,
          1,
          // prettier-ignore
          Uint8Array.from([
            0x0, 0x0, 0x0, 0x0,
            0xFF, 0xFF, 0x0, 0x0,
            0x0, 0x0, 0x0, 0x0,
            0x0, 0x0, 0x0, 0x0,
          ]),
        ],
        [
          4,
          2,
          26,
          1,
          // prettier-ignore
          Uint8Array.from([
            0b00000000, 0b00000000, 0b00000000, 0b00000000,
            0b00111111, 0b11111111, 0b11111111, 0b11100000,
            0b00000000, 0b00000000, 0b00000000, 0b00000000,
            0b00000000, 0b00000000, 0b00000000, 0b00000000,
          ]),
        ],
        [
          4,
          10,
          13,
          1,
          // prettier-ignore
          Uint8Array.from([
            0b00000000, 0b00000000, 0b00000000, 0b00000000,
            0b00000000, 0b00111100, 0b00000000, 0b00000000,
            0b00000000, 0b00000000, 0b00000000, 0b00000000,
            0b00000000, 0b00000000, 0b00000000, 0b00000000,
          ]),
        ],
      ]).test(
        'with screen of row-size %i bytes draw a horizontal line between x1=%i and x2=%i, where y=%i',
        (
          bytesPerRow: number,
          x1: number,
          x2: number,
          y: number,
          expectedScreen: Uint8Array,
        ) => {
          expect(
            solution(blankScreen.slice(), bytesPerRow * 8, x1, x2, y),
          ).toEqual(expectedScreen);
        },
      );
    });
  });
});
