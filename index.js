alert("¡BLACK FRIDAYS! Con la compra de 3 o más productos, recibirás un 40% de descuento en el total de tu compra!!");

function solicitarNombre(){
    let nombre = prompt("Ingresa tu nombre para registrarte: ");
    alert("Bienvenido "+ nombre)
}
solicitarNombre();

class Producto {
    constructor (nombre, precio){
        this.nombre = nombre;
        this.precio = precio;    
    }
}

const JEAN = new Producto ("Jean", 15000);
const REMERA = new Producto ("Remera", 9000);
const BERMUDA = new Producto ("Bermuda", 12500);
const OJOTAS = new Producto ("Ojotas", 10000);
const CAMISA = new Producto ("Camisa", 17500);
const CAMPERA = new Producto("Campera", 23000);
const ZAPATILLA = new Producto ("Zapatilla", 21500);

const ARRAY_PRODUCTOS = [JEAN, REMERA, BERMUDA, OJOTAS, CAMISA, CAMPERA, ZAPATILLA]

let listaProductos = " ";
for(let producto of ARRAY_PRODUCTOS) {
    listaProductos += producto.nombre + ": $" + producto.precio + " ";
}

console.log('Estos son nuestros productos: ' + listaProductos);

let carrito = [];
let seguirComprando = true;
while(seguirComprando) {
    let productoElegido = prompt("Ingresa el nombre de producto para agregar al carrito: ");
    let productoEncontrado = ARRAY_PRODUCTOS.find(producto => producto.nombre.toLowerCase() === productoElegido.toLowerCase());
    if(productoEncontrado) {
        carrito.push(productoEncontrado);
        seguirComprando = confirm("¿Deseas seguir agregando productos al carrito?");
    } else {
        alert("Producto no encontrado. Por favor, intenta de nuevo.");
    }
    if(carrito.length == 2 && seguirComprando == false) {
        seguirComprando = confirm("Estás a un producto de acceder al descuento. ¿Deseas seguir agregando productos al carrito?");
    }
}

let totalProductos = carrito.length;
let totalValor = carrito.reduce((total, producto) => total + producto.precio, 0);
if(totalProductos >= 3) {
    let totalSinDescuento = totalValor;
    totalValor *= 0.6; // Aplicar descuento del 40%
    alert(`Has elegido ${totalProductos} productos. Tu total sin descuento sería: $${totalSinDescuento}. Pero con el descuento, tu total es: $${totalValor}`);
} else {
    alert(`Has elegido ${totalProductos} productos. Tu total es: $${totalValor}`);
}
