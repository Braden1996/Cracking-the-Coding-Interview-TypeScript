import each from 'jest-each';

import LinkedList from '@utils/LinkedList';

import * as solutions from './index';

describe('Chapter 2 - 2.5 Sum Lists', () => {
  Object.entries(solutions).forEach(([fnName, solution]) => {
    describe(`solution ${fnName}`, () => {
      each([
        [
          LinkedList.fromArray([7, 1, 6]),
          LinkedList.fromArray([5, 9, 2]),
          LinkedList.fromArray([2, 1, 9]),
        ],
        [
          LinkedList.fromArray([1, 6]),
          LinkedList.fromArray([5, 9, 2]),
          LinkedList.fromArray([6, 5, 3]),
        ],
      ]).test(
        'with "%s" + "%s" returns "%s"',
        (
          a: LinkedList<number>,
          b: LinkedList<number>,
          expected: LinkedList<number>,
        ) => {
          expect(solution(a, b)!.toString()).toEqual(expected.toString());
        },
      );
    });
  });
});
