import Graph from '@utils/AdjacencyList';

import ListOfDepths from './Base';
import * as solutions from './index';

describe('Chapter 4 - 4.4 Check Balanced', () => {
  Object.entries(solutions).forEach(([fnName, Solution]) => {
    describe(`solution ${fnName}`, () => {
      let graph: Graph<number>;
      let nodes: Array<ListOfDepths<number>>;

      beforeEach(() => {
        graph = new Graph<number>();

        const data = [6, 3, 8, 2, 4, 7, 20, 0];
        nodes = data.map(v => new Solution(graph, v));

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
      });

      it('return true for valid balanced tree', () => {
        for (const node of nodes) expect(node.isBalanced()).toBe(true);
      });

      it('return false for invalid balanced tree', () => {
        //         6
        //      ↙    ↘
        //     3      8
        //    ↙ ↘
        //   2   4
        //  ↙
        // 0
        nodes[2].removeEdge(nodes[5]);
        nodes[2].removeEdge(nodes[6]);

        for (const node of nodes) {
          if (node === nodes[0]) {
            expect(node.isBalanced()).toBe(false);
          } else {
            expect(node.isBalanced()).toBe(true);
          }
        }
      });
    });
  });
});
