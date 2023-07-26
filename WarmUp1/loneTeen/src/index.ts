

export function loneTeen(age1: number, age2: number): boolean {
    let teen1 = (age1 >= 13 && age1 <=19)
    let teen2 = (age2 >= 13 && age2 <=19)
    return (teen1 && !teen2) || (teen2 && !teen1)
}