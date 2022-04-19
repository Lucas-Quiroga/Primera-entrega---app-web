// import {insumosElegidos} from "./carrito.js"
// import {meterAlCarro} from "./carrito.js"

//Cargue el fetch local para crear las cards asi podes tener mas rapido los datos
let listElegidos = document.getElementById("listado");
const returnProducts = async () => {
const insumos = await fetch("/insumos.json")
    const data = await insumos.json()
        data.forEach(product => {
            const list = document.createElement("div");
            list.setAttribute("class", "card card-producto");
            list.style.width = "18rem";
            list.innerHTML = `<div class="img-container">
                              <h5 class="card-title">${product.nombre}</h5>
                              <img src="${product.foto}" alt="${product.nombre}</p>
                              ${product.nombre}
                              <p class="card-text"> Precio:</p>
                              <strong class="font">$${product.precio}</strong>
                              <br>
                              <button type="button" class="btn btn-dark">Agregar</button>
                              </div>`;
                              listElegidos.appendChild(list);
                              // insumosElegidos.appendChild(listElegidos);
                              // document.getElementById(`${insumos.id}`).onclick = () => meterAlCarro(`${insumos.id}`);
        });
    };

    // let botonSaludar = document.getElementById("hola");
    // botonSaludar.addEventListener("click", respuestaClick);
    // function respuestaClick(){
    //   console.log("Respuesta evento");
    // }
    // let botonprobando=document.querySelector(".btn btn-dark")
    // botonprobando.onclick= () => {console.log("Funciona")}; 

    // let botonprobando=document.getElementById("probando");
    // botonprobando.addEventListener("click", ()=>{alert("Funciona")});

    returnProducts();