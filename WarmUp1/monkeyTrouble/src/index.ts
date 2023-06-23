

export function monkeyTrouble(aSmile: boolean, bSmile:boolean): boolean{
    if((!aSmile && !bSmile) || (aSmile && bSmile)){
        return true
    }
    return false
}