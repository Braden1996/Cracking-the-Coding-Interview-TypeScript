export function isPalindromeAfterPermutation(str: string) {
  const charCount = new Map();
  for (const char of str.toLowerCase()) {
    if (char === ' ') continue;
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }
  return Array.from(charCount.values()).filter(v => v % 2 !== 0).length <= 1;
}
