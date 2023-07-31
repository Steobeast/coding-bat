/*
Given a string, return a version where all the "x" have been removed. 
Except an "x" at the very start or end should not be removed.

stringX("xxHxix") → "xHix"
stringX("abxxxcd") → "abcd"
stringX("xabxxxcdx") → "xabcdx"
*/

export function stringX(string: string): string {
    let alteredString = ""
    for (let index = 0; index < string.length; index++) {
        if ((index > 0 && index < string.length -1) && (string[index] == ("x") || string[index] == ("X"))) {
            continue
            }
        alteredString = alteredString + string.substring(index, index + 1)
            }
        return alteredString
        }
