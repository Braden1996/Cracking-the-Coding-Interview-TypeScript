import Graph from '@utils/AdjacencyList';

import ListOfDepths from './Base';
import * as solutions from './index';

describe('Chapter 4 - 4.3 List of Depths', () => {
  Object.entries(solutions).forEach(([fnName, Solution]) => {
    describe(`solution ${fnName}`, () => {
      let nodes: Array<ListOfDepths<number>>;
      beforeEach(() => {
        //         6
        //      ↙    ↘
        //     3      8
        //    ↙ ↘    ↙ ↘
        //   2   4  7    20
        //  ↙
        // 0
        const graph = new Graph<number>();
        const data = [6, 3, 8, 2, 4, 7, 20, 0];
        nodes = data.map(v => new Solution(graph, v));

        nodes[0].addEdge(nodes[1]);
        nodes[0].addEdge(nodes[2]);
        nodes[1].addEdge(nodes[3]);
        nodes[1].addEdge(nodes[4]);
        nodes[2].addEdge(nodes[5]);
        nodes[2].addEdge(nodes[6]);
        nodes[3].addEdge(nodes[7]);
      });

      it('builds an array of Linked Lists of all nodes at each depth', () => {
        const buildAnswer = (idxs: number[]) => idxs.map(i => nodes[i].data);

        const result = nodes[0].getListOfDepths();
        const getDepthData = (depth: number) =>
          result[depth].toArray().map(n => n.data);

        expect(getDepthData(0)).toEqual(buildAnswer([0]));
        expect(getDepthData(1)).toEqual(buildAnswer([1, 2]));
        expect(getDepthData(2)).toEqual(buildAnswer([3, 4, 5, 6]));
        expect(getDepthData(3)).toEqual(buildAnswer([7]));
      });
    });
  });
});
