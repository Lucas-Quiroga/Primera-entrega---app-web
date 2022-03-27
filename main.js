//DOM
let sectionProductos = document.getElementById("sec-insumos");

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

const nombreUser = [];
const apellidoUser = [];
const emailUser = [];
const comentarioUser = [];

let botonEnvioForm = document.getElementById("botonEnvio");
botonEnvioForm.addEventListener("click", almacenarDatos);

let inputNameUsuario = document.getElementById("inputNombre");
let inputLastNameUsuario = document.getElementById("inputApellido");
let inputEmailUsuario = document.getElementById("inputEmail");
let inputComentarioUsuario = document.getElementById("textArea")

function almacenarDatos(e){
    // e.preventDefault();
    let nombre = inputNameUsuario.value;

    localStorage.setItem("Nombre:", JSON.stringify(inputNameUsuario.value));
    localStorage.setItem("Apellido:", JSON.stringify(inputLastNameUsuario.value));
    localStorage.setItem("Email:", JSON.stringify(inputEmailUsuario.value));
    localStorage.setItem("Comentario:", JSON.stringify(inputComentarioUsuario.value));

    meterAlArray = (e) => {
    nombreUser.push("hola");
    apellidoUser.push(inputLastNameUsuario.value);
    emailUser.push(inputEmailUsuario.value);
    comentarioUser.push(inputComentarioUsuario.value);
    }
    alert("enviado con exito");
}
nombreUser.push(JSON.parse(inputNameUsuario.value));
// let formulario = document.getElementById("formulario");
// formulario.addEventListener("submit", almacenarDatos);

// let enJSON = JSON.stringify(inputNameUsuario);

// almacenarDatosUsuario.addEventListener("input", ()=>{
//     localStorage.setItem("Nombre: ",inputNameUsuario);
//     localStorage.setItem("Apellido: ",inputLastNameUsuario);
//     localStorage.setItem("Email: ",inputEmailUsuario);

//     datosForm.push(inputNameUsuario);
//     datosForm.push(inputLastNameUsuario);
//     datosForm.push(inputEmailUsuario);
// })





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
