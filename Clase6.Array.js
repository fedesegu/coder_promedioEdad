let productos = [];

function agregarProducto() {
    let producto = prompt("ingresar el nombre del producto")
    if (producto !== null && producto != ""){
        productos.push(producto)
        console.log("Producto agregado: " + producto)
    } else {
        console.log("Ingrese un producto válido")
    }
}

while(true) {
    agregarProducto()
    let agregarMas = confirm("Desea agregar productos?")
    if(!agregarMas) {
        break;
    }
}

//otro ejercicio

let array = [];
class Clubes {
    constructor (club, titulos, colores){
        this.club = club
        this.titulos = titulos
        this.colores = colores
    }

    soy_bostero() {
        if(this.club == "Boca" && this.titulos == 74 && this.colores == "Azul y oro") {
            let mensaje = "Eres de " + this.club + ", el peor club del pais";
            console.log(mensaje)
            return mensaje
        }else {
            return null;
        }
    }
    soy_millonario() {
        if(this.club == "Boca" && this.titulos == 69 && this.colores == "Rojo y blanco") {
            let mensaje = "Eres de " + this.club + ", el mejor club del pais"
            console.log(mensaje)
            return mensaje
        }else {
            return null;
        }
    }
}
const club = prompt ("Ingrese el nombre del club")
const titulos = Number (prompt("Ingrese la cantidad de tìtulos"))
const colores = prompt ("Ingrese los colores")

const miClub = new Clubes (club, titulos, colores)

const resultadoBostero = miClub.soy_bostero()

const resultadoMillonario = miClub.soy_millonario()

if (resultadoBostero) {
    array.push(resultadoBostero)
}
if (resultadoMillonario) {
    array.push(resultadoMillonario)
}

//ejemplo carrito

let productos2 = [
    {
        id:1,
        nombreProducto: "Coca Cola",
        precio: 500
    },

    {
        id:2,
        nombreProducto: "Seven Up",
        precio: 430
    },

    {
        id:3,
        nombreProducto: "Fanta",
        precio: 400
    },

    {
        id:4,
        nombreProducto: "Coca Zero",
        precio: 550
    }

]

let producto2 = null;
let carrito2 = [];

function buscarProducto () {
    let seleccion = prompt("Ingrese el nombre del producto que desee comprar")
    for (let i = 0; i < productos.length; i++) {
        if (productos2[i].nombreProducto.toLowerCase() === seleccion.toLowerCase){
            productos = productos2[i] 
            break;
        }
    }
}
function agregarCarrito() {
    if (producto) {
        let cantidad = Number (prompt("Que cantidad deseas comprar"))
        carrito2.push({
            producto: producto2.nombreProducto,
            cantidad: cantidad,
            subtotal: productos2.precio * cantidad
        })
    } else {
        alert("El producto no existe, por favor vuelva a intentarlo")
    }
}

function confirmarCarrito () {
    while(true) { // para seguir comprando 
        buscarProducto();
        agregarCarrito(); 

        if(!confirm("Desea agregar el producto al carrito")) { //negar para salir del bucle 
            break;
        }
    }
}

function calcularTotal () {
    let total = 0;
    console.log("Carrito de compras")
    for (let item of carrito){
        total += item.subtotal; 
        console.log(`- ${item.cantidad} ${item.producto} : ${item.subtotal}`)
    }
}

function vaciarCarrito () {
    carrito = [];
    console.log("El carrito ha sido vaciado")
}

confirmarCarrito();

if (carrito.length > 0) {
    if (confirm("Desea vaciar el carrito?")){
        vaciarCarrito()
}
}

calcularTotal();git