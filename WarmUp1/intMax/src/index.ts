export function intMax(num1: number, num2: number, num3: number): number {
  if (num1 >= num2 && num1 >= num3) {
    return num1;
  }
  if (num3 >= num2 && num3 >= num1) {
    return num3;
  }
  if (num2 >= num1 && num2 >= num3) {
    return num2;
  }
  return num1;
}
