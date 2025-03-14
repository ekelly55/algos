/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    //lets make a rows map (has similar methods to set, which we'll need)
    let rowsMap = new Map()

    //for each loop, lets recursively build the column at that index
    let colsGrid = []

    let buildCol = (rowIndex, colIndex, colsMap, grid) => {
        
        //what's the end case?
        if(rowIndex === grid.length){
            console.log(colsGrid)
            return colsMap
        }

        console.log("colIndex =", colIndex, "rowIndex=", rowIndex)
        //if it's not long enough yet, need to access the value at grid
        let targetVal = grid[rowIndex][colIndex]
        console.log("targetVal=", targetVal)
        if(!colsGrid[colIndex]){
            colsGrid.push([])
        }
        colsGrid[colIndex].push(targetVal)
        // console.log(colsGrid)
        buildCol(rowIndex+1, colIndex, colsGrid, grid)
    }

    for(let i=0; i<grid.length; i++){
        //first join into a 3 dig num string
        let rowStr = grid[i].join(',')
        //same as usual syntax with an object, but using map methods
        rowsMap.set(rowStr, (rowsMap.get(rowStr) || 0) + 1)
    }
    console.log("rowsMap = ", rowsMap)
    
    //now, lets populate the colsgrid and count matches
    let count = 0

    for(let i=0; i<grid.length; i++){
        console.log("starting col build loop", i)
        
        buildCol(0, i, colsGrid, grid)
        console.log("ending col build", i)
        console.log("colsgrid = ", colsGrid)
        let colStr = colsGrid[i].join(',')
        if(rowsMap.has(colStr)){
            count += rowsMap.get(colStr)
        }
    }
    console.log(count)
    return count

     
};

let grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
//expected output 1

equalPairs(grid)

//how much can we do in a single iteration?

//1. map the grid to a rowsMap
//2. since we know that the grid is nxn, the index of the grid will also always correspond with the index in the row
// so, on each iteration, we check if a row array has been made. if not, we make it and push it into a colsGrid. then push grid i i in.