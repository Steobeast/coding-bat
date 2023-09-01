/*
Given an array of ints, return the number of times that two 6's are next to each other in the array. 
Also count instances where the second "6" is actually a 7.

array667([6, 6, 2]) → 1
array667([6, 6, 2, 6]) → 1
array667([6, 7, 2, 6]) → 1
*/

export function array667(numberArray: number[]): number {
    let count = 0
    for (let index = 0; index < numberArray.length; index++) {
        if (index == numberArray.length-1) {
            break
        }
        if(numberArray[index] == 6 && numberArray[index+1] == 6 || numberArray[index+1] == 7) {
            count = count + 1
        }
        else {
            continue
        }
    }
    return count
}