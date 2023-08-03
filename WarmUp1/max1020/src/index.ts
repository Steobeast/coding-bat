

export function max1020(num1: number, num2: number): number {
    if ((10 <= num1 && num1 <= 20) && (10 <= num2 && num2 <= 20)) {
        if (num1 >= num2){
            return num1
        }
        return num2
    }
    if ((10 > num1 || 20 < num1) && (10 <= num2 && num2 <= 20)) {
        return num2
    }
    if ((10 > num2 || 20 < num2) && (10 <= num1 && num1 <= 20)) {
        return num1
}
return 0
}