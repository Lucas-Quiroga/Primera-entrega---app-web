
//esperamos que se lea todo el documento HTML y luego ejecuta todo lo siguiente
document.addEventListener("DOMContentLoaded", () => {
  fetchData()
  //guardamos en el local storge el carrito si existe
  if(localStorage.getItem("carrito")){
    carrito = JSON.parse(localStorage.getItem("carrito"))
    pintarCarrito()
  }
})

//traemos con el fetch la información de los productos que vamos a mostrar en formato JSON
const fetchData = async () => {
  try {
      const res = await fetch("/insumos.json")
      const data = await res.json()
      // console.log(data)
      pintarProductos(data)
      detectarBotones(data)
  } catch (error) {
      console.log(error)
  }
}

 //con la funcion siguiente armamos las cards de los productos ya con la información que tenemos
const productContainer = document.querySelector('#contenedor-productos')
const pintarProductos = (data) => {
  const template = document.querySelector('#template-productos').content
  const fragment = document.createDocumentFragment()
  // console.log(template)
  data.forEach(producto => {
      // console.log(producto)
      template.querySelector('img').setAttribute('src', producto.thumbnailUrl)
      template.querySelector('h5').textContent = producto.title
      template.querySelector('p span').textContent = producto.precio
      template.querySelector('button').dataset.id = producto.id
      const clone = template.cloneNode(true)
      fragment.appendChild(clone)
  })
  productContainer.appendChild(fragment)
}

//inicializamos el carrito donde vamso a volvar la información
let carrito = {}

 //una vez ya capturado toda la información y ya tener las cards armadas pasamos a crear un función donde detecte cuando el usuario haga click en el boton asi podemos ubicar el ID de los productos y meterlos en el carrito.(+libreria)
const detectarBotones = (data) => {
  //ubicamos el boton
  const botones = document.querySelectorAll('.card button')

  botones.forEach(btn => {
      btn.addEventListener('click', () => {
        Toastify({ //le avisamos al usuario que cuando toque el boton de "comprar" el producto que selecciono ya está en el carrito
                text: "Agregado al carrito \n (pulsa para borrar)",
                duration: 3000,
                className: "textoToastify",
                style: {
                  background: 'lightgreen'
                },
                onClick: () => {//si hace click en el cartel de la libreria "ToastifyJS" le damos la opción al usuario de eliminar el producto seleccionado con su respectivo nombre
                  Swal.fire({
                    title: `Deseas eliminar el articulo "${producto.title}"?`,
                    text: "Podras agregarlo luego",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Si, eliminarlo!',
                  }).then((result) => {//en caso de que el usario seleccione que "si" eliminamos el producto del carrito
                    if (result.isConfirmed) {
                        const producto = carrito[btn.dataset.id]
                        producto.cantidad--
                        if (producto.cantidad === 0) {
                            delete carrito[btn.dataset.id]
                        } else {
                            carrito[btn.dataset.id] = { ...producto }
                        }
                        pintarCarrito()
                      Swal.fire(
                        'Borrado!',
                        'Borrado del carrito',
                        'success'
                      )
                    }
                  })
                }
              }).showToast()
           //accedemos a traves de la data de los productos el ID  y en caso de que exista lo metemos al carrito
          const producto = data.find(item => item.id === parseInt(btn.dataset.id))
          producto.cantidad = 1 //decimos que la cantidad del producto sea 1
          if (carrito.hasOwnProperty(producto.id)) { 
              producto.cantidad = carrito[producto.id].cantidad + 1 //y aca lo aumentamos en 1 si existe, independientemente si hace click en el mismo objeto (sobrescribir)
          }
          carrito[producto.id] = { ...producto } //
          // console.log('carrito', carrito)
          pintarCarrito()
      })
  })
}

