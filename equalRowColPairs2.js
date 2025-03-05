/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    //lets make a rows map (has similar methods to set, which we'll need)
    let rowsMap = new Map()

    //for each loop, lets recursively build the column at that index
    let colsGrid = []

    //what does the recursive function need to do?
    //it needs to keep track of the colIndex (which will be i), while allowing for a changing rowIndex
    //each time, it needs to access the rowIndex[colIndex] of the grid
    //then push that value onto the colIndex[rowIndex]
    //then go for the next rowIndex 
    //needs to take in the rowIndex, the grid, the colsgrid

    let buildCol = (rowIndex, colIndex, colsGrid, grid) => {
        //what's the end case?
        if(rowIndex === grid.length){
            console.log(colsGrid)
            return colsGrid
        }
        console.log("colIndex =", colIndex, "rowIndex=", rowIndex, "target value =", grid[colIndex][rowIndex])
        //if it's not long enough yet, need to access the value at grid
        colsGrid.push(grid[colIndex][rowIndex])
        // buildCol(rowIndex + 1, colIndex, colsGrid, grid)
    }

    for(let i=0; i<grid.length; i++){
        //first join into a 3 dig num string
        let rowStr = grid[i].join(',')
        //same as usual syntax with an object, but using map methods
        rowsMap.set(rowStr, (rowsMap.get(rowStr) || 0) + 1)

        //now, lets populate the colsgrid
        buildCol(i, 0, colsGrid, grid)
        
    }
    console.log("rowsMap = ", rowsMap)
    console.log("colsgrid = ", colsGrid)
    //and lets make a cols object
    // let cols = {}
    
    
    // //and a counter for pairs
    // let count = 0
    
    // for(i = 0; i<grid.length; i++){
    //     for(j = 0; j < grid[i].length; j++){
    //         if(!cols[j]){
    //             cols[j] = []
    //         } 
    //         cols[j].push(grid[i][j])
    //         // console.log("cols[j] =", cols[j])
    //         let colStr = cols[j].join(',')
    //         if(rowsMap.has(colStr)){
    //             count += rowsMap.get(colStr)
    //         }    
    //     }
    // }
    // // console.log(cols)
    
    // //now lets iterate through the cols and see if they match the rows
    
    // // console.log(count)
    // return count
};

let grid = [[3,2,1],[1,7,6],[2,7,7]]
//expected output 1

equalPairs(grid)

//how much can we do in a single iteration?

//1. map the grid to a rowsMap
//2. since we know that the grid is nxn, the index of the grid will also always correspond with the index in the row
// so, on each iteration, we check if a row array has been made. if not, we make it and push it into a colsGrid. then push grid i i in.