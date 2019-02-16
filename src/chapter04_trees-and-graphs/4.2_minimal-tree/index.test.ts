import each from 'jest-each';

import * as solutions from './index';

describe('Chapter 4 - 4.2 Minimal Tree', () => {
  Object.entries(solutions).forEach(([fnName, solution]) => {
    describe(`solution ${fnName}`, () => {
      each([
        [[0, 2, 3, 4, 6, 7, 8, 20]],
        [[0, 1, 5, 13, 20, 25, 26, 100]],
        [[0, 5, 5, 10, 12, 13, 19]],
      ]).test(
        'construct BST from ordered array "%p"',
        (orderedArray: number[]) => {
          const rootNode = solution(orderedArray);
          if (orderedArray.length === 0) {
            expect(rootNode).toBeNull();
          } else {
            expect(rootNode!.isBinarySearchTree()).toBe(true);
          }
        },
      );
    });
  });
});
