import * as solutions from './index';

describe('Chapter 3 - 3.1 Three in One', () => {
  Object.entries(solutions).forEach(([fnName, solution]) => {
    describe(`solution ${fnName}`, () => {
      let stack = new solution(3, 3);
      afterEach(() => (stack = new solution(3, 3)));

      it('Push elements to each stack', () => {
        stack.push(0, 'a');
        stack.push(1, 'b');
        stack.push(2, 'c');

        expect(stack.peek(0)).toBe('a');
        expect(stack.peek(1)).toBe('b');
        expect(stack.peek(2)).toBe('c');
      });

      it('Pop elements from each stack', () => {
        stack.push(0, 'a');
        stack.push(1, 'b');
        stack.push(2, 'c');

        expect(stack.pop(1)).toBe('b');

        expect(stack.peek(0)).toBe('a');
        expect(stack.peek(1)).toBeUndefined();
        expect(stack.peek(2)).toBe('c');
      });

      if (stack instanceof solutions.Flexible) {
        it('Completely fill single stack division', () => {
          const maxItems = 'abcdefghi'.split('');
          maxItems.forEach(c => stack.push(1, c));

          expect(stack.peek(0)).toBeUndefined();
          expect(stack.peek(1)).toBe(maxItems[maxItems.length - 1]);
          expect(stack.peek(2)).toBeUndefined();
        });
      }
    });
  });
});
