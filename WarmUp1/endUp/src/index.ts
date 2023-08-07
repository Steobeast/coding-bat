export function endUp(string: string): string {
  if (string.length <= 3) {
    return string.toUpperCase();
  }
  let endString = string.slice(string.length - 3);
  let frontString = string.slice(0, string.length - 3);
  return frontString + endString.toUpperCase();
}
