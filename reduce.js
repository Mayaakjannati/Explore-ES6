// const number = [2, 4, 3, 100];
// const total = number.reduce((p, c) => p + c, 0);
// console.log(total);

// const numbers = [20, 10, 33, 28, 19];
// const sub = numbers.reduce((maria, beli) => maria - beli, 0);
// console.log(sub);

const products = [
    { id: 1, name: 'lenovo', price: 65000 },
    { id: 2, name: 'dell', price: 45000 },
    { id: 3, name: 'hp', price: 65000 },
    { id: 4, name: 'mac', price: 125000 }

]

// map
const price = products.map(products => products.price);
console.log(price);

const total = products.reduce((prev, curr) => prev + curr.price, 0);
console.log(total);


// find
// const expence = products.find(p => p.price > 50000);
// console.log(expence);

// filter
// const expensive = products.filter(p => p.price > 50000);
// console.log(expensive);


// foreach
// products.forEach(p => console.log(p.id));

