export function stringMatch(string1: string, string2: string): number {
  let shortWord;
  let count = 0;
  for (let index = 0; index < string1.length - 1; index++) {
    if (
      string1.substring(index, index + 2) == string2.substring(index, index + 2)
    ) {
      count++;
    }
  }
  return count;
}
