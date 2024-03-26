/**
 * 
 * Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede"
 

Constraints:

1 <= s.length <= 3 * 105
s consist of printable ASCII characters.

first, need an array of vowels for comparison

because we're not returning a new string of just reversed vowels, but returning the word with the vowels in reverse places, i think an object may be best. but how would the reverse method work? consonants map to themselves, vowels map to...?

maybe we create an object to track
key: value = index: letter

and also create an output string. as we encounter vowels, add them to the string (what's the method to add to front?)
then insert at certain places the consonants according to the key? 

may be better to create an output array of s.length elements. array has more methods for inserting when reconstructing from the object. then turn into a string to 
 */

var reverseVowels = function(s) {
    //vowel set
    let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

    //object for mapping string to
    // let stringObject = {}

    //output array of preset length
    let output = new Array(s.length)
    let vowelTracker = []
    let outputString = ""
    //first loop through string, add reversed vowels to map to object...we want to go through s backwards but add letters forwards. don't want nested loop. what about two pointers? 

   
    for(i = 0; i < s.length; i++){
        //first check if it's a vowel, then add the letter to the front of the output string if so
        if(vowels.includes(s[i])){
            //where to put it in the output? do we put in a place holder here?
            output[i] = "vowel"
            vowelTracker.unshift(s[i])
        } else {
            output[i] = s[i]
            // vowelTracker[i] = "consonant"
        }
        //now add the letter to the tracker
        // stringObject[i] = s[i]

    }
    //now iterate through object backwards and change "vowel" to appropriate vowel
    // for(key in stringObject){
        
    // }
    //now we need a two pointer
    // let j = vowelTracker.length - 1
    // let k = 0
    // while(j >= 0 && k < s.length)
    for(j = 0; j<output.length; j++)
    {
        if(output[j] === "vowel"){
            outputString = outputString + vowelTracker.shift()
        } else {
            outputString = outputString + output[j]
        }
        
    }

    console.log(outputString)
    return outputString
    // console.log(stringObject)
};


// reverseVowels("hello")

//WORKS, BUT VERY SLOW!

//can do it w/ two pointer - left point advances, when meets a vowel , holds in that position til right point meets a vowel and they switch 

function reverse2(s){
    //define set of vowels for comparison
    let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    //define pointers
    let left = 0
    let right = s.length - 1
    let holdLeft = false
    let holdRight = false
    

    //use while loop an and two pointer method
    while(left<right){
        if(vowels.includes(s[left])){
            holdLeft = true
        } else {
            //this should make it keep incrementing til it finds a vowel to hold
            left++
        }
        if(vowels.includes(s[right])){
            holdRight = true
        } else {
            //should keep incrementing til it finds a vowel to hold
            right--
        }
        //once it has two vowels, switch them, increment left and right, set holds back to false
        if(holdLeft && holdRight){
            //slice up the string
            let rightPartial = s.slice(right+1)
            let rightVowel = s.slice(right, right + 1)
            let leftPartial = s.slice(0, left)
            let leftVowel = s.slice(left, left + 1)
            s = s.slice(left + 1, right)
            console.log(`rightPartial is ${rightPartial}, rightVoel is ${rightVowel}, leftPartial is ${leftPartial}, leftvowel is ${leftVowel} s is ${s}`)
            //reassemble the new string
            s = leftPartial + rightVowel + s + leftVowel + rightPartial 
            console.log(`s is ${s}`)
            //increment for next iteration
            left ++
            right --
            //set holds back to false
            holdLeft = false
            holdRight = false
        }
    
    }
    console.log(s)
    return s
}
s = "adodi"


reverse2(s)





// console.log(s)