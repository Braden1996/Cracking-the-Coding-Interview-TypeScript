export const stringPermutations: (str: string) => Array<typeof str> = str =>
  str.length === 1
    ? [str]
    : stringPermutations(str.substr(1))
        .flatMap(perms => Array.from({ length: str.length }, () => perms))
        .map(
          (s, i) =>
            s.substr(0, i % str.length) + str[0] + s.substr(i % str.length),
        );
