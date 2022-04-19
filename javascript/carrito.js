
// traemos la funcion para usarla en el carrito
// import {returnProducts} from "./fetch.js"
// // exportamos
// export{insumosElegidos}
// export{meterAlCarro}

//inicializamos array de carrito
let carrito = [];
let insumosElegidos = document.getElementById("sec-insumos");
let carritoElegidos = document.getElementById("sec-carrito");

let compraTotal = document.createElement("div");
compraTotal.innerHTML = "<h2> Precio total: $</h2>";
carritoElegidos.appendChild(compraTotal);

let precioTotal = document.createElement("h2");
precioTotal.innerText = "0";
compraTotal.appendChild(precioTotal);

let insumosCantidad = document.createElement("div");
insumosCantidad.innerHTML = "<h2>Cantidad de insumos: $</h2>";
carritoElegidos.appendChild(insumosCantidad)

let insumosOrigen = document.createElement("h2");
insumosOrigen.innerText = "0";
insumosCantidad.appendChild(insumosOrigen);

let boton = document.createElement("button");
boton.innerText = "Confirmar compra";
carritoElegidos.appendChild(boton);
boton.setAttribute("class", "boton");

//funcion de boton//

function carritoEnCero(){
    precioTotal.innerText = "0";
    insumosOrigen.innerText = "0";
    localStorage.clear();
    carrito=[];
}

boton.onclick = () => {
    const precioResultado = precioTotal.innerText;
    // alert(`Total a pagar: $${precioResultado}`);
    Swal.fire({
        // imageUrl: './imgAlerts/alertpic.jpg',
        // imgWidth: 400,
        // imgHeight: 200,
        // imageAlt: 'Titulo img',
        width: 2500,
        title: `Total a pagar: $${precioResultado}`,
        text: 'En breves nos pondremos en contacto!',
        icon: 'success',
        confirmButtonText: 'Salir'
    })
    carritoEnCero();
}

//funcion para añadir al carrito//

function meterAlCarro(id){
    carrito.push(insumos.find(e => e.id == id));
    localStorage.setItem("carrito", JSON.stringify(carrito));
    sumaDeTotalCarrito();
    Toastify({
        text: "Agregado al carrito",
        duration: 3000,
        className: "textoToastify",
        style: {
            background: 'lightgreen'
        },
        onClick: () => {
            Swal.fire({
                title: `Deseas eliminar este articulo?`,
                text: "¡No podrás revertir esto!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, eliminarlo!'
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire(
                    'Borrado!',
                    'Borrado del carrito',
                    'success'
                  )
                }
              })
            }
}).showToast()
}

function sumaDeTotalCarrito(){
    let total = 0;
    for (const insumo of carrito){
        total += insumo.precio;
    }
    precioTotal.innerText = total;
    insumosOrigen.innerText = carrito.length;
}

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