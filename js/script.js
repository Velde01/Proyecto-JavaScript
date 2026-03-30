// ARRAY DE OBJETOS (mejor que 2 arrays separados)
const autos = [
    {
        id: 0,
        nombre: "Toyota Corolla",
        precio: 20000,
        imagen: "img/toyota.jpg"
    },
    {
        id: 1,
        nombre: "Chevrolet Onix",
        precio: 15000,
        imagen: "img/chevrolet.jpg"
    },
    {
        id: 2,
        nombre: "Ford Ranger",
        precio: 35000,
        imagen: "img/ford.jpg"
    }
];

// CARRITO
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// ELEMENTOS DEL DOM
const contenedorAutos = document.getElementById("lista-autos");
const listaCarrito = document.getElementById("carrito");
const totalHTML = document.getElementById("total");
const btnVaciar = document.getElementById("vaciarCarrito");


// FUNCION MOSTRAR AUTOS
function mostrarAutos() {

    contenedorAutos.innerHTML = "";

    autos.forEach(auto => {

        const div = document.createElement("div");
        div.classList.add("card");

        div.innerHTML = `
            <img src="${auto.imagen}" alt="${auto.nombre}">
            <h3>${auto.nombre}</h3>
            <p>$${auto.precio}</p>
            <button onclick="agregarAlCarrito(${auto.id})">Comprar</button>
        `;

        contenedorAutos.appendChild(div);
    });
}


// FUNCION AGREGAR AL CARRITO
function agregarAlCarrito(id) {

    const auto = autos.find(a => a.id === id);
    carrito.push(auto);

    localStorage.setItem("carrito", JSON.stringify(carrito));

    mostrarCarrito();
}


// FUNCION MOSTRAR CARRITO
function mostrarCarrito() {

    listaCarrito.innerHTML = "";

    let total = 0;

    carrito.forEach(auto => {

        const li = document.createElement("li");
        li.textContent = `${auto.nombre} - $${auto.precio}`;

        listaCarrito.appendChild(li);

        total += auto.precio;
    });

    totalHTML.textContent = "Total: $" + total;
}


// EVENTO VACIAR CARRITO
btnVaciar.addEventListener("click", () => {

    carrito = [];
    localStorage.removeItem("carrito");

    mostrarCarrito();
});


// INICIO
mostrarAutos();
mostrarCarrito();