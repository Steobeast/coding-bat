/*
Given an array of ints, return the number of 9's in the array.

arrayCount9([1, 2, 9]) → 1
arrayCount9([1, 9, 9]) → 2
arrayCount9([1, 9, 9, 3, 9]) → 3
*/

export function arrayCount9(array: number[]) {
    let count = 0
    for (let index = 0; index < array.length; index++) {
        if (array[index] == 9) {
            count++
        }
    }
    return count
}