//ahora armamos la funcion para que en la seccion de compra el usuario pueda ver los movimientos que está haciendo
const items = document.querySelector('#items')
const pintarCarrito = () => {

  //los items va a partir desde vacio
  items.innerHTML = ''

  const template = document.querySelector('#template-carrito').content
  const fragment = document.createDocumentFragment()

  Object.values(carrito).forEach(producto => {
      // console.log('producto', producto)
      template.querySelector('th').textContent = producto.id
      template.querySelectorAll('td')[0].textContent = producto.title
      template.querySelectorAll('td')[1].textContent = producto.cantidad
      template.querySelector('span').textContent = producto.precio * producto.cantidad // cada vez que aumentemos la cantidad lo multiplicamos por su precio asi nos da el total
      
      //traemos los botones
      template.querySelector('.btn-info').dataset.id = producto.id
      template.querySelector('.btn-danger').dataset.id = producto.id

      const clone = template.cloneNode(true)
      fragment.appendChild(clone)
      // aplicamos la misma logica
  })

  items.appendChild(fragment)

  pintarFooter()
  accionBotones()
  
  //guardamos el carrito para que si reinicia la pagina se siga mantentiendo su compra
  localStorage.setItem("carrito", JSON.stringify(carrito))
}

// hacemos una funcion para modificar el footer del usario de forma dinamica
const footer = document.querySelector('#footer-carrito')
const pintarFooter = () => {

  //inicializamos el footer en vacio
  footer.innerHTML = ''

  if (Object.keys(carrito).length === 0) { //si no existen elementos le mostramos al usario un cartel que diga:
      footer.innerHTML = `
      <th scope="row" colspan="5">No hay productos en el carrito</th>
      `
      return
  }

  const template = document.querySelector('#template-footer').content
  const fragment = document.createDocumentFragment()

  // usamos el "reduce()" para ir sumando la cantidad y el precio de cada uno de los productos
  const nCantidad = Object.values(carrito).reduce((acc, { cantidad }) => acc + cantidad, 0)
  const nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio ,0)

 //accedemos a los template para agarrar la cantidad y el precio para modificarlos y mostrarlos en el footer
  template.querySelectorAll('td')[0].textContent = nCantidad
  template.querySelector('span').textContent = nPrecio

  const clone = template.cloneNode(true)
  fragment.appendChild(clone)

  footer.appendChild(fragment)


  //llamamos al boton y hacemos una funcion en donde pueda vaciar el carrito y de paso le mostramos un cartel para que sepa el total de su compra
  const boton = document.querySelector('#vaciar-carrito')
  boton.addEventListener('click', () => {
    Swal.fire({
            width: 2500,
            title: `Total a pagar: $${nPrecio}`,
            text: 'En breves nos pondremos en contacto!',
            icon: 'success',
            confirmButtonText: 'Salir',
            position: 'top',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
      carrito = {}
      pintarCarrito()
  })

}

// por ultimo le damos funcionalidad a los botones de sumar y dismuir de cada uno de los productos que se ve reflejado en la seccion de compra
const accionBotones = () => {
  //los detectamos
  const botonesAgregar = document.querySelectorAll('#items .btn-info')
  const botonesEliminar = document.querySelectorAll('#items .btn-danger')

  //armamos la funcion para aumentar ese objecto al cual hizo click
  botonesAgregar.forEach(btn => {
      btn.addEventListener('click', () => {
          // console.log(btn.dataset.id)
          const producto = carrito[btn.dataset.id]
          producto.cantidad ++ //aumentamos la cantidad de ese producto y lo sumamos a la misma linea
          carrito[btn.dataset.id] = { ...producto }
          pintarCarrito()
      })
  })

  //lo mismo hacemos con el boton de eliminar
  botonesEliminar.forEach(btn => {
      btn.addEventListener('click', () => {
          // console.log('eliminando...')
          const producto = carrito[btn.dataset.id]
          producto.cantidad--
          if (producto.cantidad === 0) { // en caso de que sea 0 la cantidad, lo eliminamos de la seccion de compra
              delete carrito[btn.dataset.id]
          } else {
              carrito[btn.dataset.id] = { ...producto }
          }
          pintarCarrito()
          
      })
  })
}

// let carritoEjemplo = {}
// carritoEjemplo = {
//     1: {id: 1, titulo: 'cafe', precio: 500, cantidad: 3},
//     2: {id: 3, titulo: 'pizza', precio: 100, cantidad: 2},
// }

// console.log(carritoEjemplo[1])