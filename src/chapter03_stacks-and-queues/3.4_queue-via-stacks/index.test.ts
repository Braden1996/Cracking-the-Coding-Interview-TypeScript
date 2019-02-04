import * as solutions from './index';

describe('Chapter 3 - 3.4 Queue via Stacks', () => {
  Object.entries(solutions).forEach(([fnName, solution]) => {
    describe(`solution ${fnName}`, () => {
      let queue = new solution<number>();
      const data = [1, 2, 3, 4];
      beforeEach(() => {
        queue = solution.fromArray(data);
      });

      it('add new elements', () => {
        queue.add(0);
        expect(queue.toArray()).toEqual([0, 1, 2, 3, 4]);
      });

      it('remove existing elements', () => {
        queue.remove();
        expect(queue.toArray()).toEqual([1, 2, 3]);
      });

      it('peek element at head', () => {
        expect(queue.peek()).toBe(4);
      });

      it('isEmpty returns true when empty and false when not', () => {
        expect(queue.isEmpty()).toBe(false);
        data.forEach(_ => queue.remove());
        expect(queue.isEmpty()).toBe(true);
      });
    });
  });
});
