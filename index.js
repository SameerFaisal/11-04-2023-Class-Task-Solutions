class Vehicle {
    constructor(make, model, year, color, mileage, rented = false) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.color = color;
      this.mileage = mileage;
      this.rented = rented;
    }
  
    rent() {
      this.rented = true;
    }
  
    return() {
      this.rented = false;
    }
  
    getDescription() {
      return `${this.make} ${this.model} (${this.year}) - ${this.color}, ${this.mileage} miles`;
    }
  }
  
  class Car extends Vehicle {
    constructor(make, model, year, color, mileage, rented, numDoors, numSeats) {
      super(make, model, year, color, mileage, rented);
      this.numDoors = numDoors;
      this.numSeats = numSeats;
    }
  
    getDescription() {
      return `${super.getDescription()}, ${this.numDoors} doors, ${this.numSeats} seats`;
    }
  }
  
  class Bike extends Vehicle {
    constructor(make, model, year, color, mileage, rented, numGears) {
      super(make, model, year, color, mileage, rented);
      this.numGears = numGears;
    }
  
    getDescription() {
      return `${super.getDescription()}, ${this.numGears} gears`;
    }
  }

  
  const car1 = new Car('Toyota', 'Corolla', 2019, 'White', 20000, false, 4, 5);
const bike1 = new Bike('Honda', 'CBR', 2021, 'Black', 1000, false, 6);
const car2 = new Car('Ford', 'Mustang', 2020, 'Red', 15000, false, 2, 4);

console.log(car1.getDescription()); 
console.log(bike1.getDescription());
console.log(car2.getDescription());