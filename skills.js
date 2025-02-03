'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'findMaxTeamSize' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY skills as parameter.
 */

function findMaxTeamSize(skills) {
    print("ok")
    // Write your code here
    //array of students' skill levels, length n
    //want to know max number of students to include, consec skill levels diff must be <=1
    //first, need to sort
    //use mergesort
    //merge helper
    const merge =(arr1, arr2)=>{
        //pointers
        let i = 0
        let j = 0
        let output = []
        
        while(i<arr1.length && j<arr2.length){
            console.log("comparing arr1[i]=",arr1[i],"and arr2[j]=", arr2[j])
            if(arr1[i]>arr2[j]){
                output.push(arr2[j])
                j++
            } else {
                output.push(arr1[i])
                i++
            }
        }
        while(i<arr1.length){
            //if arr1 longer than arr2
                output.push(arr1[i])
                i++
        }
        while(j<arr2.length){
            //if arr2 longer
            output.push(arr2[j])
            j++ 
        }
            console.log("output now =",output)
            return output
    }
    //sort function
    const mergeSort = (arr) => {
        if(arr.length <= 1){
            return arr
        }
        let mid = Math.floor(arr.length/2)
        let left = mergeSort(arr.slice(0,mid))
        let right = mergeSort(arr.slice(mid)) 
        
        return merge(left, right)
    }
    //sort the skills arr
    let skillLevels = skills.slice(1)
    let sortedSkills = mergeSort(skillLevels)
    
    let maxTeamSize = 1
    let currentCount = 1
    
    for(let k = 0; k<skillsCount.length-1; k++){
        console.log("sortedSkills[k] =", sortedSkills[k], "sortedSkills[k+1]=", sortedSkills[k+1])
        if(sortedSkills[k+1]-sortedSkills[k]<= 1){
            console.log("consecutive skill levels within range. iterating count")
            currentCount++
            maxTeamSize = Math.max(currentCount, maxTeamSize)
            console.log("currentCount is", currentCount, "maxTeamSize is", maxTeamSize)
        } else {
            currentCount = 1
            console.log("difference too large. resetting currentCount to 1. maxTeamSize is", maxTeamSize)
        }
    }
    return maxTeamSize

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const sortedSkillsCount = parseInt(readLine().trim(), 10);

    let skills = [];

    for (let i = 0; i < skillsCount; i++) {
        const skillsItem = parseInt(readLine().trim(), 10);
        skills.push(skillsItem);
    }

    const result = findMaxTeamSize(skills);

    ws.write(result + '\n');

    ws.end();
}

/**
 In a school, there are n students who want to participate in an academic decathlon. The teacher wants to select the maximum number of students possible. Each student has a certain skill level. For the team to be uniform, it is important that when the skill levels of its members are arranged in increasing order, the difference between any two consecutive skill levels is
either 0 or 1. Find the maximum team size the teacher can form.
Example
skills = [10, 12, 13, 9, 14]
Valid teams, sorted are {9, 10}, and {12, 13, 14}. These teams have team sizes 2 and 3 respectively, so the maximum team size is 3.

Function Description
Complete the function
findMaxTeamSize in the editor below.
findMaxTeamSize has the following parameter:
int skills[n]: the skill levels of each student
Returns

int: the maximum possible size of the team
Constraints
• 1 <= n <= 10^5
• 1 <= skill[i] <= 10^9

~ Input Format For Custom Testing
The first line contains an integer, n, the number of elements in skills.
Each line i of the n subsequent lines (where O <= i <= n) contains an integer, skills[i).

Sample Case 0
Sample Input 0
STDIN      Function
_____      _________
4      ->  skills[] size n = 4
4      ->  skills = [4, 13, 2, 3]
13
2
3

Sample Output 0
3

Explanation 0
There are two valid teams possible: {2, 3, 4} and {13}. These have team sizes of 3 and 1, respectively.
 */