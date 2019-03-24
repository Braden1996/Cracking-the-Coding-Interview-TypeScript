export function getCoinCombinationsForCents(
  totalCents: number,
  idx = 0,
  denoms = [25, 10, 5, 1],
  memo: number[][] = Array.from({ length: denoms.length }, () => []),
): number {
  if (totalCents in memo[idx]) return memo[idx][totalCents];

  if (idx >= denoms.length - 1) return 1;
  let ways = 0;
  for (let i = 0; i * denoms[idx] <= totalCents; i++) {
    ways += getCoinCombinationsForCents(
      totalCents - i * denoms[idx],
      idx + 1,
      denoms,
      memo,
    );
  }

  memo[idx][totalCents] = ways;
  return ways;
}
