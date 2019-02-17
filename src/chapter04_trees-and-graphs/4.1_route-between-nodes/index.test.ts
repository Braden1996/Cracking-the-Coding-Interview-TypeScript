import { InitialData } from '@utils/Graph';
import * as solutions from './index';

describe('Chapter 4 - 4.1 Route Between Nodes', () => {
  Object.entries(solutions).forEach(([fnName, Solution]) => {
    describe(`solution ${fnName}`, () => {
      it('Identifies if a route exists between two nodes.', () => {
        // 0      1
        //  ↘  ↗  |
        //    4   |
        //  ↙   ↘ ↓
        // 2      3
        const graph = new Solution([
          [0, 4],
          [4, 1],
          [4, 2],
          [4, 3],
          [1, 3],
        ] as InitialData<number>);

        expect(graph.isRouteBetween(0, 4)).toBe(true);
        expect(graph.isRouteBetween(0, 1)).toBe(true);
        expect(graph.isRouteBetween(0, 3)).toBe(true);
        expect(graph.isRouteBetween(0, 2)).toBe(true);

        expect(graph.isRouteBetween(1, 0)).toBe(false);
        expect(graph.isRouteBetween(1, 2)).toBe(false);
        expect(graph.isRouteBetween(1, 3)).toBe(true);
        expect(graph.isRouteBetween(1, 4)).toBe(false);

        expect(graph.isRouteBetween(2, 0)).toBe(false);
        expect(graph.isRouteBetween(2, 1)).toBe(false);
        expect(graph.isRouteBetween(2, 3)).toBe(false);
        expect(graph.isRouteBetween(2, 4)).toBe(false);

        expect(graph.isRouteBetween(3, 0)).toBe(false);
        expect(graph.isRouteBetween(3, 1)).toBe(false);
        expect(graph.isRouteBetween(3, 2)).toBe(false);
        expect(graph.isRouteBetween(3, 4)).toBe(false);

        expect(graph.isRouteBetween(4, 0)).toBe(false);
        expect(graph.isRouteBetween(4, 1)).toBe(true);
        expect(graph.isRouteBetween(4, 2)).toBe(true);
        expect(graph.isRouteBetween(4, 3)).toBe(true);
      });
    });
  });
});
