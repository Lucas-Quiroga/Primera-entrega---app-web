//inicializamos las constantes a usar
const dialog = document.querySelector("dialog");
const cancel = document.querySelector("#cancel");
const show = document.querySelector("#show")

//le agregamos los eventos a los botones de mostrar y salir
show.addEventListener("click", ()=> dialog.showModal())
cancel.addEventListener("click", ()=> dialog.close())