let initialSyllables = ['paz', 'hon', 'viz', 'la', 'ren','dam','er', 'on', 'oh', 'na', '-', '-', '-', '-', 'ka', 'kaz', 'dja', 'rin', 'so', 'lo', 'ren', 'dar', 'jarr', 'us', 'shi', 'to', 'plax', '-', 'zax', 'bax', 'yaz', 'ack', 'bar', 'cal', 'ris', 'ian', 'moth', 'ma', 'do','lor','ky', 'lo', 'bo', '-', '-', '-', '-', 'katan', 'd`', 'fenn', 'cham', 'gro', 'gu', 'din', 'as', 'ajj', 'yo', 'da', 'obi', 'wan', 'chel', 'li', 'gal', 'len', 'cas', 'kaz', 'maz', 'k`', 'ba', 'g`', 'z`', 'ic']
let midSyllables = ['paz', 'hon', 'viz', 'la', 'ren','dam','er', 'on', 'oh', 'na', '-', '-', '-', '-', 'ka', 'kaz', 'dja', 'rin', 'so', 'lo', 'ren', 'dar', 'jarr', 'us', 'shi', 'to', 'plax', '-', 'zax', 'bax', 'yaz', 'ack', 'bar', 'cal', 'ris', 'ian', 'moth', 'ma', 'do','lor','ky', 'lo', 'bo', '-', '-', '-', '-', 'katan', 'fenn', 'cham', 'gro', 'gu', 'din', 'as', 'ajj', 'yo', 'da', 'obi', 'wan', 'chel', 'li', 'gal', 'len', 'cas', 'kaz', 'maz', 'ic']
let finalSyllables = ['paz', 'hon', 'viz', 'la', 'ren','dam','er', 'on', 'oh', 'na', 'ka', 'kaz', 'dja', 'rin', 'so', 'lo', 'ren', 'dar', 'jarr', 'us', 'shi', 'to', 'plax', 'zax', 'bax', 'yaz', 'ack', 'bar', 'cal', 'ris', 'ian', 'moth', 'ma', 'do','lor','ky', 'lo', 'bo', 'ka', 'tan', 'fenn', 'cham', 'gro', 'gu', 'din', 'as', 'ajj', 'yo', 'da', 'obi', 'wan', 'chel', 'li', 'gal', 'len', 'cas', 'kaz', 'maz', 'ba', 'ic']

function generate(firstSyllables, lastSyllables){
    //declare name length min and max
    let min = 1
    let max = 3

    //declare arrays for building names
    let firstName = []
    let lastName = []

    //generate a first and last name lengths for the generator
    firstLength = Math.round(Math.random()*(max - min) + min)
    console.log(firstLength)
    
    lastLength = Math.round(Math.random()*(max - min) + min)
    console.log(lastLength)

    
    for(i = 0; i <= lastLength; i++){
        
        //always runs, regardless of length
        let selectedIndex = Math.floor(Math.random()*initialSyllables.length)
        console.log(`generated last syllables index is ${selectedIndex}`)
        //if starting syllable
        lastName.push(initialSyllables[selectedIndex])
        
    }
    for(i = 0; i < firstLength; i++){

        //firstlength already generated. for each iteration, generate an index to choose from the first syll array
        let firstIndex = Math.floor(Math.random()*firstSyllables.length)
        console.log(`generated first syllables index is ${firstIndex}`)
        //if it's the first syllable
        if(i === 0){
            //and if selected index isn't "-". can't have that be first 
            if(firstSyllables[firstIndex] !== "-"){
                //if it's a 1 syll name and the chosen syl isn't a " `"
                if(firstLength === 1){
                    if(!firstSyllables[firstIndex].includes("`")){

                    //proceed building name
                    firstName = firstName + firstSyllables[firstIndex]
                    } 
                    
                } else {
                    //it's not 1 syl, proceed building name

                    firstName = firstName + firstSyllables[firstIndex]
                }
            }
            
            
        } else {
            //if it's not the first syllable
            //and the chosen syll doesn't have a "`"
            if(!firstSyllables[firstIndex].includes('`')){
                //and if there's a third part to follow the -, proceed
                if(firstLength === 3 && i === 1){   
                    //proceed building name
                    firstName = firstName + firstSyllables[firstIndex]
                } else {
                    //if it can't accomodate a -, and the chosen part isn't -
                    if(firstSyllables[firstIndex] !== "-"){

                        //proceed
                    firstName = firstName + firstSyllables[firstIndex]

                    }
                }
            }
            
        }
    console.log(firstName, lastName)
    // console.log(rxName)
}
}

generate(firstSyllables, lastSyllables)

