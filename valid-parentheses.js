// 20. Valid Parentheses
// Easy

// 16489

// 840

// Add to List

// Share
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false


//will need to iterate through string. first, do a contains to rule it out if it doesn't have any pairs. also rule out if starts or ends w/ open

//make a set of open and closed. it has to check for those. once it's sure the number of open equals the number of closed, then iterate and...do what? 





var isValid = function(s) {
    // let open = ['(', '[', '{']
    // let closed = [')', '}', '}']
    // let output 
    // if(closed.includes(s[0]) || closed.includes[s[s.length-1]]) {
    //     output = False
    // }
    // for (i=0; i < s.length; i++) {
    //     if(open.includes(s[i]) || closed.includes(s[i])){
    //         if(open.includes(s[i]) && s[i+1] === closed[open.indexOf(s[i])])
    //         output = True
    //         }
    //         if(open.includes(s[i]) && )
    // }

    //solution:
    const stack = [];
  
  for (let i = 0; i < s.length; i += 1) {
    const top = stack[stack.length - 1];
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      stack.push(s[i]);
    } else if (s[i] === ')' && top === '(' && stack.length !== 0) {
      stack.pop();
    } else if (s[i] === ']' && top === '[' && stack.length !== 0) {
      stack.pop();
    } else if (s[i] === '}' && top === '{' && stack.length !== 0) {
      stack.pop();
    } else {
      return false;
    }
  }
  
  return stack.length === 0;
    

  //optimized
//   const stack = [];
//   const openSet = new Set(['(', '{', '[']);
//   const closeOpenMap = new Map([
//     [')', '('],
//     ['}', '{'],
//     [']', '['],
//   ]);
  
//   for (let i = 0; i < s.length; i += 1) {
//     if (openSet.has(s[i])) {
//       stack.push(s[i]);
//     } else {
//       const pop = stack.pop();
//       if (pop !== closeOpenMap.get(s[i])) {
//         return false;
//       }
//     }
//   }
  
//   return stack.length === 0;
};

console.log(isValid("([}])"))


//why stack vs. array? 