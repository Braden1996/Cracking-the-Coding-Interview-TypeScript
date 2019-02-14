import RouteBetween from './Base';
import * as solutions from './index';

describe('Chapter 4 - 4.1 Route Between Nodes', () => {
  Object.entries(solutions).forEach(([fnName, solution]) => {
    describe(`solution ${fnName}`, () => {
      let graph: RouteBetween<number>;
      let nodes: ReturnType<typeof graph['findNodes']>;
      beforeEach(() => {
        graph = new solution();

        // 0      1
        //  ↘  ↗  |
        //    4   |
        //  ↙   ↘ ↓
        // 2      3
        nodes = graph.nodesFromArray([0, 1, 2, 3, 4]);

        nodes[0].addEdge(nodes[4]);
        nodes[4].addEdge(nodes[1]);
        nodes[4].addEdge(nodes[2]);
        nodes[4].addEdge(nodes[3]);
        nodes[1].addEdge(nodes[3]);
      });

      it('Identifies if a route exists between two nodes.', () => {
        expect(graph.isRouteBetween(nodes[0], nodes[4])).toBe(true);
        expect(graph.isRouteBetween(nodes[0], nodes[1])).toBe(true);
        expect(graph.isRouteBetween(nodes[0], nodes[3])).toBe(true);
        expect(graph.isRouteBetween(nodes[0], nodes[2])).toBe(true);

        expect(graph.isRouteBetween(nodes[1], nodes[0])).toBe(false);
        expect(graph.isRouteBetween(nodes[1], nodes[2])).toBe(false);
        expect(graph.isRouteBetween(nodes[1], nodes[3])).toBe(true);
        expect(graph.isRouteBetween(nodes[1], nodes[4])).toBe(false);

        expect(graph.isRouteBetween(nodes[2], nodes[0])).toBe(false);
        expect(graph.isRouteBetween(nodes[2], nodes[1])).toBe(false);
        expect(graph.isRouteBetween(nodes[2], nodes[3])).toBe(false);
        expect(graph.isRouteBetween(nodes[2], nodes[4])).toBe(false);

        expect(graph.isRouteBetween(nodes[3], nodes[0])).toBe(false);
        expect(graph.isRouteBetween(nodes[3], nodes[1])).toBe(false);
        expect(graph.isRouteBetween(nodes[3], nodes[2])).toBe(false);
        expect(graph.isRouteBetween(nodes[3], nodes[4])).toBe(false);

        expect(graph.isRouteBetween(nodes[4], nodes[0])).toBe(false);
        expect(graph.isRouteBetween(nodes[4], nodes[1])).toBe(true);
        expect(graph.isRouteBetween(nodes[4], nodes[2])).toBe(true);
        expect(graph.isRouteBetween(nodes[4], nodes[3])).toBe(true);
      });
    });
  });
});
