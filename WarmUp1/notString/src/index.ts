/*
Given a string, return a new string where "not " has been added to the front.
However, if the string already begins with "not", return the string unchanged. 
Note: use .equals() to compare 2 strings.


notString("candy") → "not candy"
notString("x") → "not x"
notString("not bad") → "not bad"


public String notString(String str) {
  
}

*/

export function notString(str: string): string {
    if(str.startsWith("not") || str.startsWith("Not")){
        return str
    }
    return "not " + str
}