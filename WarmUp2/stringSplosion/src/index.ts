

export function stringSplosion(str: string): string {
    let reoccuringString = ""
    for (let index = 0; index < str.length; index ++) {
        reoccuringString = reoccuringString + str.substring(0, index + 1)
    }
    return reoccuringString 
}