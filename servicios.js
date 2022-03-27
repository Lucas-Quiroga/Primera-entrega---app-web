// ARRAY DE LOS SERVICIOS

const servicios = [];

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

//funcion que agrega el servicio al array en particular//

function agregueServicios (id, nombre, valor, detalle, duracion){
    let objetoAgregar = new Servicios(id, nombre, valor, detalle, duracion);
    servicios.push(objetoAgregar);
    return `El objeto ha sido introducido al array satisfactoriamente`;
}

//agregar objetos de manera eficaz al array//

agregueServicios(1, "Lectura de tarot", 1600, "referencia", "30 - 60min");
agregueServicios(2, "Reiki", 1100, "referencia", "30 - 60min");
agregueServicios(3, "Sanación", 700, "referencia", "10 - 20min");
agregueServicios(4, "Limpieza energética", 1100, "referencia", "10 - 20min");