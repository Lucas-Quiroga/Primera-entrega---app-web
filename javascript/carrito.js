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
    alert(`Total a pagar: $${precioResultado}`);
    carritoEnCero();
}

//funcion para añadir al carrito//

function meterAlCarro(id){
    carrito.push(insumos.find(e => e.id == id));
    localStorage.setItem("carrito", JSON.stringify(carrito));
    sumaDeTotalCarrito();
}

function sumaDeTotalCarrito(){
    let total = 0;
    for (const insumo of carrito){
        total += insumo.precio;
    }
    precioTotal.innerText = total;
    insumosOrigen.innerText = carrito.length;
}

//recorremos con un for los insumos//

for (const insumo of insumos){
    let containerGeneral = document.createElement("div");
    containerGeneral.setAttribute("class", "card card-product");
    containerGeneral.style.width = "18rem";
    containerGeneral.innerHTML = ` <div class="img-container">
                                   <img src="${insumo.foto}" alt=${insumo.nombre}" class="img-insumo"/>
                                   </div>
                                   <div class= "info-insumo">
                                   <p class="font">${insumo.nombre}</p>
                                   <strong class="font">$${insumo.precio}</strong>
                                   <br>
                                   <button class= "boton" id="${insumo.id}"> Agregar </button>
                                   </div>`;
                                   insumosElegidos.appendChild(containerGeneral);
                                document.getElementById(`${insumo.id}`).onclick = () => meterAlCarro(`${insumo.id}`);
};

// let serviciosInsumos = document.getElementById("sec-insumos");
// function crearCard (insumos) {
//     //primero creo el div contenedor para cada card y aplico estilos de bootstrap
//     let card = document.createElement("div");
//     card.setAttribute("class", "card card-producto");
//     card.style.width = "18rem";
//     //le asigno las cards al elemento padre section
//     serviciosInsumos.appendChild(card);
//     //creo divs que contengan las imagenes de los productos y se los asigno como hijos a las cards
//     let cardImg = document.createElement("div");
//     cardImg.innerHTML = `<img src="./img/${insumos.id}.jpg" class="card-img-top" alt="${insumos.producto}"></img>`;
//     card.appendChild(cardImg);
//     //creo divs que contengan los nombres de los productos y los botones, despues se los asigno como hijos a las cards
//     let cardBody = document.createElement("div");
//     cardBody.innerHTML = `<h5 class="card-title">${insumos.producto}</h5>
//                             <p class="card-text"> Precio: $${insumos.precio} </p>
//                             <button class="btn btn-dark">Comprar</button>`;
//     card.appendChild(cardBody);
//     cardBody.setAttribute("class", "card-body");
//     serviciosInsumos.appendChild(card);
//                                 document.getElementById(`${insumo.id}`).onclick = () => meterAlCarro(`${insumo.id}`);
// };

// for (const insumo of insumos) {
//    crearCard(insumo);
// }