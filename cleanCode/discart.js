// <!-- Todo lo que podria usarse -->

// <!-- Carrito.js -->

// traemos la funcion para usarla en el carrito
// import {returnProducts} from "./fetch.js"
// // exportamos
// export{insumosElegidos}
// export{meterAlCarro}

// let listElegidos = document.getElementById("listado");
// const returnProducts = async () => {
//     const insumos = await fetch("/insumos.json")
//         const data = await insumos.json()
//             data.forEach(product => {
//                 // let listElegidos = document.getElementById("listado");
//                 const list = document.createElement("div");
//                 list.setAttribute("class", "card card-producto");
//                 list.style.width = "18rem";
//                 list.innerHTML = `<div class="img-container">
//                                   <h5 class="card-title">${product.nombre}</h5>
//                                   <img src="${product.foto}" alt="${product.nombre}</p>
//                                   ${product.nombre}
//                                   <p class="card-text"> Precio:</p>
//                                   <strong class="font">$${product.precio}</strong>
//                                   <br>
//                                   <button type="button" class="btn btn-dark">Agregar</button>
//                                   </div>`;
//                                   insumosOrigen.appendChild(list);
//                                   insumosElegidos.appendChild(insumosOrigen);
//                                   document.getElementById(`${product.id}`).onclick = () => meterAlCarro(`${product.id}`);
//             });
//         };
// returnProducts();


//recorremos con un for los insumos//

// for (const insumo of insumos){
//     let containerGeneral = document.createElement("div");
//     containerGeneral.setAttribute("class", "card card-product");
//     containerGeneral.style.width = "18rem";
//     containerGeneral.innerHTML = ` <div class="img-container">
//                                    <img src="${insumo.foto}" alt=${insumo.nombre}" class="img-insumo"/>
//                                    </div>
//                                    <div class= "info-insumo">
//                                    <p class="font">${insumo.nombre}</p>
//                                    <strong class="font">$${insumo.precio}</strong>
//                                    <br>
//                                    <button class= "boton" id="${insumo.id}"> Agregar </button>
//                                    </div>`;
//                                    insumosElegidos.appendChild(containerGeneral);
//                                 document.getElementById(`${insumo.id}`).onclick = () => meterAlCarro(`${insumo.id}`);
// };

/*--------------------------------------------------------------------------------------------------------------------------------*/

// <!-- fetch.js -->

// import {insumosElegidos} from "./carrito.js"
// import {meterAlCarro} from "./carrito.js"

// let botonSaludar = document.getElementById("hola");
    // botonSaludar.addEventListener("click", respuestaClick);
    // function respuestaClick(){
    //   console.log("Respuesta evento");
    // }
    // let botonprobando=document.querySelector(".btn btn-dark")
    // botonprobando.onclick= () => {console.log("Funciona")}; 

    // let botonprobando=document.getElementById("probando");
    // botonprobando.addEventListener("click", ()=>{alert("Funciona")});

//Cargue el fetch local para crear las cards asi podes tener mas rapido los datos
// let listElegidos = document.getElementById("listado");
// const returnProducts = async () => {
// const insumos = await fetch("/insumos.json")
//     const data = await insumos.json()
//         data.forEach(product => {
//             const list = document.createElement("div");
//             list.setAttribute("class", "card card-producto");
//             list.style.width = "18rem";
//             list.innerHTML = `<div class="img-container">
//                               <h5 class="card-title">${product.nombre}</h5>
//                               <img src="${product.foto}" alt="${product.nombre}</p>
//                               ${product.nombre}
//                               <p class="card-text"> Precio:</p>
//                               <strong class="font">$${product.precio}</strong>
//                               <br>
//                               <button type="button" class="btn btn-dark">Agregar</button>
//                               </div>`;
//                               listElegidos.appendChild(list);
//                               // insumosElegidos.appendChild(listElegidos);
//                               // document.getElementById(`${insumos.id}`).onclick = () => meterAlCarro(`${insumos.id}`);
//         });
//     };
//      returnProducts();

/*--------------------------------------------------------------------------------------------------------------------------------*/

// <!-- insumos.js -->

// // ARRAY DE LOS PRODUCTOS
// // const insumos = [{id: 1, nombre: "Velas", precio: 200,foto: "./img/1.jpg",stock: 1000},
// // {id: 2,nombre: "Collares",precio: 400,foto: "./img/2.jpg",stock: 1000},
// // {id: 3,nombre: "Sahumerios",precio: 300,foto: "./img/3.jpg",stock: 1000},
// // {id: 4,nombre: "Piramides",precio: 1200,foto: "./img/4.jpg",stock: 1000},]
// // {id: 5,nombre: "Buda",precio: 2200,foto: "./img/5.jpg",stock: 1000},
// // {id: 6,nombre: "Bomba defumadora",precio: 200,foto: "./img/6.jpg",stock: 1000},
// // ]

// // MOLDE PARA CREAR INSUMOS
// class Insumos{
//     constructor(id,nombre, precio, stock){
//         this.id = id;
//         this.producto = nombre;
//         this.precio = precio;
//         this.stock = stock;
//         this.info = `El insumo es: ${this.producto}, y el valor sin IVA: ${precio}`
// }
// verInfo(){
//     console.log(this.info)
// }
// cambiarPrecio(){
//     this.precio = this.precio * 1.21;
// }
// vender(cantidad) {
//     this.stock = this.stock - cantidad;
// }
// }

// //funcion que agregan objetos al array en particular
// function agregueInsumos (id, nombre, precio,stock){
//     let objetoAgregar = new Insumos(id, nombre, precio, stock);
//     insumos.push(objetoAgregar);
//     return `El objeto ha sido introducido al array satisfactoriamente`;
// }

// //agregar objetos de manera eficaz al array EJ://
// // agregueInsumos(1, "Velas", 70, 100);
// // agregueInsumos(2, "Collares", 100, 100);
// // agregueInsumos(3, "Sahumerios", 170, 50);

// //funcion que modifica los objetos en el array para aumentarles el iva sin cambiar de array//
// function infoInsumos(){
//     let preguntaCeo = prompt("Desea aplicarle el iva a sus productos?");
//     if(preguntaCeo === "Si" || "si"){
//         for (const prodInsumo of insumos)
//             prodInsumo.cambiarPrecio();
//             return console.table(insumos)
// }
// }

// //obtiene un nuevo array sumandole el iva a cada uno y redondeando para abajo el iva sin decimales//
// const imsIva = insumos.map((el)=> {
//     return {
//         id: el.id,
//         producto: el.producto,
//         precio: Math.round(el.precio * 1.21)
//     }
// })

// //busqueda que devuelve true o false si está o no el producto//
// function busqueda(nombre){
//     console.log(insumos.some((el) => el.producto == nombre))
//     }

/*--------------------------------------------------------------------------------------------------------------------------------*/

// <!-- main.js -->


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

/*--------------------------------------------------------------------------------------------------------------------------------*/

// <!-- servicios.js -->

//agregar objetos de manera eficaz al array E//
// agregueServicios(1, "Lectura de tarot", 1600, "referencia", "30 - 60min");
// agregueServicios(2, "Reiki", 1100, "referencia", "30 - 60min");
// agregueServicios(3, "Sanación", 700, "referencia", "10 - 20min");
// agregueServicios(4, "Limpieza energética", 1100, "referencia", "10 - 20min");



