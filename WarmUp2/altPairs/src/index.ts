/*
Given a string, return a string made of the chars at indexes 0,1, 4,5, 8,9 ... so "kittens" yields "kien".

altPairs("kitten") → "kien"
altPairs("Chocolate") → "Chole"
altPairs("CodingHorror") → "Congrr"
 */

export function altPairs(string: string): string {
    let newString = ""
    for (let index = 0; index < string.length; index = index +4) {
        if (index+1 >= string.length) {
            newString = newString + string[index]
            break
        }
        newString = newString + string[index] + string[index + 1]
    }
    return newString
}