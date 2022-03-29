// Formulario

let botonEnvioForm = document.getElementById("botonEnvio");
botonEnvioForm.addEventListener("click", almacenarDatos);

let inputNameUsuario = document.getElementById("inputNombre");
let inputLastNameUsuario = document.getElementById("inputApellido");
let inputEmailUsuario = document.getElementById("inputEmail");
let inputComentarioUsuario = document.getElementById("textArea")

function almacenarDatos(e){
    e.preventDefault();

    localStorage.setItem("Nombre:", JSON.stringify(inputNameUsuario.value));
    localStorage.setItem("Apellido:", JSON.stringify(inputLastNameUsuario.value));
    localStorage.setItem("Email:", JSON.stringify(inputEmailUsuario.value));
    localStorage.setItem("Comentario:", JSON.stringify(inputComentarioUsuario.value));
    alert("enviado con exito");
}
