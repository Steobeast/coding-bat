

export function everyNth(strings: string, numbers: number): string {
    let newstring = ""
    for (let index = 0; index < strings.length; index = index + numbers)
        newstring = newstring + strings[index]
    return newstring 
}