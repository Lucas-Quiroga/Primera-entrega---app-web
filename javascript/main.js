// Formulario

let botonEnvioForm = document.getElementById("botonEnvio");
botonEnvioForm.addEventListener("click", almacenarDatos);

let inputNameUsuario = document.getElementById("inputNombre");
let inputLastNameUsuario = document.getElementById("inputApellido");
let inputEmailUsuario = document.getElementById("inputEmail");
let inputComentarioUsuario = document.getElementById("textArea")

function almacenarDatos(e){
    e.preventDefault();
    Swal.fire({
        // imageUrl: './imgAlerts/alertpic.jpg',
        // imgWidth: 400,
        // imgHeight: 200,
        // imageAlt: 'Titulo img',
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