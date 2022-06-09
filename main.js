const ingredientes = ["Harina", "Queso", "Levadura", "Aceite", "Agua", "jamón", "salsa", "Anchoas", "aceitunas", "cebolla"];
const par = [];
const impar = [];

function pizza(ingredientes) {
    for (let i = 0; i < ingredientes.length; i++) {
        console.log(ingredientes[i]);
        if (ingredientes[i].length % 2 === 0) {
            par.push(ingredientes[i]);
        }
        else {
            impar.push(ingredientes[i]);
        }
    }
}

pizza (ingredientes);
console.log(`Las palabras pares son: ${par}`);
console.log(`Las palabras impares son: ${impar}`);