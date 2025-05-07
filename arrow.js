function add(a, b) {
    return a + b;
}

// function expression
const add2 = function (a, b) {
    return a + b;
}
// arrow fuunction
const add3 = (a, b) => a + b;
console.log(add(3, 2));

const add4 = (num1, num2, num3, num4) => num1 + num2 + num3 + num4;
console.log(add4(3, 2, 6, 8));