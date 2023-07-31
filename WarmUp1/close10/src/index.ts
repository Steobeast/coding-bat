export function close10(num1: number, num2: number): number {
  let value1 = Math.abs(num1 - 10);
  let value2 = Math.abs(num2 - 10);
  if (value1 < value2) {
    return num1;
  }
  if (value2 < value1) {
    return num2;
  }
  return 0;
}
