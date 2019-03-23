class CharFrequencies {
  static fromString = (str: string) =>
    new CharFrequencies(CharFrequencies.getFreqsFromString(str));
  private static getFreqsFromString = (str: string) =>
    str.split('').reduce(
      (frqs, c) => ({
        ...frqs,
        [c]: (frqs[c] || 0) + 1,
      }),
      {} as { [c: string]: number },
    );

  constructor(private readonly freqs: { [c: string]: number }) {}

  decrementChar = (c: string) =>
    new CharFrequencies({
      ...this.freqs,
      [c]: this.freqs[c] - 1,
    });

  getAvailableChars = () =>
    Object.keys(this.freqs).filter(c => this.freqs[c] > 0);
}

const recursiveDupeSafeStringPermutations: (
  freqs: CharFrequencies,
  prefix?: string,
) => string[] = (freqs, prefix = '') => {
  const chars = freqs.getAvailableChars();
  if (chars.length === 0) return prefix === '' ? [] : [prefix];
  return chars.reduce(
    (perms, c) => [
      ...perms,
      ...recursiveDupeSafeStringPermutations(
        freqs.decrementChar(c),
        prefix + c,
      ),
    ],
    [] as string[],
  );
};

export const dupeSafeStringPermutations = (str: string) =>
  recursiveDupeSafeStringPermutations(CharFrequencies.fromString(str));
