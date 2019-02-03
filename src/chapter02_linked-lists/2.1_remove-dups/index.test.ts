import each from 'jest-each';

import LinkedList from '@utils/LinkedList';

import * as solutions from './index';

describe('Chapter 2 - 2.1 Remove Dups', () => {
  Object.entries(solutions).forEach(([fnName, solution]) => {
    describe(`solution ${fnName}`, () => {
      each([
        [LinkedList.fromChars('abbacdd'), LinkedList.fromChars('abcd')],
      ]).test(
        'with "%s" returns "%s"',
        (testList: LinkedList<string>, expected: LinkedList<string>) => {
          expect(solution(testList).toString()).toEqual(expected.toString());
        },
      );
    });
  });
});
