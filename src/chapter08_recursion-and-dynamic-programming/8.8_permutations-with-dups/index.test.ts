import each from 'jest-each';

import * as solutions from './index';

describe('Chapter 8 - 8.8 Permutations with Dups', () => {
  Object.entries(solutions).forEach(([fnName, solution]) => {
    describe(`solution ${fnName}`, () => {
      each([
        ['a', ['a']],
        ['aa', ['aa']],
        ['abb', ['abb', 'bab', 'bba']],
        [
          'abbc',
          [
            'abbc',
            'abcb',
            'acbb',
            'babc',
            'bacb',
            'bbac',
            'bbca',
            'bcab',
            'bcba',
            'cabb',
            'cbab',
            'cbba',
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
