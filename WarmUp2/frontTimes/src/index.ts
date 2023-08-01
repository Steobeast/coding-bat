

export function frontTimes(str: string, n: number): string {
    if (str.length <= 3) {
        return str.repeat(n)
    }
    return str.substring(0, 3).repeat(n) 
}