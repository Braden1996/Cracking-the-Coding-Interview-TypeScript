export function replaceSpaces(unsafeString: string, unsafeLength: number) {
  let safeString = '';
  for (let i = 0; i < unsafeLength; i++) {
    safeString += unsafeString[i] === ' ' ? '%20' : unsafeString[i];
  }
  return safeString;
}

export const replaceSpaces2 = (unsafeString: string, unsafeLength: number) =>
  unsafeString
    .slice(0, unsafeLength)
    .split(' ')
    .map(substr => (substr === '' ? '%20' : substr)) // handle consecutive spaces
    .join('%20');
