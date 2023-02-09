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

console.log(reverse(""))

let str = "rats"

// console.log(str.slice(0, (str.length - 1) ))



