import * as solutions from './index';

describe('Chapter 3 - 3.3 Stack of Plates', () => {
  Object.entries(solutions).forEach(([fnName, solution]) => {
    describe(`solution ${fnName}`, () => {
      let stack = new solution<number>(3);
      const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      beforeEach(() => {
        stack = solution.fromArray(3, data);
      });

      it('push new elements', () => expect(stack.peek()).toBe(9));
      it('pop existing elements', () => {
        const popOrder = data.slice().reverse();
        while (popOrder.length !== 0) {
          expect(stack.peek()).toBe(popOrder[0]);
          stack.pop();
          popOrder.shift();
        }
      });

      it('pop element from sub stack', () => {
        expect(stack.popAt(3)).toBe(9);
        expect(stack.popAt(1)).toBe(5);
        expect(stack.popAt(1)).toBe(6);
        expect(stack.popAt(1)).toBe(7);
        expect(stack.popAt(1)).toBe(8);
        expect(stack.popAt(0)).toBe(2);
      });
    });
  });
});
