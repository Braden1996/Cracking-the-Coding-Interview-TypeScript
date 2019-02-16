import Graph from '@utils/AdjacencyList';

import IsBinarySearchTree from './Base';
import * as solutions from './index';

describe('Chapter 4 - 4.5 Validate BST', () => {
  Object.entries(solutions).forEach(([fnName, Solution]) => {
    describe(`solution ${fnName}`, () => {
      let graph: Graph<number>;
      let nodes: Array<IsBinarySearchTree<number>>;

      beforeEach(() => {
        graph = new Graph<number>();

        const data = [6, 3, 8, 2, 4, 7, 20, 0];
        nodes = data.map(v => new Solution(graph, v));
      });

      it('return true for valid BST', () => {
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
        expect(nodes[0].isBinarySearchTree()).toBe(true);
      });

      it('return false for invalid BST', () => {
        //         6
        //      ↙    ↘
        //     3      7
        //    ↙ ↘    ↙ ↘
        //   2   4  8    20
        //  ↙
        // 0
        nodes[0].addEdge(nodes[1]);
        nodes[0].addEdge(nodes[5]);
        nodes[1].addEdge(nodes[3]);
        nodes[1].addEdge(nodes[4]);
        nodes[5].addEdge(nodes[2]);
        nodes[5].addEdge(nodes[6]);
        nodes[3].addEdge(nodes[7]);
        expect(nodes[0].isBinarySearchTree()).toBe(false);
      });
    });
  });
});
