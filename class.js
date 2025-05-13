// class Product {
//     country = 'Bangladesh';
//     speak(talk) {
//         console.log(`talking about ${talk}`);
//     }
// }
// const laptop = new Product();
// laptop.speak(`kemon acho`)
// console.log(laptop);


// class Teacher {
//     lecture(subject) {
//         console.log(`sir is Teaching ${subject}`);
//     }
// }

// const teachers = new Teacher();
// teachers.lecture(`math`);
// teachers.lecture(`science`);
// teachers.lecture(`chemistry`);

// class Introduction {
//     constructor(name, hscYear, institure) {
//         this.name = name;
//         this.hscYear = hscYear;
//         this.institure = institure;
//     }
// }

// const intro = new Introduction('Tanjila', 2021, 'BM college');
// console.log(intro);

class Vehicle {
    constructor(brk, speed) {
        this.brk = brk;
        this.spped = speed;
    }
}

class Bus extends Vehicle {
    constructor(brk, speed, wheel, seat) {
        super(brk, speed);
        this.wheel = wheel;
        this.seat = seat;
    }
}
class Motorcycle extends Vehicle {
    constructor(brk, speed, wheel, seat, fueltank) {
        super(brk, speed);
        this.wheel = wheel;
        this.seat = seat;
        this.fueltank = fueltank;
    }
}
const bus = new Bus(true, true, 4, 40);
const motor = new Motorcycle(true, true, 2, 2, 1);
console.log(bus);
console.log(motor);