export function in3050(num1: number, num2: number): boolean {
  return (
    (30 <= num1 && num1 <= 40 && 30 <= num2 && num2 <= 40) ||
    (40 <= num1 && num1 <= 50 && 40 <= num2 && num2 <= 50)
  );
}
