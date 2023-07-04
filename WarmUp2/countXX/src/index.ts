

export function countXX(str: string): number {
    let count = 0
    for (let index = 0; index < str.length; index++) {
        if (str.substring(index, index+2) == ('xx')) {
            count = count + 1
            
        }

    }
    return count
}