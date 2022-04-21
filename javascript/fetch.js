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
     returnProducts();



     const productos2 = document.createElement("div")
     async function viendoCard () {
     const esperandoFetch = await fetch("/insumos.json")
     .then((resp) => resp.json())
     .then((data) => {
        const productos = document.createElement("div")
        productos.setAttribute("class", "card")
        productos.innerHTML = ` <img class="card-img-top" src="${product.foto}" alt="Card image cap">
                                <div class="card-body">
                                <h5 class="card-title">${product.nombre}</h5>
                                <p class="card-text">Some quick example text to build on the card title and make upthe bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>`
                                productos2.appendChild(productos);
     })
    }

    viendoCard();