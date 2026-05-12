console.log("===== MUTABILIDAD =====");

const array1 = [10,20,30];

console.log("Original:");
console.log(array1);

array1.push(40);

console.log("\nDespués de push()");
console.log(array1);

const array2 = [1,2,3];

const nuevoArray = array2.map(n => n * 3);

console.log("\nOriginal:");
console.log(array2);

console.log("Nuevo:");
console.log(nuevoArray);