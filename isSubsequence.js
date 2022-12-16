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

console.log(isSubsequence(s, t))