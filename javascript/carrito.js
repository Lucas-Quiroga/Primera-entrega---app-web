document.addEventListener("DOMContentLoaded", () => {
  fetchData()
})

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

const contendorProductos = document.querySelector('#contenedor-productos')
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
  contendorProductos.appendChild(fragment)
}

let carrito = {}

const detectarBotones = (data) => {
  const botones = document.querySelectorAll('.card button')

  botones.forEach(btn => {
      btn.addEventListener('click', () => {
        Toastify({
                text: "Agregado al carrito \n (pulsa para borrar)",
                duration: 3000,
                className: "textoToastify",
                style: {
                  background: 'lightgreen'
                },
                onClick: () => {
                  Swal.fire({
                    title: `Deseas eliminar el articulo "${producto.title}"?`,
                    text: "Podras agregarlo luego",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Si, eliminarlo!',
                  }).then((result) => {
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
          // console.log(btn.dataset.id)
          const producto = data.find(item => item.id === parseInt(btn.dataset.id))
          producto.cantidad = 1
          if (carrito.hasOwnProperty(producto.id)) {
              producto.cantidad = carrito[producto.id].cantidad + 1
          }
          carrito[producto.id] = { ...producto }
          // console.log('carrito', carrito)
          pintarCarrito()
      })
  })
}

const items = document.querySelector('#items')

const pintarCarrito = () => {

  //pendiente innerHTML
  items.innerHTML = ''

  const template = document.querySelector('#template-carrito').content
  const fragment = document.createDocumentFragment()

  Object.values(carrito).forEach(producto => {
      // console.log('producto', producto)
      template.querySelector('th').textContent = producto.id
      template.querySelectorAll('td')[0].textContent = producto.title
      template.querySelectorAll('td')[1].textContent = producto.cantidad
      template.querySelector('span').textContent = producto.precio * producto.cantidad
      
      //botones
      template.querySelector('.btn-info').dataset.id = producto.id
      template.querySelector('.btn-danger').dataset.id = producto.id
      const clone = template.cloneNode(true)
      fragment.appendChild(clone)
  })

  items.appendChild(fragment)

  pintarFooter()
  accionBotones()
}

const footer = document.querySelector('#footer-carrito')
const pintarFooter = () => {

  footer.innerHTML = ''

  if (Object.keys(carrito).length === 0) {
      footer.innerHTML = `
      <th scope="row" colspan="5">Carrito vacío con innerHTML</th>
      `
      return
  }

  const template = document.querySelector('#template-footer').content
  const fragment = document.createDocumentFragment()

  // sumar cantidad y sumar totales
  const nCantidad = Object.values(carrito).reduce((acc, { cantidad }) => acc + cantidad, 0)
  const nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio ,0)
  // console.log(nPrecio)

  template.querySelectorAll('td')[0].textContent = nCantidad
  template.querySelector('span').textContent = nPrecio

  const clone = template.cloneNode(true)
  fragment.appendChild(clone)

  footer.appendChild(fragment)


  const boton = document.querySelector('#vaciar-carrito')
  boton.addEventListener('click', () => {
    Swal.fire({
            width: 2500,
            title: `Total a pagar: $${nPrecio}`,
            text: 'En breves nos pondremos en contacto!',
            icon: 'success',
            confirmButtonText: 'Salir'
          })
      carrito = {}
      pintarCarrito()
  })

}

const accionBotones = () => {
  const botonesAgregar = document.querySelectorAll('#items .btn-info')
  const botonesEliminar = document.querySelectorAll('#items .btn-danger')

  // console.log(botonesAgregar)

  botonesAgregar.forEach(btn => {
      btn.addEventListener('click', () => {
          // console.log(btn.dataset.id)
          const producto = carrito[btn.dataset.id]
          producto.cantidad ++
          carrito[btn.dataset.id] = { ...producto }
          pintarCarrito()
      })
  })

  botonesEliminar.forEach(btn => {
      btn.addEventListener('click', () => {
          // console.log('eliminando...')
          const producto = carrito[btn.dataset.id]
          producto.cantidad--
          if (producto.cantidad === 0) {
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