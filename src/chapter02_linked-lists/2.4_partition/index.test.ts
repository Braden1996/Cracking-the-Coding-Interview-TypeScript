import each from 'jest-each';

import LinkedList from '@utils/LinkedList';

import * as solutions from './index';

describe('Chapter 2 - 2.4 Partition', () => {
  Object.entries(solutions).forEach(([fnName, solution]) => {
    describe(`solution ${fnName}`, () => {
      each([
        [
          LinkedList.fromArray([3, 5, 7, 5, 10, 2, 1]),
          5,
          LinkedList.fromArray([1, 2, 3, 5, 7, 5, 10]),
        ],
        [LinkedList.fromArray([4, 4, 4]), 5, LinkedList.fromArray([4, 4, 4])],
        [LinkedList.fromArray([6, 6, 6]), 5, LinkedList.fromArray([6, 6, 6])],
      ]).test(
        'with "%s" delete node "%s" returns "%s"',
        (
          testList: LinkedList<number>,
          pivot: number,
          expected: LinkedList<number>,
        ) => {
          expect(solution(testList, pivot)!.toString()).toEqual(
            expected.toString(),
          );
        },
      );
    });
  });
});
