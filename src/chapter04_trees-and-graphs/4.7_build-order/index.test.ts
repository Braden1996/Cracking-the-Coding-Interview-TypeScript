import each from 'jest-each';

import { InitialData } from '@utils/Graph';
import * as solutions from './index';

describe('Chapter 4 - 4.7 Build Order', () => {
  Object.entries(solutions).forEach(([fnName, Solution]) => {
    describe(`solution ${fnName}`, () => {
      each([
        [[['d', 'a'], ['b', 'f'], ['d', 'b'], ['a', 'f'], ['c', 'd'], ['e']]],
        [
          [
            ['d', 'g'],
            ['f', 'a'],
            ['f', 'b'],
            ['f', 'c'],
            ['c', 'a'],
            ['b', 'a'],
            ['b', 'e'],
            ['a', 'e'],
          ],
        ],
      ]).test('with "%s"', (initialData: InitialData<string>) => {
        const graph = new Solution(initialData);

        const buildOrder = graph.getBuildOrder();
        for (const aPackage of buildOrder) {
          expect(graph.getOutgoing(aPackage)).toHaveLength(0);
          graph
            .getIncoming(aPackage)
            .forEach(dependent => graph.removeEdge(dependent, aPackage));
        }
      });
    });
  });
});
