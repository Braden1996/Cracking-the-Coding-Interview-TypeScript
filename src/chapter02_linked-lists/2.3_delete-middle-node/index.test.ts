import each from 'jest-each';

import LinkedList from '@utils/TestFriendlyLinkedList';

import * as solutions from './index';

describe('Chapter 2 - 2.3 Delete Middle Node', () => {
  Object.entries(solutions).forEach(([fnName, solution]) => {
    describe(`solution ${fnName}`, () => {
      each([
        [LinkedList.fromChars('abcdef'), 'c', LinkedList.fromChars('abdef')],
        [LinkedList.fromChars('abcdef'), 'f', new Error()],
      ]).test(
        'with "%s" delete node "%s" returns "%s"',
        (
          testList: LinkedList<string>,
          deleteNodeData: string,
          expected: LinkedList<string> | Error,
        ) => {
          const deleteNode = testList.find(n => n.data === deleteNodeData)!;
          if (expected instanceof Error) {
            expect(() => solution(deleteNode)).toThrow();
          } else {
            solution(deleteNode);
            expect(testList.toString()).toEqual(expected.toString());
          }
        },
      );
    });
  });
});
