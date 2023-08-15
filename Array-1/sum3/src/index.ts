export function sum3(array: number[]): number {
  let total = 0;
  for (let index = 0; index < array.length; index++) {
    let number = array[index];
    total = total + number;
  }
  return total;
}
