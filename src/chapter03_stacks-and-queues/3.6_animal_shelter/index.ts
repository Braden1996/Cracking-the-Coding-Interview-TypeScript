import Queue from '@utils/Queue';
import { AnimalKinds, AnimalShelter, IAnimal } from './base';

interface ISortedAnimal {
  count: number;
  animal: IAnimal;
}

export default class QueueForEachKind extends AnimalShelter {
  private readonly animalKindLists: {
    [kind in AnimalKinds]: Queue<ISortedAnimal>
  } = Object.values(AnimalKinds).reduce(
    (acc, kind) => ({ ...acc, [kind]: new Queue() }),
    {},
  );

  private count = 0;

  toArray() {
    return Object.values(this.animalKindLists)
      .map(list => list!.toArray())
      .reduce((a, b) => a.concat(b))
      .sort((a, b) => (a.count > b.count ? 1 : -1))
      .map(sortedAnimal => sortedAnimal.animal);
  }

  toString() {
    return this.toArray().reduce(
      (str, n, i) => `${str}${i > 0 ? ' <- ' : ''}${JSON.stringify(n)}`,
      '',
    );
  }

  enqueue(data: IAnimal) {
    const newEntry: ISortedAnimal = { count: this.count, animal: data };
    this.animalKindLists[data.kind].add(newEntry);
    this.count++;
    return this;
  }

  dequeueAny() {
    let oldestKind: AnimalKinds | null = null;
    for (const [kind, list] of Object.entries(this.animalKindLists)) {
      if (
        !list.isEmpty() &&
        (oldestKind === null ||
          list.peek()!.count < this.animalKindLists[oldestKind].peek()!.count)
      ) {
        oldestKind = (kind as unknown) as AnimalKinds;
      }
    }

    return oldestKind === null ? null : this.dequeueKind(oldestKind);
  }

  dequeueKind = (kind: AnimalKinds) => {
    return this.animalKindLists[kind].isEmpty()
      ? null
      : this.animalKindLists[kind].remove()!.animal;
  };
}
