const product = [
    { id: 1, name: 'lenovo', price: 65000 },
    { id: 2, name: 'dell', price: 45000 },
    { id: 3, name: 'hp', price: 65000 },
    { id: 4, name: 'mac', price: 125000 },
];

const total = product.reduce((prev, curr) => prev + curr.price, 0);
// console.log(total);

// map

const names = product.map(products => products.name);


// forEach

product.forEach(p => console.log(p.id));

// function product(p){
// console.log(p.id)
// }

// filter

const expensive = product.filter(p => p.price > 50000);


// find

const affordable = product.find(p => p.price <= 50000);

// reduce

const numbers = [2, 4, 3, 2, 66];
// const total = numbers.reduce((prev, curr) => prev + curr, 0)
// console.log(total);


class Product {
    country = 'Bangladesh';
    constructor(name, age) {
        this.num = name;
        this.age = age;
    }

    speak(talk) {
        console.log(`saradin pok pok kori r ${talk}`)
    }
}
const lenevo = new Product('maria', 13);
console.log(lenevo);
lenevo.speak('kanna kori');
lenevo.speak('hasahasi kori');

