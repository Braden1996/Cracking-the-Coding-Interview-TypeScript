import each from 'jest-each';

import LinkedList from '@utils/TestFriendlyLinkedList';

import * as solutions from './index';

const scenario1 = LinkedList.fromChars('cde');
const scenario1A = LinkedList.fromChars('ab') as LinkedList<string>;
const scenario1B = LinkedList.fromChars('fgh') as LinkedList<string>;
scenario1A.find(n => n.next === null)!.next = scenario1;
scenario1B.find(n => n.next === null)!.next = scenario1;

describe('Chapter 2 - 2.7 Intersection', () => {
  Object.entries(solutions).forEach(([fnName, solution]) => {
    describe(`solution ${fnName}`, () => {
      each([
        [scenario1A, scenario1B, scenario1],
        [LinkedList.fromChars('ab'), LinkedList.fromChars('cd'), null],
      ]).test(
        'with "%s" and "%s" return %s',
        (a: LinkedList<string>, b: LinkedList<string>, expected: boolean) => {
          expect(solution(a, b)).toEqual(expected);
        },
      );
    });
  });
});
