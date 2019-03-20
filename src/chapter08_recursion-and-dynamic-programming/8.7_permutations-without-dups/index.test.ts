import each from 'jest-each';

import * as solutions from './index';

describe('Chapter 8 - 8.7 Permutations without Dups', () => {
  Object.entries(solutions).forEach(([fnName, solution]) => {
    describe(`solution ${fnName}`, () => {
      each([
        ['a', ['a']],
        ['ab', ['ab', 'ba']],
        ['abc', ['abc', 'acb', 'cab', 'bac', 'bca', 'cba']],
        [
          'abcd',
          [
            'abcd',
            'acbd',
            'cabd',
            'bacd',
            'bcad',
            'cbad',
            'abdc',
            'acdb',
            'cadb',
            'badc',
            'bcda',
            'cbda',
            'adbc',
            'adcb',
            'cdab',
            'bdac',
            'bdca',
            'cdba',
            'dabc',
            'dacb',
            'dcab',
            'dbac',
            'dbca',
            'dcba',
          ],
        ],
      ]).test(
        'correctly find all permutations in string "%s".',
        (str: string, expected: string[]) => {
          expect(solution(str).sort()).toEqual(expected.sort());
        },
      );
    });
  });
});
