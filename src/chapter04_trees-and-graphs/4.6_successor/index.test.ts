import Graph from '@utils/AdjacencyList';

import * as solutions from './index';

describe('Chapter 4 - 4.6 Successor', () => {
  Object.entries(solutions).forEach(([fnName, Solution]) => {
    describe(`solution ${fnName}`, () => {
      it('Works for example tree', () => {
        const graph = new Graph<number>();
        const data = [6, 3, 8, 2, 4, 7, 20, 0];
        const nodes = data.map(v => new Solution(graph, v));

        //         6
        //      ↙    ↘
        //     3      8
        //    ↙ ↘    ↙ ↘
        //   2   4  7    20
        //  ↙
        // 0
        nodes[0].addEdge(nodes[1]);
        nodes[0].addEdge(nodes[2]);
        nodes[1].addEdge(nodes[3]);
        nodes[1].addEdge(nodes[4]);
        nodes[2].addEdge(nodes[5]);
        nodes[2].addEdge(nodes[6]);
        nodes[3].addEdge(nodes[7]);

        const getSuccessor = (idx: number) => nodes[idx].findInOrderSuccessor();
        expect(getSuccessor(0)).toBe(nodes[5]);
        expect(getSuccessor(1)).toBe(nodes[4]);
        expect(getSuccessor(2)).toBe(nodes[6]);
        expect(getSuccessor(3)).toBe(nodes[1]);
        expect(getSuccessor(4)).toBe(nodes[0]);
        expect(getSuccessor(5)).toBe(nodes[2]);
        expect(getSuccessor(6)).toBe(null);
        expect(getSuccessor(7)).toBe(nodes[3]);
      });
    });
  });
});
