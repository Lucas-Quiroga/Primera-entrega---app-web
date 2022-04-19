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