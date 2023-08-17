// Given an array of ints length 3, return an array with the elements "rotated left" so {1, 2, 3} yields {2, 3, 1}.

// rotateLeft3([1, 2, 3]) → [2, 3, 1]
// rotateLeft3([5, 11, 9]) → [11, 9, 5]
// rotateLeft3([7, 0, 0]) → [0, 0, 7]

export function rotateLeft3(array: number[]): number[] {
    let newArray = array.splice(array[0])
    newArray.push(array[0])
    return newArray
}