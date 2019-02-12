export enum AnimalKinds {
  DOG = 0,
  CAT = 1,
}

export interface IAnimal {
  kind: AnimalKinds;
}

export abstract class AnimalShelter {
  static fromArray<T extends AnimalShelter>(
    this: new () => T,
    dataArr: IAnimal[],
  ) {
    const queue = new this();
    dataArr.forEach(d => queue.enqueue(d));
    return queue;
  }

  abstract toArray(): IAnimal[];
  abstract toString(): string;
  abstract enqueue(data: IAnimal): ThisType<AnimalShelter>;
  abstract dequeueAny(): IAnimal | null;
  abstract dequeueKind(kind: AnimalKinds): IAnimal | null;
}
