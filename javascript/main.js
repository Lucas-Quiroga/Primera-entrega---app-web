// Formulario

let botonEnvioForm = document.getElementById("botonEnvio");
botonEnvioForm.addEventListener("click", almacenarDatos);

let inputNameUsuario = document.getElementById("inputNombre");
let inputLastNameUsuario = document.getElementById("inputApellido");
let inputEmailUsuario = document.getElementById("inputEmail");
let inputComentarioUsuario = document.getElementById("textArea")

function almacenarDatos(e){
    e.preventDefault();
    Swal.fire({
        // imageUrl: './imgAlerts/alertpic.jpg',
        // imgWidth: 400,
        // imgHeight: 200,
        // imageAlt: 'Titulo img',
        width: 2500,
        title: 'Enviado con exito',
        text: 'En breves nos pondremos en contacto!',
        icon: 'success',
        confirmButtonText: 'Salir'
    })
    localStorage.setItem("Nombre:", JSON.stringify(inputNameUsuario.value));
    localStorage.setItem("Apellido:", JSON.stringify(inputLastNameUsuario.value));
    localStorage.setItem("Email:", JSON.stringify(inputEmailUsuario.value));
    localStorage.setItem("Comentario:", JSON.stringify(inputComentarioUsuario.value));
}

// meterAlArray = () => {
//     nombreUser.push(inputNameUsuario.value);
//     apellidoUser.push(inputLastNameUsuario.value);
//     emailUser.push(inputEmailUsuario.value);
//     comentarioUser.push(inputComentarioUsuario.value);
//     }

//     meterAlArray();

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
