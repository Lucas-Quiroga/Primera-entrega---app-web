// Formulario
let botonEnvioForm = document.getElementById("botonEnvio");
botonEnvioForm.addEventListener("click", almacenarDatos);

let inputNameUsuario = document.getElementById("inputNombre");
let inputLastNameUsuario = document.getElementById("inputApellido");
let inputEmailUsuario = document.getElementById("inputEmail");
let inputComentarioUsuario = document.getElementById("textArea")

//almacenamos de forma local los datos del usuario. (esto en realidad tendria que ser con una aplicación hecha por PHP en donde te manden un mail con los datos del usuario, igualmente lo que yo queria era simular eso)
function almacenarDatos(e){
    e.preventDefault();
    Swal.fire({
        width: 2500,
        title: 'Enviado con exito',
        text: 'En breves nos pondremos en contacto!',
        icon: 'success',
        confirmButtonText: 'Salir'
    })
    localStorage.setItem("Nombre:", JSON.stringify(inputNameUsuario.value));
    localStorage.setItem("Apellido:", JSON.stringify(inputLastNameUsuario.value));
    localStorage.setItem("Email:", JSON.stringify(inputEmailUsuario.value));
    localStorage.setItem("Comentario:", JSON.stringify(inputComentarioUsuario.value));
}