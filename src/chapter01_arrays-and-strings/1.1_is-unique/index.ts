export function hasAllUniqueCharacters(str: string) {
  const encounteredChars = new Map<string, boolean>();
  for (const char of str) {
    if (encounteredChars.get(char)) return false;
    encounteredChars.set(char, true);
  }
  return true;
}

export function hasAllUniqueCharacters2(str: string) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str.charAt(i) === str.charAt(j)) return false;
    }
  }
  return true;
}
