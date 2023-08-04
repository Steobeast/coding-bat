

export function front22(str: string): string {
    if (str.length <= 2) {
        return str + str + str
    }
    let frontTwoLetters = str.substring(0, 2)
    return frontTwoLetters + str + frontTwoLetters
}