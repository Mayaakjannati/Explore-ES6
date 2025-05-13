// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     sleep() {
//         console.log(`sleeping now ${this.name}`)
//     }

// }

// const kodom = new Person('kodom ali', 21);
// console.log(kodom);
// kodom.sleep()
// const badam = new Person('badam ali', 29);
// console.log(badam);

const Person = {
    name: 'Kodom Ali',
    job: 'sleeping'
}

console.log(Person.job);
console.log(Person['job']);

