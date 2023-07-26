export function delDel(str: string): string {
  if (str.substring(1, 4) == "del") {
    let front = str.substring(0, 1);
    let backStr = str.substring(4);
    return front + backStr;
  }
  return str;
}
