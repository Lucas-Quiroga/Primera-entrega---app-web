// ARRAY DE LOS SERVICIOS

const servicios = [{id: 1, nombre: "Lectura de tarot", precio: 2000, detalle: "Método de consulta e interpretación de hechos del pasado, presente y futuro.", duracion: "30 - 60min", foto: "./imgS/1.jpeg"},
{id: 2, nombre: "Reiki", precio: 1300, detalle: "Técnica mediante la cual un Maestro de Reiki canaliza y transmite energía utilizando sus manos. Busca obtener paz y equilibrio a nivel físico, mental, emocional y espiritual.", duracion: "30 - 50min", foto: "./imgS/2.jpeg"},
{id: 3, nombre: "Sanación", precio: 900, detalle: "Consta de 3 sesiones en las que se busca sanar a través de oraciones y de manera integral al cuerpo espiritual, mental, emocional y físico.Restablece el equilibrio y armonía de los 7 Chakras.", duracion: "10 - 20min", foto: "./imgS/3.jpeg"},
{id: 4, nombre: "Limpieza energetica", precio: 1300, detalle: "Se utiliza un péndulo para detectar alteraciones vibracionales en el cuerpo energético, para luego corregirlas eliminando bloqueos y reparando circuitos. Como resultado, la energía vuelve a fluir de manera libre y equilibrada.", duracion: "10 - 20min", foto: "./imgS/4.jpeg"}];

//MOLDE DE SERVICIOS//

class Servicios {
    constructor(id, nombre,valor, detalle, duracion){
        this.id = id;
        this.servicio = nombre;
        this.precio = valor;
        this.detalle = detalle;
        this.duracion = duracion;
    }
}

let serviciosProductos = document.getElementById("sec-servicios");

function crearCard2 (servicios) {
    let card2 = document.createElement("div");
    card2.setAttribute("class", "card card-producto");
    card2.style.width = "18rem";
    serviciosProductos.appendChild(card2);
    let cardImg2 = document.createElement("div");
    cardImg2.innerHTML = `<img src="./imgS/${servicios.id}.jpeg" class="card-img-top" alt="${servicios.producto}"></img>`;
    card2.appendChild(cardImg2);
    let cardBody2 = document.createElement("div");
    cardBody2.innerHTML = `<h5 class="card-title">${servicios.nombre}</h5>
    <p class="card-text">  ${servicios.detalle} </p>
    <p class="card-text"> Duración: ${servicios.duracion} </p>
    <p class="card-text"> Precio: $${servicios.precio} </p>
    <a href="#formulario"><button type="button" class="btn btn-dark">Solicitar información</button></a>`;
    card2.appendChild(cardBody2);
    cardBody2.setAttribute("class", "card-body");
}

//Recorremos los servicios
for (const servicio of servicios){
    crearCard2(servicio)
}

//funcion que agrega el servicio al array en particular//

function agregueServicios (id, nombre, valor, detalle, duracion){
    let objetoAgregar = new Servicios(id, nombre, valor, detalle, duracion);
    servicios.push(objetoAgregar);
    return `El objeto ha sido introducido al array satisfactoriamente`;
}