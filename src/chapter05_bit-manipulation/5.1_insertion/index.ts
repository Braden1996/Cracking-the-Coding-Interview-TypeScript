export function bitInsertion(
  base: string,
  inserted: string,
  i: number,
  j: number,
) {
  const baseNum = parseInt(base, 2);
  const insertedNum = parseInt(inserted, 2);

  // Check given assumptions
  if (i > j || inserted.length - 1 > j - i) {
    throw new Error(`Impossible to insert ${inserted}!`);
  }

  const maskMsbToJ = (1 << j) - 1;
  const maskITo0 = (-1 << (i + 1)) - 1;
  const baseWithJToICleared = baseNum & (maskMsbToJ | maskITo0);

  const ans = (baseWithJToICleared | (insertedNum << i))
  return ans.toString(2);
}
