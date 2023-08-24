export function stringTimes(str: string, n: number): string {
  let newString = "";
  for (let index = 1; index <= n; index++) {
    newString += str;
    if (n < 0) {
      throw Error("Unable to times by a negative number")
    }
  }
  return newString;
}
