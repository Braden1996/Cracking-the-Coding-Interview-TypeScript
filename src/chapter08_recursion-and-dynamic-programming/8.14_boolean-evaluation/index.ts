enum Operator {
  '&' = '&',
  '|' = '|',
  '^' = '^',
}

export function countBooleanEvaluation(
  expression: string,
  evaluateTo: boolean,
) {
  if (expression.length === 0) return 0;
  if (expression.length === 1) {
    return (expression === '1') === evaluateTo ? 1 : 0;
  }

  let ways = 0;
  for (let i = 1; i < expression.length; i += 2) {
    const operator = expression[i] as Operator;
    const left = expression.substring(0, i);
    const right = expression.substring(i + 1);

    const leftTrue = countBooleanEvaluation(left, true);
    const leftFalse = countBooleanEvaluation(left, false);
    const rightTrue = countBooleanEvaluation(right, true);
    const rightFalse = countBooleanEvaluation(right, false);

    const total = (leftTrue + leftFalse) * (rightTrue + rightFalse);

    let totalTrue;
    if (operator === '^') {
      totalTrue = leftTrue * rightFalse + leftFalse * rightTrue;
    } else if (operator === '&') {
      totalTrue = leftTrue * rightTrue;
    } else if (operator === '|') {
      totalTrue =
        leftTrue * rightTrue + leftFalse * rightTrue + leftTrue * rightFalse;
    } else {
      throw new Error('Invalid operator has snuck in!');
    }

    ways += evaluateTo ? totalTrue : total - totalTrue;
  }

  return ways;
}
