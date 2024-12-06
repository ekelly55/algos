//given a list of heights of indeterminate length, n

//there's a graph with n vertical lines drawn. for each line, the end points of each line are bottom = (i, 0) (x coordinate is just the array index of that line) and (i, height[i]) (index and value)

//find two lines that form a container with the x axis (any two will do this) SUCH THAT the container holds the most water (a specific pair of lines will maximize the volume)


//two pointers: naturally, start each at the end. have a variable for best left[i] and best right[i]. adjust them as the pointers indicate

var maxArea = function(height) {
    //declare pointers and bests
    //leftmost line in graph
    let left = 0
    //rightmost line in graph
    let right = height.length - 1

    //declare best volume
    let bestVolume = 0

    //while loop
    while(left < right) {
        //calculate volume at each position
        let volume = (right - left) * Math.min(height[left], height[right])

        //if the calculaated vol is greater than best vol
        if(volume > bestVolume){
            bestVolume = volume
        }
        //then what? how to decide whether to increment left or right? start with smaller height of the two?
        if(height[left] >= height[right]){
            right--
        } else {
            left++
        }
        //run again if allowed
    }
    console.log(bestVolume)
    return bestVolume
};

height = [1,1]

maxArea(height)


