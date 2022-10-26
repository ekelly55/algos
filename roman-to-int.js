//given a roman numeral, return an integer

//will first need an object with correspondiing values

//will need conditional statements based on position of symbols, max number of repetitions of symbols


function romanToInt(s){
    let nums = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }
    let int = nums[s[s.length-1]]
    for(let i = s.length-2; i >=0; i--){
        if(nums[s[i]] > int){
            int = int + nums[s[i]]
        } else if(nums[s[i]]===nums[s[i+1]]){
                int = int + nums[s[i]]
        } else {
            int = int - nums[s[i]]
        }
    }
    return int
}



console.log(romanToInt("CXC"))