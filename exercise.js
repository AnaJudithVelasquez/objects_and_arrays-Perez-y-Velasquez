console.log("===== EJERCICIO =====");

const producto = {
  nombre: "Laptop",
  marca: "HP",
  precio: 2500
};

console.log(producto);

console.log("\nPropiedades:");
console.log(Object.keys(producto));

const precios = [100,200,300];

precios.push(400);

console.log("\nPrecios actualizados:");
console.log(precios);

const descuento = precios.map(p => p - 50);

console.log("\nPrecios con descuento:");
console.log(descuento);