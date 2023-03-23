//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends Vehicle {
    constructor(name, maximumPassengers, passengers, numberOfWheels, maximumSpeed, fuel, scheduleService) {
        super(make, model, year, color, mileage)
        this.maximumPassengers = 5;
        this.passengers = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;

        loadPassenger(num){
            if (this.passenger < this.maximumPassengers){
                availableRoom = true;
                return availableRoom;
            }
    
        }

        start() {
            if (this.fuel > 0) {
                return this.started = true;
                console.log("engine started...!!!");
            } else {
                return this.started = false;
                console.log("Add Fuel");          
            }
        }
        scheduleService(mileage){
            if(this.mileage > 30000){
                return true;
                console.log9("Time for maintenance")
            } else{
                return false;
            }
        }
    
      }
       }
   