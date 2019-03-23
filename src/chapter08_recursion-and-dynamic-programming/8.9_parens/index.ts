export const validParenCombinations = (
  parensToOpen: number,
  parensToClose = 0,
  prefix = '',
): string[] => [
  ...(parensToOpen > 0
    ? validParenCombinations(parensToOpen - 1, parensToClose + 1, prefix + '(')
    : []),
  ...(parensToClose > 0
    ? validParenCombinations(parensToOpen, parensToClose - 1, prefix + ')')
    : []),
  ...(parensToOpen === 0 && parensToClose === 0 ? [prefix] : []),
];
