export function countSteps(stepsLeft: number, memo: number[] = [0, 1]): number {
  if (stepsLeft in memo) return memo[stepsLeft];
  switch (stepsLeft) {
    case 2:
      return 1 + countSteps(stepsLeft - 1);
    case 3:
      return 1 + countSteps(stepsLeft - 1) + countSteps(stepsLeft - 2);
    default:
      return (
        countSteps(stepsLeft - 1) +
        countSteps(stepsLeft - 2) +
        countSteps(stepsLeft - 3)
      );
  }
}
