export function calculateExpression(expression) {
  try {
    return eval(expression);
  } catch {
    return "Error";
  }
}