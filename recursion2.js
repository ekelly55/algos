//reverse: accept a string, returns the reversed string


//refresh on string methods

//will need to use slice to take characters from the end, then concat? can just use +

function reverse(str){
    if(str === ""){
        return undefined
    }
    if(str.length === 1){
        return str[0]
    }
    return str[str.length - 1] + reverse(str.slice(0, (str.length - 1) ))
}

// console.log(reverse(""))


//palindromes: can the string be empty? probably have to account for that. conditionals don't do well with str.length === 0, and it's not !str

function isPalindrome(str){
    //it should basically be the last function, and it just checks if they're the same. do we want to bother stopping it early if it's not a match? what is the runtime like cpompared w/ a loop?
    function reverse(input){

        if(input === ""){
            return undefined
        }
        if(input.length === 1){
            return input[0]
        }
        return (input[input.length - 1] + reverse(input.slice(0, (input.length - 1) )))
    }
    return (reverse(str) === str)
        
}


console.log(isPalindrome(""))


