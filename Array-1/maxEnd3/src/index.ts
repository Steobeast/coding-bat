

export function maxEnd3(array: number[]): number[] {
    for (let index = 0; index < array.length; index++) {
        
        if (array[0] >= array[array.length-1]) {
            let number = array[0]
            if(array[index] != number) {
                array[index] = number
            } 
        }
        if (array[0] <= array[array.length-1]) {
            let number = array[array.length-1]
            if(array[index] != number) {
                array[index] = number
            } 
        }
    }
    return array
}