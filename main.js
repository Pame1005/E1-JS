let ingredientes = ["Harina", "Queso", "Levadura", "Aceite", "Agua", "jamón", "salsa", "Anchoas", "aceitunas", "cebolla"];
let par = [];
let impar = [];

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

pizza(ingredientes);
console.log(par);
console.log(impar);