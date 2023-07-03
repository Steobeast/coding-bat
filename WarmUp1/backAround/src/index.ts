

export function backAround(str: string): string{
    let lastLetter = str.substring(str.length - 1)
    let modifiedWord = lastLetter + str + lastLetter
    return modifiedWord
}