export function armstrongNumber(number: number): boolean {
  let numberString = number.toString();
  let total = 0;
  for (let index = 0; index < numberString.length; index++) {
    let digit = Math.pow(Number(numberString[index]), numberString.length);
    total = total + digit;
    console.log(total);
  }
  if (total == number) {
    return true;
  }
  return false;
}
