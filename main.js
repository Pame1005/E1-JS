const ingredientes = ["Harina", "Queso", "Levadura", "Aceite", "Agua", "jamón", "salsa", "Anchoas", "aceitunas", "cebolla"];
const par = [];
const impar = [];

function pizza(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
        if (array[i].length % 2 === 0) {
            par.push(array[i]);
        }
        else {
            impar.push(array[i]);
        }
    }
}

pizza (ingredientes);

console.log(`Las palabras pares son: ${par}`);
console.log(`Las palabras impares son: ${impar}`);