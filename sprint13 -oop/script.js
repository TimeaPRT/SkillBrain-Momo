// Class for representing a car
class Car {
    constructor(make, model, color, mileage) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.mileage = mileage;
    }

    // Getters for properties
    get properties() {
        return `Car[make=${this.make}, model=${this.model}, color=${this.color}, mileage=${this.mileage}]`;
    }
}

// Main function for creating and displaying cars
function main() {
    const car1 = new Car("VOLVO", "XC-60", "Black", "234 000");
    const car2 = new Car("Mazda", "CX-5", "Green", "111 000");
    const car3 = new Car("Dacia", "BIGGSTER", "Blue", "20 000");

    console.log(car1.properties);
    console.log(car2.properties);
    console.log(car3.properties);
}

// Class for racing cars
class RacingCar extends Car {
    constructor(make, model, color, mileage) {
        // Call super constructor
        super (brand, model, color, mileage); 
    }

    // Method for participating in the championship
    participateInChampionship(positionInChampionship) {
        if (positionInChampionship > 0) {
            console.log(`I won the place ${PozitionInTheChampionship}`);
        } else {
            console.log("I didn't win any prize");
        }
    }
}

// Function to instantiate racing cars and display the result
function mainRaceCars() {
    const RacingCar1 = new RacingCar("Toyota", "Turbo", "Red", "100 000");
    const RacingCar2 = new RacingCar("Ferrari", "F1", "Yellow", "50 000");

// Participation in the championship
    racing car1.participate in the Championship (2); 
    racing car2.participating in the Championship(-1); 

// Display properties
    console.log(RacingCar1.properties);
    console.log(RacingCar2.properties);
}

// Calling the functions
main();
mainRaceCars();


