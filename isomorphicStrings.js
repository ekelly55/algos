// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true
 

// Constraints:

// 1 <= s.length <= 5 * 104
// t.length == s.length
// s and t consist of any valid ascii character.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isIsomorphic = function(s, t) {
    //trying with loops
const mapA = new Map()
const mapB = new Map()

for(i=0; i<s.length; i++){
    if(mapA.has(s[i])){
        console.log(`mapA at ${s[i]} is ${mapA.get(s[i])}`)
        if(mapA.get(s[i]) !== t[i]){
            console.log(`mapA at ${s[i]} is not ${t[i]}, strings are not isomorphic`)
            return false;
        }
    } else {
        mapA.set(s[i], t[i])
        console.log(`setting mapA at ${s[i]} to ${t[i]}`)
    }
    if(mapB.has(t[i])){
        console.log(`mapB at ${t[i]} is ${mapB.get(t[i])}`)
        if(mapB.get(t[i]) !== s[i]){
            console.log(`mapB at ${t[i]} is not ${s[i]}, strings are not isomorphic`)
            return false;
        }
    } else {
        mapB.set(t[i], s[i])
        console.log(`setting mapB at ${t[i]} to ${s[i]}`)
    }
}
console.log("strings are isomorphic")
return true
};

let s = "paper"
let t = "title"
console.log(isIsomorphic(s, t))