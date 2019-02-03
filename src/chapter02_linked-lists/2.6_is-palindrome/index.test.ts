import each from 'jest-each';

import LinkedList from '@utils/LinkedList';

import * as solutions from './index';

describe('Chapter 2 - 2.6 Is Palindrome', () => {
  Object.entries(solutions).forEach(([fnName, solution]) => {
    describe(`solution ${fnName}`, () => {
      each([
        [LinkedList.fromChars('kayak'), true],
        [LinkedList.fromChars('ayakk'), false],
        [LinkedList.fromChars('redder'), true],
        [LinkedList.fromChars('dderre'), false],
      ]).test(
        'with "%s" returns %s',
        (list: LinkedList<number>, expected: boolean) => {
          expect(solution(list)).toEqual(expected);
        },
      );
    });
  });
});
