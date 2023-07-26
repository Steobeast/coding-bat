


export function startOz(str: string): string {
    str.toLowerCase;
    if (str[0] == "o" && str [1] != "z") {
        return str[0]
    }
    if (str[0] != "o" && str[1] == "z") {
        return str[1]
    }
    if (str[0] == "o" && str[1] == "z") {
        return str.substring(0, 2)
    }
    return ""
}