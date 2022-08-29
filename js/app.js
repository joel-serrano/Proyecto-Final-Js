let carritoDeCompras = []

let contenedorProductos = document.getElementById('products-container')

let contenedorCarrito = document.getElementById('carrito-contenedor')

let vaciarCarrito = document.getElementById('vaciar-carrito')

let contadorCarrito = document.getElementById('contador-carrito')

let precioTotal = document.getElementById('precio-total')



// Fact---------

fetch('js/fact.json')
.then(res => res.json())
.then(data => {
    data.forEach((fact) =>{
        console.log(fact)
    })
});



document.addEventListener('DOMContentLoaded', () => {
    if(localStorage.getItem('carritoDeCompras')){
        carritoDeCompras = JSON.parse(localStorage.getItem('carritoDeCompras'))
        actualizarCarrito()
    }
})

mostrarProductos()

vaciarCarrito.addEventListener('click', () =>{
    carritoDeCompras.length = 0
    actualizarCarrito()
})

// Funcion mostrar productos
function mostrarProductos () {
    stockproductos.forEach(item =>{
        let div = document.createElement ('div')
        div.classList.add('products')
        div.innerHTML = `
            <div class="card-new">
            <div class="imgBox">
            <img src="${item.img}" class="zapatilla" alt="...">
            </div>
            <div class="contentBox">
            <h3>${item.nombre}</h3>
            <h2 class="price">$${item.precio}</h2>
            <button id="agregar${item.id}" class="buy"> Agregar</button>
            </div>
            </div>
        `
        contenedorProductos.appendChild(div);
        const boton = document.getElementById(`agregar${item.id}`)
        boton.addEventListener('click', () => {
            Toastify({
                text: "Agregado al Carrito!",
                duration: 1500,
                gravity: 'top',
                position: 'left',
                style: {
                    background: "linear-gradient(to right, #363636, #b8b092)",
                  }
            }).showToast();
            agregarAlCarrito(item.id)
        })
    })
}

// Funcion Agregar al carrito---------
function agregarAlCarrito (prodId) {
    const existe = carritoDeCompras.some (prod => prod.id === prodId)
    if(existe){
        const prod = carritoDeCompras.map (prod => {
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else{
    const item = stockproductos.find((prod) => prod.id === prodId)
    carritoDeCompras.push(item)
    console.log(carritoDeCompras);
    }
    actualizarCarrito()
}

// Funcion Eliminar del carrito----------
function eliminarDelCarrito (prodId){
    const item = carritoDeCompras.find ((prod) => prod.id === prodId)
    const indice = carritoDeCompras.indexOf(item)
    carritoDeCompras.splice (indice, 1)
    actualizarCarrito()
}

// Funcion Actualizar carrito--------
function actualizarCarrito () {
    contenedorCarrito.innerHTML = "" 

    carritoDeCompras.forEach((item) =>{
        const div = document.createElement('div')
        div.className = ('producto-en-carrito')
        div.innerHTML = `
        <div class="zindex">
        <p><img src="${item.img}" style="width:10rem;"></p>
        <p>${item.nombre}</p>
        <p> Precio: ${item.precio} </p>
        <p> Cantidad: <span id="cantidad">${item.cantidad} </span> </p>
        <button onclick = "eliminarDelCarrito(${item.id})" class ="boton-eliminar"> <i class ="small material-icons"> clear </button>
        </div> 
        `
        contenedorCarrito.appendChild(div)
    })

    localStorage.setItem(`carritoDeCompras`, JSON.stringify(carritoDeCompras))
    contadorCarrito.innerText = carritoDeCompras.length
    precioTotal.innerText = carritoDeCompras.reduce((acc, prod)=> acc + prod.precio, 0)
}

