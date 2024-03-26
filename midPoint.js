//needs to take in two or more x, y coordinates and return 1 x, y coordinate

point1 = {
    x: 0,
    y: 0
}

point2 = {
    x: 10,
    y: 10
}

point3 = {
    x: 0,
    y: 10
}

function midPoint (...args) {
   
    let totalX = 0
    for(arg in args) {
    
        console.log(arg)
    }

    // console.log(mid)
    // let newX = (args.x + pointB.x)/arguments.length
    // let newY = (pointA.y + pointB.y)/arguments.length

    // mid = {
    //     x: newX,
    //     y: newY
    // }
    // console.log(mid)
    // return mid
}

midPoint(point1, point2)