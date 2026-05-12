const frutas = ["manzana", "pera", "uva"];

console.log("===== ARRAY =====");
console.log(frutas);

console.log("\npush()");
frutas.push("mango");

console.log(frutas);

console.log("\npop()");
frutas.pop();

console.log(frutas);

const numeros = [1,2,3,4];

console.log("\nmap()");

const dobles = numeros.map(n => n * 2);

console.log(dobles);

console.log("\nfilter()");

const mayores = numeros.filter(n => n > 2);

console.log(mayores);