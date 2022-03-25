//arrays//
const insumos = [];
const servicios = [];

//objetos//
class Insumos{
        constructor(id,nombre, precio, stock){
            this.id = id;
            this.producto = nombre;
            this.precio = precio;
            this.stock = stock;
            this.info = `El insumo es: ${this.producto}, y el valor sin IVA: ${precio}`
    }
    verInfo(){
        console.log(this.info)
    }
    cambiarPrecio(){
        this.precio = this.precio * 1.21;
    }
    vender(cantidad) {
        this.stock = this.stock - cantidad;
    }
}


class Servicios {
    constructor(id, nombre,valor, detalle, duracion){
        this.id = id;
        this.servicio = nombre;
        this.precio = valor;
        this.detalle = detalle;
        this.duracion = duracion;
    }
}

//funciones que agregan objetos al array particular//
function agregueInsumos (id, nombre, precio,stock){
    let objetoAgregar = new Insumos(id, nombre, precio, stock);
    insumos.push(objetoAgregar);
    return `El objeto ha sido introducido al array satisfactoriamente`;
}

function agregueServicios (id, nombre, valor, detalle, duracion){
    let objetoAgregar = new Servicios(id, nombre, valor, detalle, duracion);
    servicios.push(objetoAgregar);
    return `El objeto ha sido introducido al array satisfactoriamente`;
}

//agregar objetos de manera eficaz al array//
agregueInsumos(1, "Velas", 70, 100);
agregueInsumos(2, "Collares", 100, 100);
agregueInsumos(3, "Sahumerios", 170, 50);

agregueServicios(1, "Lectura de tarot", 1600, "referencia", "30 - 60min");
agregueServicios(2, "Reiki", 1100, "referencia", "30 - 60min");
agregueServicios(3, "Sanación", 700, "referencia", "10 - 20min");
agregueServicios(4, "Limpieza energética", 1100, "referencia", "10 - 20min");

//DOM
let sectionProductos = document.getElementById("productos");

function crearCard (insumos) {
    //primero creo el div contenedor para cada card y aplico estilos de bootstrap
    let card = document.createElement("div");
    card.setAttribute("class", "card card-producto");
    card.style.width = "18rem";
    //le asigno las cards al elemento padre section
    sectionProductos.appendChild(card);
    //creo divs que contengan las imagenes de los productos y se los asigno como hijos a las cards
    let cardImg = document.createElement("div");
    cardImg.innerHTML = `<img src="./img/${insumos.id}.jpg" class="card-img-top" alt="${insumos.producto}"></img>`;
    card.appendChild(cardImg);
    //creo divs que contengan los nombres de los productos y los botones, despues se los asigno como hijos a las cards
    let cardBody = document.createElement("div");
    cardBody.innerHTML = `<h5 class="card-title">${insumos.producto}</h5>
                            <p class="card-text"> Precio: $${insumos.precio} </p>
                            <button class="btn btn-dark">Comprar</button>`;
    card.appendChild(cardBody);
    cardBody.setAttribute("class", "card-body");
}

let serviciosProductos = document.getElementById("Servicios");
function crearCard2 (servicios) {
    let card2 = document.createElement("div");
    card2.setAttribute("class", "card card-producto");
    card2.style.width = "18rem";
    serviciosProductos.appendChild(card2);
    let cardImg2 = document.createElement("div");
    cardImg2.innerHTML = `<img src="./imgS/${servicios.id}.jpeg" class="card-img-top" alt="${servicios.producto}"></img>`;
    card2.appendChild(cardImg2);
    let cardBody2 = document.createElement("div");
    cardBody2.innerHTML = `<h5 class="card-title">${servicios.servicio}</h5>
    <p class="card-text"> Precio: $${servicios.precio} </p>
    <button class="btn btn-dark">Comprar</button>`;
    card2.appendChild(cardBody2);
    cardBody2.setAttribute("class", "card-body");
}

for (const insumo of insumos) {
   crearCard(insumo);
}

for (const servicio of servicios){
    crearCard2(servicio)
}

// Formulario
// Mi idea es que cuando ingresen los datos en el formulario esos mismos datos al tocar el boton de enviar se guarden en el LocalStorage del navegador sin tener que usar una api

const datosForm = [];

let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", almacenarDatos);

