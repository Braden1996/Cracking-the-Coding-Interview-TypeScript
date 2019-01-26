export function isAnagram(a: string, b: string) {
  const aArr = a.split('');
  const bArr = b.split('');
  aArr.sort();
  bArr.sort();
  return aArr.every((v, i) => bArr[i] === v);
}

export function isAnagram2(a: string, b: string) {
  if (a.length !== b.length) return false;

  let oldB = b;
  for (const matchStr of a) {
    b = b.replace(matchStr, '');
    if (b === oldB) return false;
    oldB = b;
  }

  return b.length === 0;
}
