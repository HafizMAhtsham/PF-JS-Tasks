let set1 = new Set([1, 2, 3]);
let set2 = new Set([4, 5, 6]);
let union = new Set([...set1, ...set2]);
let subset = [...set1].every(element => set2.has(element));
let remove_element = set2.delete(5);
let array_of_set1 = [...set1];


console.log("union of set1 and set2 is:", union);
console.log("Check if set1 is a subset of set2 is:", subset);
console.log("Set2 after removing element 5 is:", set2);
console.log("Array of Set1 is:", array_of_set1);