let inputNameUsuario = document.getElementById("inputNombre");
let inputLastNameUsuario = document.getElementById("inputApellido");
let inputEmailUsuario = document.getElementById("inputEmail");

let enJSON = JSON.stringify(inputNameUsuario);

// almacenarDatosUsuario.addEventListener("input", ()=>{
//     localStorage.setItem("Nombre: ",inputNameUsuario);
//     localStorage.setItem("Apellido: ",inputLastNameUsuario);
//     localStorage.setItem("Email: ",inputEmailUsuario);

//     datosForm.push(inputNameUsuario);
//     datosForm.push(inputLastNameUsuario);
//     datosForm.push(inputEmailUsuario);
// })

function almacenarDatos(e){
    e.preventDefault();
    localStorage.setItem("Nombre: ",enJSON);
    localStorage.setItem("Apellido: ",inputLastNameUsuario);
    localStorage.setItem("Email: ",inputEmailUsuario);

    datosForm.push(inputNameUsuario);
    datosForm.push(inputLastNameUsuario);
    datosForm.push(inputEmailUsuario);
    alert("enviado con exito")
}





// //Preguntamos si quiere ver el catalogo de productos//
// let askClientIms = prompt("¿Ver detalles de productos?");

// function catalogo(){
//     if(askClientIms === "Si"){
//     for (const productos of insumos)
//         alert(`Nombre del producto: ${productos.producto}\nPrecio: ${productos.precio}`);
//     } else {
//         alert("No hay problema, saludos!")
//     }
// }

// //llamamos a la función para mostrarle los productos al usuario//
// catalogo();

// //Preguntamos si quiere ver los servicios//
// let askClientSer = prompt("¿Ver detalles de los servicios ofrecidos?");

// function catalogoSer(){
//     if(askClientSer === "Si"){
//     for (const productos of servicios)
//     alert(`Nombre del servicio: ${productos.servicio}\nValor: ${productos.precio}\nInfo: ${productos.detalle}\nDuración: ${productos.duracion}`);
//     } else {
//         alert("No hay problema, saludos!")
//     }
// }

// //Llamamos a la función para mostrarle los servicios al usuario//
// catalogoSer();

// //Funcion para calcular cantidad y producto
// function calcularProductos(precioProducto, cantidadProducto ){
//     return precioProducto * cantidadProducto
// }
// let guardar = calcularProductos;

// //Le preguntamos al usuario que producto quiere//
// let productoSeleccionado = prompt("Que producto quiere?");
// let productoSeleccionadoCant = parseInt(prompt("Cuanta cantidad desea?"));
// const productoBusqueda = insumos.find(product => product.producto === productoSeleccionado);

// switch (productoSeleccionado){
//     case "Velas":
//         alert ("El precio final de su producto es: $" + calcularProductos(productoBusqueda.precio, productoSeleccionadoCant));
//         productoBusqueda.vender;
//         alert("Muchas gracias, para retirarlo comunicarse al +12 12345678")
//         break
//     case "Collares":
//         alert ("El precio final de su producto es: $" + calcularProductos(productoBusqueda.precio, productoSeleccionadoCant));
//         productoBusqueda.vender;
//         alert("Muchas gracias, para retirarlo comunicarse al +12 12345678")
//         break
//     case "Sahumerios":
//         alert ("El precio final de su producto es: $" + calcularProductos(productoBusqueda.precio, productoSeleccionadoCant));
//         productoBusqueda.vender;
//         alert("Muchas gracias, para retirarlo comunicarse al +12 12345678")
//         break
//     default:
//         alert("Por favor ingrese un producto valido/disponible")
//         break;
// }

//funcion que modifica los objetos en el array para aumentarles el iva sin cambiar de array//
function infoInsumos(){
    let preguntaCeo = prompt("Desea aplicarle el iva a sus productos?");
    if(preguntaCeo === "Si" || "si"){
        for (const prodInsumo of insumos)
            prodInsumo.cambiarPrecio();
            return console.table(insumos)
}
}

//obtiene un nuevo array sumandole el iva a cada uno y redondeando para abajo el iva sin decimales//
const imsIva = insumos.map((el)=> {
    return {
        id: el.id,
        producto: el.producto,
        precio: Math.round(el.precio * 1.21)
    }
})

//busqueda que devuelve true o false si está o no el producto//
function busqueda(nombre){
console.log(insumos.some((el) => el.producto == nombre))
}