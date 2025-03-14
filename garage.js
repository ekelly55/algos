/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
    //set amount of each spot
    this.spots = [big, medium, small]
    this.rate = 1.5
    console.log("garage created. spaces available =", this.spots)
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
//now we need a car object

Car = function(carType){
    this.carType = carType
    //only timestamp if space available
    this.entryTime = 0
    this.exitTime = 0
}

ParkingSystem.prototype.addCar = function(carType) {
    //first check if space for this type of car
    if(this.spots[carType-1] === 0){
        console.log("no space available")
        return false
    } 
    //if space, create new car object and give it an entry time
    let car = new Car(carType)
    car.entryTime = Date.now()
    //now decrement the spaces
    this.spots[carType-1]--
    console.log("carType",carType, "added at", car.entryTime)
    console.log("spots available =", this.spots)
    return car

};
//remove car should take in car var name
ParkingSystem.prototype.removeCar = function(car){
    if(car){

        let startTime = car.entryTime
        car.exitTime = Date.now()
        let totalTime = car.exitTime - startTime
        //convert to hours
        totalHours = totalTime/600
        let totalCharge = "$" + this.rate*totalHours
        //add space back
        console.log("car of type", car.carType, "removed at", car.exitTime, "parking charge", totalCharge)
        this.spots[car.carType-1]++
        
        console.log("spots available =", this.spots)
        return totalCharge
    } else {
        console.log("no such car in garage")
        return false
    }

}

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
//system initialized w set num of big, med small spaces, then cars added, using int to specify size

//check if space available. if yes, return true, if no return false

let garage = new ParkingSystem(1, 1, 0)

// console.log(obj.smallSpots)

let car_1 = garage.addCar(1)
let car_2 = garage.addCar(1)

garage.removeCar(car_1)

let car_3 = garage.addCar(1)

let car_4 = garage.addCar(2)
garage.removeCar(car_4)

let car_5 = garage.addCar(3)
garage.removeCar(car_5)
garage.removeCar(car_2)
// console.log(car_1)