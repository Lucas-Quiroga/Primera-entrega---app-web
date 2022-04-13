let listElegidos = document.getElementById("listado");
const returnProducts = async () => {
const insumos = await fetch("/insumos.json")
    const data = await insumos.json()
        data.forEach(product => {
            const list = document.createElement("div");
            list.setAttribute("class", "card card-producto");
            list.style.width = "18rem";
            list.innerHTML = `<div class="img-container">
                              <img src="${product.foto}" alt="${product.nombre}</p>
                              ${product.nombre}
                              <strong class="font">$${product.precio}</strong>
                              <br>
                              <button class= "boton" id="${product.id}"> Agregar </button>
                              </div>`;
                              listElegidos.appendChild(list);
        });
    };
//La concha de tu madre ollboy
  returnProducts();