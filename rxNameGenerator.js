let syllables = ['pax', 'lo', 'vid','ium','co', 'bo', 'ray', 'sec', 'con', 'cer', 'ta', 'xan', 'ex', 'ez', 'is', 'ic', 'prev', 'chryz', 'zeph', 'bli', 'plax', 'xax', 'zax', 'bax', 'yaz']
// let endingSyllables = ['pax', 'lo', 'vid', 'co', 'ium', 'bo', 'ray', 'vits', 'sec', 'con', 'cer', 'ta', 'xan', 'ex', 'ez', 'is', 'ic', 'prev', 'chryz', 'zeph', 'bli', 'plax', 'xax', 'zax', 'bax', 'yaz']
 
function generate(syllables){

    let min = 3
    let max = 4
    wordLength = Math.round(Math.random()*(max - min) + min)
    console.log(wordLength)
    let rxName = ""
    
    for(i = 0; i < wordLength; i++){
        
        let index = Math.floor(Math.random()*syllables.length)
        console.log(`generated index is ${index}`)
        
        rxName = rxName + syllables[index]
        console.log(rxName)
    }
    // console.log(rxName)
}

generate(syllables)

