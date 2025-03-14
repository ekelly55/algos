var findWords = function(words) {
    let firstRow = new Set(("qwertyuiop").split(""))
    // console.log(firstRow)
    let secondRow = new Set(("asdfghjkl").split(""))
    let thirdRow = new Set(("zxcvbnm").split(""))

    let output = []

    let selectSet = (word) => {
        if(firstRow.has(word[0].toLowerCase())){
            return firstRow
        } else if(secondRow.has(word[0].toLowerCase())){
            return secondRow
        } else {
            return thirdRow
        }
    }

    let checkWord = (word, set) => {
        for(char of word.toLowerCase()){
            if(!set.has(char)){
                return false
            }
        }
        return true

    }

    for(word of words){
        console.log("word is", word)
        let row = selectSet(word)
        let wordInRow = checkWord(word, row)
        console.log(wordInRow)
        if(wordInRow){

            output.push(word)
            console.log("row has whole word", word, "added to output", output)
        }
        
    }
    console.log(output)
};

let words = ["Hello","Alaska","Dad","Peace"]
//exp alaska and dad

findWords(words)
