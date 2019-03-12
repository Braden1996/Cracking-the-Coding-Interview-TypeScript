export function powerSet<T>(set: Set<T>): Set<typeof set> {
  const thePowerSet = new Set();
  switch (set.size) {
    case 1:
      thePowerSet.add(new Set(set));
    case 0:
      thePowerSet.add(new Set());
      break;
    default:
      const subset = new Set(set);
      const toDelete = [...subset][0];
      subset.delete(toDelete);
      for (const aSet of powerSet(subset).values()) {
        thePowerSet.add(aSet);

        const aSetWithDeleted = new Set(aSet);
        aSetWithDeleted.add(toDelete);
        thePowerSet.add(aSetWithDeleted);
      }
  }
  return thePowerSet;
}
