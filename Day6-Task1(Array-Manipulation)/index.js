let numbers = [1, 2, 3, 4, 5];
numbers.push(6);
numbers.shift();
numbers.reverse();
let string = numbers.join(',');
let squaredNumbers = numbers.map(num => num ** 2)

console.log("Numbers:", numbers);
console.log("Array elements into a string with a comma separator are:", string);
console.log("SquaredNumbers of array elements are:", squaredNumbers);
