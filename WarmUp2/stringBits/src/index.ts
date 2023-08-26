export function stringBits(str: string): string {
  let result = "";
  for (let index = 0; index < str.length; index++) {
    if (str[index] == " ") {
      result = result + str[index]
    }
    if (index % 2 == 0) {
      result = result + str[index];
    }
  }
  return result;
}
