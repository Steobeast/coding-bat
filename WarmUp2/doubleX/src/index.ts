/*Given a string, return true if the first instance of "x" in the string is 
immediately followed by another "x".

doubleX("axxbb") → true
doubleX("axaxax") → false
doubleX("xxxxx") → true*/

export function doubleX(string: string): boolean {
    for (let index = 0; index < string.length; index++) {
        if (string[index].toLowerCase() == "x" && string[index].toLowerCase() == string[index +1].toLowerCase())
        return true
    }
    return false
}