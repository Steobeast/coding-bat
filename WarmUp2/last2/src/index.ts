/*
Given a string, return the count of the number of times that a substring 
length 2 appears in the string and also as the last 2 chars of the string, 
so "hixxxhi" yields 1 (we won't count the end substring).

last2("hixxhi") → 1
last2("xaxxaxaxx") → 1
last2("axxxaaxx") → 2*/

export function last2(string: string): number {
    let count = 0
    let lastTwoChar = string.substring(string.length - 2, string.length)
    for (let index = 0; index < string.length; index++) {
        if (index == string.length - 3 || string.length <= 3) {
            break
        } 
        if (string.substring(index, index +2) == lastTwoChar) {
            count++
        }       
    }
    return count
}