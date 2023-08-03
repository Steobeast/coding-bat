export function stringE(str: string): boolean {
  let count = 0;
  for (let index = 0; index < str.length; index++) {
    if (str.charAt(index) == "e") {
      count++;
    }
}
return (count >= 1 && count <= 3)
}