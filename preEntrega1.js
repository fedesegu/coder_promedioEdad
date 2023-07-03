// Calcular edad promedio de personas registradas


let edad = Number (prompt("Por favor ingrese la edad"));
let edades = [];
let sumaEdades = 0;

let personas = 0;
let resultado = 0;
let nuevoIngreso = false;

function contador (edad) {
    while (edad) {
    personas = personas +1;
    edades.push(edad);
    nuevoIngreso = confirm("Desea agregar otra edad?");
    if (nuevoIngreso === true) {
    edad = Number (prompt("Por favor ingrese la edad"));
    } else {
        break;
    }
    console.log(personas);
    console.log(edades);
}
}
contador(edad);

for (const valor of edades) {
    sumaEdades += valor;
}
console.log(sumaEdades);


function calcularPromedioEdad (edad, personas) {
    // contador (edad, personas);
    resultado = (sumaEdades / personas).toFixed(1);
    console.log(resultado);  }

calcularPromedioEdad(edad, personas);


// function contador(edad, personas){
//     // if( edad === undefined ) return alert("No ingresaste una edad");
//     // if (edad !== "number") return alert("No ingresaste un número");
//      do {
//         personas = personas++;
//         calcularEdad (edad, personas);
//         nuevoIngreso = confirm("Desea agregar otra edad?")
//         if (nuevoIngreso) {
//             edad = Number (prompt("Por favor ingrese la edad"));
//         }
//     } while (nuevoIngreso)
// }


// function calcularEdad (edad, personas) {
//      contador (edad, personas);
//      resultado = (edad / personas).toFixed(1);
//      console.log(resultado);  }


//  contador(edad, personas);

