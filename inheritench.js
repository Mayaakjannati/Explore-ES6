class Vehicle {
    constructor(name, price,) {
        this.name = name;
        this.price = price;
    }

    move(carName) {
        console.log(`${carName}gari chole na chole na re`);
    }
}

//  const vehicle = new Vehicle('jodu');
// console.log(vehicle);
// vehicle.move('shuma');

// const vehicle = new Vehicle('audi', 250, 5);
// console.log(vehicle);

class Bus extends Vehicle {
    constructor(name, price, seat, ticketPrice) {
        super(name, price);
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }
}
class Car extends Vehicle {

}
const bus = new Bus('audi', 250, 5);
console.log(bus);


