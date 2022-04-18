import {insumosElegidos} from "./carrito.js"
import {meterAlCarro} from "./carrito.js"

// const returnProducts = async () => {
// const insumos = await fetch("/insumos.json")
//     const data = await insumos.json()
//         data.forEach(product => {
//             let listElegidos = document.getElementById("listado");
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
//                               insumosElegidos.appendChild(listElegidos);
//                               document.getElementById(`${product.id}`).onclick = () => meterAlCarro(`${product.id}`);
//         });
//     };

  export {returnProducts}