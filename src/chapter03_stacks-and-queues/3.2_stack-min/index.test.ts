import * as solutions from './index';

describe('Chapter 3 - 3.2 Stack Min', () => {
  Object.entries(solutions).forEach(([fnName, solution]) => {
    describe(`solution ${fnName}`, () => {
      let stack = new solution<number>();
      beforeEach(() => {
        stack = new solution<number>();
        [7, 4, 6, 3, 5, 4].forEach(d => stack.push(d));
      });

      it('when values are only pushed.', () => expect(stack.min).toBe(3));
      it('when values are pushed then popped.', () => {
        const minOrders = [3, 3, 3, 4, 4, 7, null];
        do {
          expect(stack.min).toBe(minOrders[0]);
          minOrders.shift();
        } while (stack.pop() !== null);
      });
    });
  });
});
