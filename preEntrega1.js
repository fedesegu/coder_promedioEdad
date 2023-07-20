// Calcular edad promedio de personas registradas


let edad = Number (prompt("Por favor ingrese la edad"));
let edades = [];
let sumaEdadesMayores = 0;
let sumaEdadesMenores = 0;

let personas = 0;
let resultado = 0;
let nuevoIngreso = false;

function edadesMenores (el) {
    return el < 18;
  }
  
  function edadesMayores (el) {
    return el >= 18;
  }

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

let menores = edades.filter(edadesMenores);
let mayores = edades.filter(edadesMayores);

console.log(menores);


for (const valor of menores) {
    sumaEdadesMenores += valor;
}
console.log(sumaEdadesMenores);

for (const valor of mayores) {
    sumaEdadesMayores += valor;
}
console.log(sumaEdadesMayores);

function calcularPromedioEdadMenores (edad, personas) {
    resultado = (sumaEdadesMenores / menores.length).toFixed(1);
    console.log(resultado); 
}

function calcularPromedioEdadMayores(edad, personas) {
    resultado = (sumaEdadesMayores / mayores.length).toFixed(1);
    console.log(resultado);
}
calcularPromedioEdadMenores(edad, personas);
calcularPromedioEdadMayores(edad, personas);



