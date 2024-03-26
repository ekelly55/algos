/**
 * 
 * Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

 

Example 1:

Input: s = "the sky is blue"
Output: "blue is sky the"
Example 2:

Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.
Example 3:

Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
 */

var reverseWords = function(s) {
    //make an array to store the words. iterate backwards. make a temp string var to store the current word

    let words = []

    let tempString = ""

    //loop through backwards

    for(i = s.length-1; i>=0; i--){
        if(s[i] === " "){
            if(tempString !== ""){

                words.push(tempString)
                console.log(words)
            }
            tempString = ""
        }else{
            tempString = s[i] + tempString
            console.log(tempString)
        }
        if(i === 0){
            words.push(tempString)
        }

    }
    
    
    console.log((words.join(" ")).trim())
    return words.join(" ").trim()

};

let s = "a good  example"

reverseWords(s)