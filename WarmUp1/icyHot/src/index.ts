

export function icyHot(temp1: number, temp2: number): boolean {
    return ((temp1 > 100) || temp2 > 100) && ((temp1 < 0) || (temp2 < 0)) 
}