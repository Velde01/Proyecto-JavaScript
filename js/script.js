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

        const img = document.createElement("img");
        img.src = auto.imagen;

        const nombre = document.createElement("h3");
        nombre.textContent = auto.nombre;

        const precio = document.createElement("p");
        precio.textContent = "$" + auto.precio;

        const boton = document.createElement("button");
        boton.textContent = "Comprar";

        boton.addEventListener("click", () => {
            agregarAlCarrito(auto.id);
        });

        div.append(img, nombre, precio, boton);
        contenedorAutos.appendChild(div);
    });
}


// FUNCION AGREGAR AL CARRITO
function agregarAlCarrito(id) {

    const auto = autos.find(a => a.id === id);
    carrito.push(auto);

    localStorage.setItem("carrito", JSON.stringify(carrito));

    mostrarCarrito();

    Toastify({
        text: "Auto agregado al carrito",
        duration: 2000,
        gravity: "top",
        position: "right",
        style: {
            background: "#550302",
        }
    }).showToast();
}


// FUNCION MOSTRAR CARRITO
function mostrarCarrito() {

    listaCarrito.innerHTML = "";

    if (carrito.length === 0) {
    listaCarrito.innerHTML = "<p>El carrito está vacío</p>";
    totalHTML.textContent = "Total: $0";
        return;
    }

    let total = 0;

    carrito.forEach(auto => {

        const li = document.createElement("li");
        li.textContent = `${auto.nombre} - $${auto.precio}`;

        listaCarrito.appendChild(li);

        total += auto.precio;
    });

    totalHTML.textContent = "Total: $" + total;
}

let autos = [];

async function cargarAutos() {
    const response = await fetch("data/autos.json");
    autos = await response.json();
    mostrarAutos();
}

// EVENTO VACIAR CARRITO
btnVaciar.addEventListener("click", () => {

    carrito = [];
    localStorage.removeItem("carrito");

    mostrarCarrito();
});


// INICIO
cargarAutos();
mostrarCarrito();