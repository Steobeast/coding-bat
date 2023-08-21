// Given an array of ints, return the sum of the first 2 elements in the array.
//If the array length is less than 2, just sum up the elements that exist, returning 0 if the array is length 0.

// sum2([1, 2, 3]) → 3
// sum2([1, 1]) → 2
// sum2([1, 1, 1, 1]) → 2

export function sum2(array: number[]): number {
  if (array.length == 0) {
    return 0;
  }

  let count = 0;
  let total = 0;
  
  for (let index = 0; index < array.length; index++) {
    total = total + array[index];
    count++;
    if (count == 2) {
      break;
    }
  }
  return total;
}
