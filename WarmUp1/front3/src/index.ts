

export function front3(str: string): string{
    if (str.length < 3){
        let repeatLetters = str + str + str
    }
    let firstThreeLetters = str.substring(0, 3)
    let newWord = firstThreeLetters + firstThreeLetters + firstThreeLetters
    return newWord
}