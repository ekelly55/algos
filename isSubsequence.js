// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false
 

// Constraints:

// 0 <= s.length <= 100
// 0 <= t.length <= 104
// s and t consist only of lowercase English letters.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    //need two pointers, but how? maybe do nested loop first then optimize
    //two pointers means essentially you don't iterate both necessasarily. You iterate one or the other conditionally.
    //t is the bigger on. s needs to be subsequence. which should start at beginning and which at end? 
    let i = 0
    let j = 0
    let tracker = ""

    while(i < t.length){
        if(t[i] === s[j] ){
            tracker = tracker + s[j]
            i++
            j++
        } else {
            i++
        }
    }
    return (tracker === s)



    // let tracker = ""
    // for(i=0; i<s.length; i++){
    //     for(j=0; j<t.length; j++){
    //         if(s[i] === t[j]){
    //             console.log(t[j])
    //             tracker = tracker+ t[j]
    //             console.log(tracker)
    //         }
    //     }
    // }
    // if(tracker === s){

    //     return true
    // } else {
    //     return false
    // }
};

let s = "abc"
let t = "ahbgdc"

//console.log(isSubsequence(s, t))


//two string inputs. first must shorter than or equal to 2nd. if equal, true. if longer, false. if neither, proceed

//return true if all characters of str1 appear somewhere in str2 in order

//do a two pointer

function isSubSequence2(str1, str2){
    //first, filter out false inputs
    if(str1.length > str2.length){
        return false
    }

    if(str1 === str2){
        return true
    }
    //fist declare pointers for str2
    let left2 = 0
    console.log(`the left2 pointer is at index ${left2} of str2`)
    let right2 = str2.length-1
    console.log(`the right2 pointer is at index ${right2}of str2`)
    
    //declare pointers for str1
    let left1 = 0
    let right1 = str1.length-1
    console.log(`left1 pointer is at index ${left1}of str1`)
    console.log(`right1 pointer is at index ${right1}of str1`)
    //track number of matches
    let match = 0
    console.log(`number of matches is ${match}`)
    
    //do a while loop, while left<right
    while(left2<right2){
        //if no match on the left, move forward w/ left on str2
        console.log(`comparing`)
        if(str2[left2] !== str1[left1]){
            console.log(`${str2[left2]} and ${str1[left1]} don't match. increment left2 pointer`)
            left2++
            console.log(`the left2 pointer is at ${str2[left2]}`)
        } else {
            //if there is a match, first check if match counter is equal to str1.length. if yes, return true. if not, iterate both
            console.log(`${str2[left2]} and ${str1[left1]}  match. increment number of matches`)
            match++
            console.log(`number of matches is ${match}`)
            if(match === str1.length){
                console.log(`all chars in str1 match. true`)
                return true
            }
            console.log(`${str2[left2]} and ${str1[left1]}  match. increment both left pointers`)
            left2++
            console.log(`the left2 pointer is at ${str2[left2]}`)
            left1++
            console.log(`left1 pointer is at ${str1[left1]}`)
        }
        //do same w/ right
        if(str2[right2] !== str1[right1]){
            console.log(`${str2[right2]} and ${str1[right1]} don't match. decrement right2 pointer`)
            
            right2--
            console.log(`right2 pointer is at ${str2[right2]}`)
        } else {
            console.log(`${str2[right2]} and ${str1[right1]} match. increment number of matches`)
            match++
            console.log(`number of matches is ${match}`)

            if(match === str1.length){
                console.log(`all chars in str1 match. ${true}`)
                
                return true
            }
            console.log(`${str2[right2]} and ${str1[right1]}  match. decrement both right pointers`)

            right2--
            console.log(`right2 pointer is at ${str2[right2]}`)
            right1--
            console.log(`right1 pointer is at ${str1[right1]}`)

        }
    }
    
    //if never return true, return false
    console.log(`no match ${false}`)
    return false
}
isSubSequence2("135", "12345")

//pattern ace, abcde is not working. 
//compare 1 and 1. match = 1
//move both left pointers forward
//compare 3 and 2. no match `