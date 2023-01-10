// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// Examples:

// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true
// Note: You may assume the string contains only lowercase alphabets.

// Time Complexity - O(n)

function validAnagram(str1, str2){
    //first create counter objects
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()
    let str1Counter = {}   
    let str2Counter = {}
    //set up first conditional: if they're diff lengths, then false
    if(str1.length !== str2.length){
        return false
    }
    if(str1 === str2){
        return true
    }
    //if makes past conditioinal, then map str1 to counter object
    for(char of str1){
        str1Counter[char] = (str1Counter[char] || 0) +1 
        console.log(str1Counter)
    }
    //do same for str2
    for(char of str2){
        str2Counter[char] = (str2Counter[char] || 0) +1 
        console.log(str2Counter)
    }
    //check if the frequencies match. iterate through counter 1
    for(char in str1Counter){
        if(!(char) in str2Counter){
            return false
        }
    //it's in it, but check if the number of appearances is the same
        if(str1Counter[char] !== str2Counter[char]){
            return false
        }
    }
    //if it makes it thru all conditionals, return true
    return true
}

let str1 = "   a"
let str2 = " A  "

console.log(validAnagram(str1, str2))