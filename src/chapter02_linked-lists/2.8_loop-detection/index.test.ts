import each from 'jest-each';

import LinkedList from '@utils/TestFriendlyLinkedList';

import * as solutions from './index';

const scenario1 = LinkedList.fromChars('abc') as LinkedList<string>;
const scenario1Loop = LinkedList.fromChars('defghijk') as LinkedList<string>;
scenario1Loop.find(n => n.next === null)!.next = scenario1Loop;
scenario1.find(n => n.next === null)!.next = scenario1Loop;

describe('Chapter 2 - 2.8 Is Palindrome', () => {
  Object.entries(solutions).forEach(([fnName, solution]) => {
    describe(`solution ${fnName}`, () => {
      each([
        [scenario1, scenario1Loop],
        [LinkedList.fromChars('abcdefghijk'), null],
      ]).test(
        'with test case %#',
        (list: LinkedList<string>, expected: LinkedList<string> | null) => {
          expect(solution(list)).toEqual(expected);
        },
      );
    });
  });
});
