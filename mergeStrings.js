function mergeStrings(word1, word2) {
    
    let output = ""

    while(word1 && word2){
        output = output + word1.slice(0,1) + word2.slice(0,1)
        word1 = word1.slice(1)
        word2 = word2.slice(1)
    }
    output = output + word1 + word2
    console.log(output)
    return output
}

word1 = "abc"
word2 = "pqrs"

mergeStrings(word1, word2)

