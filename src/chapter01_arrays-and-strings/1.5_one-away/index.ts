export function isOneEditAway(a: string, b: string) {
  if (a === b) return true;
  if (Math.abs(a.length - b.length) >= 2) return false;

  const longerStr = a.length > b.length ? a : b;
  const shorterStr = a.length > b.length ? b : a;

  for (let i = 0; i < longerStr.length; i++) {
    if (shorterStr[i] !== longerStr[i]) {
      const insertOrReplace = longerStr.length === shorterStr.length ? 1 : 0;
      const postEditShorterStr =
        shorterStr.substring(0, i) +
        longerStr[i] +
        shorterStr.substring(i + insertOrReplace);
      return longerStr === postEditShorterStr;
    }
  }

  // This will never happen.
  // Just needed to prevent TS Error: "Not all code paths return a value"
  return true;
}
