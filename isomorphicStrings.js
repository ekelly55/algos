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

class HashTable {
    constructor(){
        this.table = new Array(s.length)
        this.size = 0
    }
    _hash(key){
        let hash = 0;
        for(let i = 0; i < key.lenth; i++){
            hash += key.charCodeAt(i)
        }
        return hash % this.table.length
    }
    set(key, value){
        const index = this._hash(key);
        this.table[index] = [key, value];
        this.size++
    }
    get(key) {
        const index = this._hash(key);
        return this.table[index];
    }
    remove(key) {
        const index = this._hash(key);
      
        if (this.table[index] && this.table[index].length) {
          this.table[index] = undefined;
          this.size--;
          return true;
        } else {
          return false;
        }
      }
}

var isIsomorphic = function(s, t) {
    //trying with loops
    for(i=0; i<s.length; i++){

    }

};