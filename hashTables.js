//also called hash map

//js and most others have a built in, but to understand it we'll make it here

//hash tables used to store key-val pairs. they're like arrays, but the keys are not ordered, and keys don't need to be numeric (the "key" in an array is the index)
//unlike arr they're fast for finding vals, adding vals and removing vals
//arr is only fast for finding, adding and removing at the end

//hashtables in programming langs: python has dictionary, JS has objects and Maps (thought objects can only have string as key). a hash map allows for any data type as key

//eg: a structure for storing color hex codes

//an array isn't good b/c indexes don't give a good idea of what the color is. i.e. colors[2] = #ff69b4 doesn't tell you much

//using a hash table you can give the keys human-readable nameslike colors[pink] = #ff69b4

//to implement a hash table, we'll use an array

//to look up vals by key, we need to convert keys into valid array indices. but why? why can't we just look it up by key? or is this just what is happening behind the scenes when you look up something by key?

//a hash function converts keys into numeric indexes

//but if this is the case, why can't you look up values from an object by index? because it hashes by default. if you try to pass in the index, it will hash it

//a hash function takes data of arbitrary size, and outputs data of a fixed size. i.e. you can input a large data structure and get back a fixed-length number, or you can input a single digit string and get back the same fixed-length number

//real cryptographically secure hash functions use much larger numbers and take much more computing power. for our purpose, we're going to make a good simple one for demo

//good hash: fast (O1), doesn't cluster outputs at specific indeces, distributes uniformly, deterministic: same input always yields the same output

//basic hash function for strings only: problem, not linear time...ON, also, not random: will end up with clustered data

function hash(string, arrLength){
    //what's a way to change the string into a number? use the char code
    let total = 0
    for(i=0; i<string.length; i++){
        total+=string.charCodeAt(i) - 96
        total = total % arrLength
    }
    return total
}

// console.log(hash("cyan", 10))

function betterHash(string, arrLength){

    let total = 0
    //hashes almost always utilize prime numbers, which helps reduce collisions. don't need to understand why mathematically. but he's also saying it's best to make your arrLength a prime? the greater the better?
    let WEIRD_PRIME = 31;
    //this weird min thing is so that we're not iterating thhrough any super large keys...?
    for(i=0; i<Math.min(string.length, 100); i++){
        let char = string[i];
        let value = char.charCodeAt(0) - 96
        total = (total*WEIRD_PRIME + value) % arrLength
    }
    return total
}

// console.log(betterHash("cba", 11))

//handling collisions
//separate chaining: when you have a collision, you store mulitple values in the same position, in a nested data structure. this allows us to store more data than the length of the table. for consistency, you'll always store a value in a nested structure, even if it's the first value at that index. this simplifies adding more values to the nested structure.
//linear probing: if we have a collision, we look for the next empty slot - but won't collisions lead to clustering? but is cramming a data structure at an index better?

//lineaer probing is limited by the length of the table

class HashTable {
    constructor(size = 53){
        //53 is a default val in case one not passed in?
        this.keyMap = new Array(size);
    }
    _hash(key){
        let total = 0
    
        let primeNumber = 31;

    for(let i=0; i<Math.min(key.length, 100); i++){
        let char = key[i];
        let value = char.charCodeAt(0) - 96
        total = (total*primeNumber + value) % this.keyMap.length
    }
    return total
    }
    set(key, val){
        let index = this._hash(key)
        // check if there's anything at position
        if(!this.keyMap[index]){
            this.keyMap[index] = []
        } 
        this.keyMap[index].push([key, val])
        // return index
    }

    get(key){
        let index = this._hash(key)
        // console.log(this.keyMap[index])
        if(this.keyMap[index]){
                
            for(let el of this.keyMap[index]){
                //since each element is an array, and each element within that array is a subarray containing a key and value, you can check if el[0] is the key
                if(el[0] === key){
                    return el[1]
                }
            }
        }
        return undefined
    }
    //keys method: returns
    keys(){
        let keys = []
        for(let i=0; i < this.keyMap.length; i++){
            // console.log(el)
            if(this.keyMap[i]){
                // console.log(this.keyMap[i])  
                for(let j = 0; j < this.keyMap[i].length; j++){
                    // method for returning all
                    // keys.push(this.keyMap[i][j][1])
                    // optional method for returning only unique keys. we don't have a method to handle setting duplicate keys
                    if(!keys.includes(this.keyMap[i][j][0])){
                        keys.push(this.keyMap[i][j][0])
                        
                    }
                }   

            }
        }
        return keys
    }
    //values method: returns 
    values(){
        let values = []
        for(let i=0; i < this.keyMap.length; i++){
            // console.log(el)
            if(this.keyMap[i]){
                // console.log(this.keyMap[i])  
                for(let j = 0; j < this.keyMap[i].length; j++){
                    // method for returning all
                    // values.push(this.keyMap[i][j][1])
                    // optional method for returning only unique values
                    if(!values.includes(this.keyMap[i][j][1])){
                        values.push(this.keyMap[i][j][1])
                        
                    }
                }   

            }
        }
        return values
    }
}

let ht = new HashTable()
ht.set("milo", "alfred-kelly")
ht.set("kaye", "alfred-kelly")
ht.set("elana", "alfred")
ht.set("abby", "alfred")
ht.set("sue", "alfred")
ht.set("howie", "alfred")
ht.set("eamonn", "kelly")
ht.set("bob", "kelly")
ht.set("andrew", "kelly")
ht.set("rolo", "kelly")

// console.log(ht.get("eamonn"))
// console.log(ht.get("milo"))
// console.log(ht.get("sue"))
// console.log(ht.get("elana"))
// console.log(ht.get("rolo"))
// console.log(ht.get("kaye"))

console.log(ht.keys())


//big O of hash tables (average case)(with simplifications and removal of coefficients)

//insert: O1
//deletion O1
//access O1

//this is talking about real ones, not ours above, where get is worst case ON