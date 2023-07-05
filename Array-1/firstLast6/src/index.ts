

export function firstLast6(numbers: number[]): boolean {
    if ((numbers[0] == 6) || (numbers[numbers.length -1] == 6)) {
        return true
    }
    return false
}