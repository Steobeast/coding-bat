// Given an array of ints length 3, return a new array with the elements in reverse order,
// {1, 2, 3} becomes {3, 2, 1}.

// reverse3([1, 2, 3]) → [3, 2, 1]
// reverse3([5, 11, 9]) → [9, 11, 5]
// reverse3([7, 0, 0]) → [0, 0, 7]

export function reverse3(array: number[]): number[] {
  let reverseArray: number[] = [];
  for (let index = 1; index <= array.length; index++) {
    let number = array[array.length - index];
    reverseArray.push(number);
  }
  return reverseArray;
}
