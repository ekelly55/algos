/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    //this is categorized as a stack problem
    //we add and remove characters from the string to the stack?
    
    let stringStack = []

    //we push values on and pop them off
    for(char of s){
        if(char !== "*"){
            stringStack.push(char)
        } else {
            stringStack.pop()
        }
    }
    return stringStack.join("")
};

let s = "leet**cod*e"

console.log(removeStars(s))