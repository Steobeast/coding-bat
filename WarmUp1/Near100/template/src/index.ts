

export function nearHundred(n: number): boolean{
    let num = Math.abs(n)
    if ((num >= 90 && num <=110) || (num >= 190 && num <= 210)) {
        return true
    }
    return false 

}