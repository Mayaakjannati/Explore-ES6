// const difference = (x, y) => x - y;
// console.log(difference(5, 3));

// function getThird(numbers) {
//     return number[2];
// }

// const getThird = numbers => numbers[2];


// const third = getThird([5, 7, 3, 4, 57]);
// console.log(third);

// const doublelt = num => num + 2;
// console.log(doublelt(2));

// // large math
// const doMath = (x, y, z) => {
//     const sum = x + y + z;
//     const mult = x * y * z;
//     const result = sum + mult;
//     return result;
// }
// console.log(doMath(2, 3, 4));

// arrayMax

// // const max = Math.max(5, 70, 20, 38);
// const numbers = [3, 4, 6, 5, 3,];
// const arrayMax = Math.max(...numbers);
// console.log(arrayMax, ...numbers);

// const friends = [2, 4, 3, 23, 44, 32];
// const bondhu = [...friends];
// bondhu.push(12);
// console.log(bondhu);
// console.log(friends);

// const actor = {
//     name: 'aj',
//     age: 30,
//     phone: '01787878787',
//     money: 566666666666663
// }
// const phone = actor.phone;

// Object destructure
// const { phone, age: boyos, money: bdt } = actor;
// console.log(phone);
// console.log(boyos);
// console.log(bdt);

// array destructure
// const numbers = [45, 99];
// const [first, sec] = numbers;

// const [x, y] = [12, 66];

// function doublelt(a, b) {
//     return [a * 2, b * 2];
// }
// const [prothome, ditiyo] = doublelt(6, 7);
// console.log(prothome, ditiyo);

const glass = {
    name: 'glass',
    color: 'golden',
    price: 500,
    isCleaned: true

}
// const { isCleaned } = glass;
// const { isCleaned, ...shortGlass } = glass
// Object.freeze(glass);
glass.source = 'bd';
console.log(glass);
// const keys = Object.keys(glass);
// const values = Object.values(glass);
// const pair = Object.entries(glass);
// console.log(keys);
// console.log(pair);