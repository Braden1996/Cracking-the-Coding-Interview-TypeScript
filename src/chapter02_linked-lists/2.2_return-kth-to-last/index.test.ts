import each from 'jest-each';

import LinkedList from '@utils/LinkedList';

import * as solutions from './index';

describe('Chapter 2 - 2.2 Return Kth to Last', () => {
  Object.entries(solutions).forEach(([fnName, solution]) => {
    describe(`solution ${fnName}`, () => {
      each([
        [LinkedList.fromChars('123456789'), 4, LinkedList.fromChars('6789')],
        [LinkedList.fromChars('1'), 1, LinkedList.fromChars('1')],
        [new LinkedList(''), 1, ''],
        [LinkedList.fromChars('123'), 4, null],
      ]).test(
        'with "%s" looking for %i returns "%s"',
        (
          testList: LinkedList<string>,
          k: number,
          expected: LinkedList<string>,
        ) => {
          const result = solution(testList, k);
          expect(result ? result.toString() : result).toEqual(
            expected ? expected.toString() : expected,
          );
        },
      );
    });
  });
});
