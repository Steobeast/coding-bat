

export function posNeg(a: number, b: number, negative: boolean): boolean {
    if( negative == true){
        if(a < 0 && b < 0) {
            return true
        }
    }
    if (negative == true) {
        if((a > 0) || (b > 0)) {
            return false
        }
    }
    if (negative == false) {
        if ((a < 0) && (b > 0) || (a > 0) && (b < 0)) {
            return true
        }
    if (negative == false) {
        if ((a < 0) && (b < 0))
        return false
    }
    }
    return false
}