//slice
//params starting index, ending index
//just starting index, return string from index on
//negative index, start from end of string

let string = "eamonn"

// console.log(string.slice(0,1))
// //"e"
// console.log(string.slice(1))
// //"amonn"
// console.log(string.slice(-1))
// //"n"
// console.log(string.slice(-3, -1))
// //"on"

//substring

//similar to slice, but no -index. treated as zero

// console.log(string.substring(-1))
// "eamonn"
// console.log(string.substring(-1, 1))
// "e"

//substr
//similar to slice, but second param is length
// console.log(string.substr(0,2))
// "ea"
// console.log(string.substr(-3,2))
// "on"