import { AnimalKinds } from './base';
import * as solutions from './index';

describe('Chapter 3 - 3.6 Animal Shelter', () => {
  Object.entries(solutions).forEach(([fnName, solution]) => {
    describe(`solution ${fnName}`, () => {
      const d = (id: number) => ({ kind: AnimalKinds.DOG, id });
      const c = (id: number) => ({ kind: AnimalKinds.CAT, id });
      let queue = new solution();
      const data = [d(0), d(1), c(2), c(3), d(4), c(5)];
      beforeEach(() => {
        queue = solution.fromArray(data);
      });

      it('dequeue oldest animal', () => {
        for (const datum of data) {
          expect(queue.dequeueAny()).toBe(datum);
        }
        expect(queue.dequeueAny()).toBe(null);
      });

      it('dequeue oldest of kind', () => {
        expect(queue.dequeueKind(AnimalKinds.DOG)).toBe(data[0]);
        expect(queue.dequeueKind(AnimalKinds.DOG)).toBe(data[1]);

        expect(queue.dequeueKind(AnimalKinds.CAT)).toBe(data[2]);
        expect(queue.dequeueKind(AnimalKinds.CAT)).toBe(data[3]);
      });
    });
  });
});
