

export function makePi(number: number): number[] {
    let piArray = []
    let stringNumbers = number.toString()
    stringNumbers.split('')
    for (let index = 0; index < stringNumbers.length; index++) {
        let numberToAdd = stringNumbers[index]
        if (stringNumbers[index] == ".") {
            continue
        }
        piArray.push(stringNumbers[index])
        if (piArray.length == 3) {
            break
        }
    }
    piArray = piArray.map(x => Number(x))
    return piArray
}