

export function frontBack(str: string): string {
    if (str.length <= 1){
        return str
    }
    let frontLetter = str[0]
    let backLetter = str.charAt(str.length - 1)
    let stringMid = str.substring(1, str.length -1)
    return backLetter + stringMid + frontLetter

}