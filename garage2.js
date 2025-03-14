
class ParkingSystem {
    constructor(capacity){

        //set amount of each spot
        this.spaces = new Array(capacity)
        this.usedSpaces = 0
        this.rate = 1.5
        console.log("garage created. spaces available =", this.spaces.length)
    }

    addCar(){

        //first check if space for this type of car
        if(this.spaces.length - this.usedSpaces === 0){
            console.log("no space available")
            return false
        } 
        //if space, create new car object and give it an entry time
        let car = new Car()
        car.entryTime = Date.now()
        //assign it a space
        this.assignSpace(car)
        //now decrement the spaces
        this.usedSpaces++
        console.log("car added at", car.entryTime, "in space", car.space)
        console.log("spots available =", this.spaces.length - this.usedSpaces)
        return car

    }

    assignSpace(car){
        for(let i=0; i<this.spaces.length; i++){
            // console.log("space", i, "=", this.spaces[i])
            if(this.spaces[i] === undefined){
                this.spaces[i] = car
                car.space = i
                // console.log("car assigned to space", car.space)
                return car.space
            }
        }
    }

    removeCar(car){
        if(car){
            let startTime = car.entryTime
            car.exitTime = Date.now()
            let totalTime = car.exitTime - startTime
            //convert to hours
            let totalHours = totalTime/600
            let totalCharge = "$" + this.rate*totalHours
            //add space back
            console.log("car removed from space", car.space, "at", car.exitTime, "parking charge", totalCharge)
            // console.log("car in this  space is ", this.spaces[car.space])
            this.spaces[car.space] = undefined
            this.usedSpaces--
            
            console.log("spots available =", this.spaces.length - this.usedSpaces)
            return totalCharge
        } else {
            console.log("no such car in garage")
            return false
        }
    }
};


//now we need a car object

class Car{
    constructor(){

        //only assign a space once car created and there's room
        this.space = null
        //only timestamp if space available
        this.entryTime = 0
        this.exitTime = 0
    }
}


let garage = new ParkingSystem(5)

// console.log(obj.smallSpots)

let car_1 = garage.addCar()
let car_2 = garage.addCar()

garage.removeCar(car_1)

let car_3 = garage.addCar()

let car_4 = garage.addCar()
garage.removeCar(car_4)

let car_5 = garage.addCar()
garage.removeCar(car_5)
garage.removeCar(car_2)
let car_6 = garage.addCar()
let car_7 = garage.addCar()
let car_8 = garage.addCar()
let car_9 = garage.addCar()
let car_10 = garage.addCar()
garage.removeCar(car_9)
let car_11 = garage.addCar()
// console.log(car_1)