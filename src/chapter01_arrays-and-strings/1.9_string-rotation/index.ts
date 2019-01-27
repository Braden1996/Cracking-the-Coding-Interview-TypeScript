const isSubstring = (a: string, b: string) => a.includes(b);

const validLengths = (a: string, b: string) =>
  a.length === b.length && a.length > 0;

export const isStringRotation = (a: string, b: string) =>
  validLengths(a, b) ? isSubstring(a + a, b) : false;

export function isStringRotation2(a: string, b: string) {
  let streak = 0;
  let partial = '';

  for (let i = 0; i < b.length; i++) {
    if (b[i] === a[streak]) {
      streak++;
    } else {
      if (streak === 0) {
        partial += b[i];
      } else {
        partial += b.substring(i - streak, i);
        i--;
        streak = 0;
      }
    }
  }

  return a.slice(streak) === partial;
}
